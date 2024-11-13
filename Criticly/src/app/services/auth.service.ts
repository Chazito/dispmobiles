import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './usuario';
import { ServicebdService } from './servicebd.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuthObservable = this.isAuthSubject.asObservable();
  private usuario: Usuario | null = null;

  constructor(private storage: Storage, private sqlService: ServicebdService, private toastController: ToastController, private router: Router) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const storedAuth = await this.storage.get('isAuth');
    this.sqlService.dbState().subscribe(async (res: any) => {
      if (res) {
        if (storedAuth === true) {
          const userID = await this.storage.get('userID'); // Await the userID
          if (userID) {
            this.usuario = await this.sqlService.selectUsuarioPorId(userID); // Await the SQL service call
            this.isAuthSubject.next(storedAuth === true);
          }
        }
      }
    });
  }

  async validarUsuarioPorEmail(email: string, password: string): Promise<Usuario | null> {
    try {
      const usuarioData = await this.sqlService.validarUsuarioPorEmail(email, password);
      if (usuarioData) {
        this.usuario = usuarioData;
        await this.login()
        return this.usuario;
      } else {
        this.usuario = null;
        return null;
      }
    } catch (error) {
      console.error('Error al autenticar usuario', error);
      this.usuario = null;
      return null;
    }
  }

  async login() {
    await this.storage.set('isAuth', true);
    await this.storage.set('userID', this.usuario?.idUsuario)
    this.isAuthSubject.next(true);
    const usuarioEsValido = !!this.usuario?.idUsuario;
    if (usuarioEsValido) {
      this.presentToast("bottom", "Sesión iniciada correctamente", 2500);
      this.router.navigate(['/home']);
      return true
    }
    else {
      this.presentToast("bottom", "Credenciales inválidas", 4000);
      return false
    }
  }

  async logout() {
    this.router.navigate(['../home']);
    await this.storage.set('isAuth', false);
    this.usuario = null;
    this.isAuthSubject.next(false);
    this.presentToast("bottom", "Sesión finalizada", 4000);

  }

  isAdmin() {
    return this.usuario?.id_rol === 2;
  }

  async isAuthenticated(): Promise<boolean> {
    const isAuth = await this.storage.get('isAuth');
    return isAuth === true;
  }

  get usuarioValue() {
    return this.usuario
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string, duracion: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: position,
    });

    await toast.present();
  }
}
