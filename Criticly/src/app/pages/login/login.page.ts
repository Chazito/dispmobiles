import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private toastController: ToastController, private fb: FormBuilder, private auth: AuthService, private sqlService: ServicebdService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string, duracion: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: position,
    });

    await toast.present();
  }

  async login(): Promise<boolean> {
    const usuarioEsValido = await this.auth.validarUsuarioPorEmail(this.form.get('email')?.value, this.form.get('password')?.value);
    if (usuarioEsValido) {
      this.presentToast("bottom", "Sesión iniciada correctamente", 2500);
      return true
    }
    else {
      this.presentToast("bottom", "Credenciales invalidas", 4000);
      return false
    }
  }
}
