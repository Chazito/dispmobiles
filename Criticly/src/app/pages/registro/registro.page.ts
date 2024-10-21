import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  StrongPasswordRegx: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  nameRegex: RegExp = /^[A-Za-z]{1,20}$/;

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController, private db: ServicebdService) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      apellido: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.StrongPasswordRegx)],
      ],
      password2: [
        '',
        [Validators.required, Validators.pattern(this.StrongPasswordRegx)],
      ],
    });
  }

  ngOnInit() { }

  onRegistroClick() {
    let user: any;
    user.nombre = this.form.get('nombre')?.value;
    user.apellido = this.form.get('apellido')?.value;
    user.correo = this.form.get('email')?.value;
    user.clave = this.form.get('password')?.value;

    this.db.insertarUsuario(user);

    this.presentAlert("Registro completo", "Recibira un correo de confirmacion al email introducido", "Volver al Login");

    this.router.navigate(['/login']);
  }

  async presentAlert(titulo: string, mensaje: string, boton: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: boton,
          cssClass: "alert-button",
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ],

    });

    await alert.present();
  }
}
