import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  email: string = "";
  resetForm!: FormGroup;
  btnDisabled: boolean = false
  tiempoRestante: number = 30;
  intervalo: any;
  temporizadorHabilitado: boolean = false;

  constructor(private sqlService: ServicebdService, private alertController: AlertController, private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async enviarEmail() {
    this.btnDisabled = true
    const nuevaPassword = this.generarPassword();
    const usuario = await this.sqlService.selectUsuarioPorEmail(this.resetForm.get('email')?.value) as Usuario
    await this.sqlService.modificarPassword({ ...usuario, clave: nuevaPassword })
    await emailjs.send("service_l6fu4hb", "template_n19qbr8", { password: nuevaPassword, to_email: usuario.correo }).catch((e: EmailJSResponseStatus) => this.presentAlert("Error", e.status + e.text))
    this.iniciarTemporizador()
    this.presentAlert("Recuperar contraseña", "Se ha enviado un correo con su nueva contraseña")
  }

  iniciarTemporizador() {
    this.temporizadorHabilitado = true
    this.tiempoRestante = 30;
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.intervalo);
        this.temporizadorHabilitado = false
        this.btnDisabled = false
      }
    }, 1000);
  }

  generarPassword(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
