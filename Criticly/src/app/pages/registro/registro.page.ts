import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Usuario } from 'src/app/services/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  StrongPasswordRegx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  nameRegex: RegExp = /^[A-Za-zÀ-ÿ\s]+$/;

  inputNombre: string = '';
  inputApellido: string = '';
  inputEmail: string = '';
  inputPass: string = '';
  inputPass2: string = '';

  btnDisabled: boolean = true
  constructor(
    private router: Router,
    private alertController: AlertController,
    private db: ServicebdService,
    private auth: AuthService
  ) { }

  passwordsMatch(): boolean {
    return this.inputPass === this.inputPass2;
  }

  isValidName(name: string): boolean {
    let result = this.nameRegex.test(name);
    //console.log("Testing name: " + name + " === " + result);
    return result;
  }

  isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  hasMinLength(): boolean {
    return this.inputPass.length >= 8 && this.inputPass.length <= 20;
  }

  hasLowerCase(): boolean {
    return /[a-z]/.test(this.inputPass);
  }

  hasUpperCase(): boolean {
    return /[A-Z]/.test(this.inputPass);
  }

  hasSpecialChar(): boolean {
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.inputPass);
  }

  hasNumber(): boolean {
    return /\d/.test(this.inputPass);
  }

  // Verifica si la contraseña es válida
  isValidPassword(): boolean {
    return (
      this.hasMinLength() &&
      this.hasLowerCase() &&
      this.hasUpperCase() &&
      this.hasSpecialChar() &&
      this.hasNumber()
    );
  }

  validData(): boolean {
    return this.isValidName(this.inputNombre) &&
      this.isValidName(this.inputApellido) &&
      this.isValidEmail(this.inputEmail) &&
      this.isValidPassword() &&
      this.passwordsMatch()
  }

  async onRegistroClick() {
    this.btnDisabled = true
    if (
      this.validData()
    ) {
      //console.log("Valid data, inserting")
      let user: Usuario = {
        nombre: this.inputNombre,
        apellido: this.inputApellido,
        correo: this.inputEmail,
        clave: this.inputPass,
      };
      await this.db.insertarUsuario(user).then(async () => {
        await this.auth.validarUsuarioPorEmail(user.correo!, user.clave!);
        emailjs.send("service_l6fu4hb", "template_gqf4zyi", { to_name: user.nombre, to_email: user.correo }).then(async () => {
          await this.presentAlert(
            'Registro exitoso',
            'Enviamos un correo de confirmación a su email',
            'OK'
          ).catch(e => this.presentAlert("ERROR EMAILJS", (e as EmailJSResponseStatus).text, "OK"));
        })
      });
      this.router.navigate(['/home']);
    } else {
      this.btnDisabled = false
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
