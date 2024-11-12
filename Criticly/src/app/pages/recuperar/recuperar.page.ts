import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';
import emailjs from '@emailjs/browser';
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
  constructor(private sqlService: ServicebdService, private alertController: AlertController, private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async enviarEmail() {
    const nuevaPassword = this.generarPassword();
    const usuario = await this.sqlService.selectUsuarioPorEmail(this.resetForm.get('email')?.value) as Usuario
    await this.sqlService.modificarPassword({ ...usuario, clave: nuevaPassword })
    await emailjs.send("service_0wgkgxo", "template_n19qbr8", { password: nuevaPassword, to_email: usuario.correo }).catch(e => this.presentAlert("Error", JSON.stringify(e)))
    this.presentAlert("Recuperar contraseña", "Se ha enviado un correo con su nueva contraseña")
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
