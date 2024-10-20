import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  StrongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  form: FormGroup;

  inputNombre: string = "";
  inputApellido: string = "";
  inputEmail: string = "";
  inputPass: string = "";
  inputPass2: string = "";

  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
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
    this.presentAlert("Registro completo", "Recibira un correo de confirmacion al email introducido", "Volver al Login");
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
