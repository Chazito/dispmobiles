import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './usuario';
import { ServicebdService } from './servicebd.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioObservable = this.usuarioSubject.asObservable();

  constructor(private storage: Storage, private sqlService: ServicebdService, private toastController: ToastController, private router: Router) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const storedAuth = await this.storage.get('isAuth');
    this.sqlService.dbState().subscribe(async (res: any) => {
      if (res) {
        if (storedAuth === true) {
          const userID = await this.storage.get('userID');
          if (userID) {
            this.usuarioSubject.next(await this.sqlService.selectUsuarioPorId(userID));
          }
        }
      }
    });
  }

  async validarUsuarioPorEmail(email: string, password: string): Promise<Usuario | null> {
    try {
      const usuarioData = await this.sqlService.validarUsuarioPorEmail(email, password);
      if (usuarioData) {
        this.usuarioSubject.next(usuarioData);
        if (!(await this.storage.get('userID'))) {
          await this.login()
        }
        return usuarioData;
      } else {
        this.usuarioSubject.next(null);
        this.presentToast("bottom", "Credenciales inválidas", 4000);
        return null;
      }
    } catch (error) {
      console.error('Error al autenticar usuario', error);
      this.usuarioSubject.next(null);
      return null;
    }
  }

  async login() {
    const usuario = await firstValueFrom(this.usuarioObservable)
    if (!usuario || !usuario.idUsuario) {
      return false
    }
    await this.storage.set('userID', usuario.idUsuario)
    this.presentToast("bottom", "Sesión iniciada correctamente", 2500);
    this.router.navigate(['/home']);
    return true
  }

  async logout() {
    this.router.navigate(['../home']);
    await this.storage.set('userID', null);
    this.usuarioSubject.next(null);
    this.presentToast("bottom", "Sesión finalizada", 4000);
  }

  async isAdmin() {
    const usuario = await firstValueFrom(this.usuarioObservable)
    return !!usuario && !!(usuario.id_rol === 3 || usuario.id_rol === 1);
  }

  async isSuperAdmin(){
    const usuario = await firstValueFrom(this.usuarioObservable)
    return !!usuario && !!(usuario.id_rol === 1);
  }

  async isAuthenticated(): Promise<boolean> {
    const isAuth = await this.storage.get('isAuth');
    return isAuth === true;
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
