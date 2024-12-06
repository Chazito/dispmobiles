import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-perfil-inicio',
  templateUrl: './perfil-inicio.page.html',
  styleUrls: ['./perfil-inicio.page.scss'],
})
export class PerfilInicioPage implements OnInit {

  StrongPasswordRegx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  nameRegex: RegExp = /^[A-Za-z]{1,20}$/;

  user: Usuario = {};
  password: string = "";
  password2: string = "";
  passwordActual: string = ""
  constructor(private bd: ServicebdService, private auth: AuthService, private alertController: AlertController) { }

  ngOnInit() {
    this.auth.usuarioObservable.subscribe(usuario => {
      if (!usuario) return
      this.user = usuario;
    })
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async guardarCambios() {
    if (this.isValidName(this.user.nombre!) && this.isValidName(this.user.apellido!)) {
      let success = await this.bd.modificarUsuario(this.user);
      if (success) {
        this.auth.validarUsuarioPorEmail(this.user.correo!, this.user.clave!);
        this.presentAlert("", "Datos guardados correctamente.");
      } else {
        this.presentAlert("", "Error al guardar los datos.");
      }
    }
    else {
      this.presentAlert("Cambio de nombre", "Los nombres y apellidos deben ser válidos. Solo letras sin espacios o carácteres especiales.");
    }
  }

  async cambiarPass() {
    if (this.passwordsMatch() && this.isValidPassword()) {
      this.user.clave = this.password;
      let success = await this.bd.modificarUsuario(this.user);
      if (success) {
        this.password = "";
        this.password2 = "";
        this.passwordActual = ""
      }
      else {
        this.presentAlert("Cambio Contraseña", "Error al cambiar la contraseña.");
      }
    }
    else {
      this.presentAlert("Cambio de contraseña", "La contraseña debe cumplir: entre 8 y 20 carácteres, al menos una minúscula, una mayúscula, un carácter especial y un digito númerico.")
    }
  }

  passwordsMatch(): boolean {
    return this.password === this.password2 && this.passwordActual === this.user.clave;
  }

  isValidName(name: string): boolean {
    return this.nameRegex.test(name);
  }

  isValidPassword(): boolean {
    return this.StrongPasswordRegx.test(this.password);
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    if (image.base64String) {
      const base64Image = `data:image/${image.format};base64,${image.base64String}`;
      this.bd.modificarAvatar(base64Image, this.user.idUsuario!).then(() => {
        this.auth.validarUsuarioPorEmail(this.user.correo!, this.user.clave!);
      });
    }
  }

}
