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
  StrongPasswordRegx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  nameRegex: RegExp = /^[A-Za-z]{1,20}$/;

  inputNombre: string = '';
  inputApellido: string = '';
  inputEmail: string = '';
  inputPass: string = '';
  inputPass2: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private db: ServicebdService
  ) {}

  // Check if passwords match
  passwordsMatch(): boolean {
    return this.inputPass === this.inputPass2;
  }

  // Validation checks for each field
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
      this.isValidName(this.inputNombre) &&
      this.isValidName(this.inputApellido) &&
      this.isValidEmail(this.inputEmail) &&
      this.isValidPassword(this.inputPass) &&
      this.passwordsMatch()
    ) {
      let user: any = {
        nombre: this.inputNombre,
        apellido: this.inputApellido,
        correo: this.inputEmail,
        clave: this.inputPass,
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
