import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
import emailjs from '@emailjs/browser';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
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
  ) { }

  passwordsMatch(): boolean {
    return this.inputPass === this.inputPass2;
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

  async onRegistroClick() {
    if (
      this.isValidName(this.inputNombre) &&
      this.isValidName(this.inputApellido) &&
      this.isValidEmail(this.inputEmail) &&
      this.isValidPassword(this.inputPass) &&
      this.passwordsMatch()
    ) {
      let user: Usuario = {
        nombre: this.inputNombre,
        apellido: this.inputApellido,
        correo: this.inputEmail,
        clave: this.inputPass,
      };
      await this.db.insertarUsuario(user).then(() => emailjs.send("service_0wgkgxo", "template_gqf4zyi", { to_name: user.nombre, to_email: user.correo })
      ).then(() => {
        this.presentAlert(
          'Registro exitoso',
          'Enviamos un correo de confirmación a su email',
          'Volver al login'
        );
      });
      this.router.navigate(['/home']);
    } else {
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
          cssClass: 'alert-button'
        },
      ],
    });

    await alert.present();
  }
}
