import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './usuario';
import { ServicebdService } from './servicebd.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuthObservable = this.isAuthSubject.asObservable();
  private usuario: Usuario | null = null;

  constructor(private storage: Storage, private sqlService: ServicebdService) {
    this.init();
  }

  async init() {
    await this.storage.create();

    const storedAuth = await this.storage.get('isAuth');
    this.isAuthSubject.next(storedAuth === true);
  }

  async validarUsuarioPorEmail(email: string, password: string): Promise<Usuario | null> {
    try {
      const usuarioData = await this.sqlService.selectUsuarioPorEmail(email, password);
      if (usuarioData) {
        this.usuario = usuarioData;
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
    this.isAuthSubject.next(true);
  }

  async logout() {
    await this.storage.set('isAuth', false);
    this.isAuthSubject.next(false);
  }

  async isAuthenticated(): Promise<boolean> {
    const isAuth = await this.storage.get('isAuth');
    return isAuth === true;
  }

  get usuarioValue() {
    return this.usuario
  }
}
