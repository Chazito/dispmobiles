import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  StrongPasswordRegx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
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
  passwordsMatch(): boolean {
    return this.form.get('password')?.value === this.form.get('password2')?.value;
  }

  isValidName(name: string): boolean {
    return this.nameRegex.test(name);
  }

  isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  isValidPassword(password: string): boolean {
    return this.StrongPasswordRegx.test(password);
  }

  onRegistroClick() {
    if (
      this.isValidName(this.form.get('nombre')?.value) &&
      this.isValidName(this.form.get('apellido')?.value) &&
      this.isValidEmail(this.form.get('email')?.value) &&
      this.isValidPassword(this.form.get('password')?.value) &&
      this.passwordsMatch()
    ) {
      let user: any = {
        nombre: this.form.get('nombre')?.value,
        apellido: this.form.get('apellido')?.value,
        correo: this.form.get('email')?.value,
        clave: this.form.get('password')?.value,
      };

      this.db.insertarUsuario(user);
      this.presentAlert(
        'Registro completo',
        'Recibirá un correo de confirmación al email introducido',
        'Volver al Login'
      );
      this.router.navigate(['/login']);
    } else {
      // Handle validation errors
      this.presentAlert('Error', 'Por favor, revisa los datos ingresados.', 'OK');
    }
  }

  async presentAlert(titulo: string, mensaje: string, boton: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: boton,
          cssClass: 'alert-button',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
