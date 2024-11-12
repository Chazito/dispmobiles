import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { AuthService } from './services/auth.service';
import emailjs from '@emailjs/browser';
import { MAIL_KEY } from 'environment';
import { MenuController } from '@ionic/angular';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarToolbar: boolean = true;

  isAuth: boolean = false;
  tienePrivilegios: boolean = false;
  nombreApellido: string | null = null;
  correo: string | null = null;

  constructor(private router: Router, private auth: AuthService, private menu: MenuController) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.mostrarToolbar = !(e.url.includes('/buscar') || e.url.includes('/perfil-inicio') || e.url.includes('/login')
          || e.url.includes('/perfil-preferencias') || e.url.includes('/peliculas/') || e.url.includes('/usuarios') || e.url.includes('/nuevo-editar-titulo')
          || e.url.includes('/recuperar') || e.url.includes('/registro') || e.url.includes('/recuperar') || e.url.includes('/escribir-resenia') || e.url.includes('/nuevo')
          || e.url.includes('/editar') || e.url.includes('roles/') || e.url.includes('tipos/') || e.url.includes('usuarios/') || e.url.includes('resennas/'))
      }
    })
    this.auth.isAuthObservable.subscribe((isAuth) => {
      this.isAuth = isAuth;
      this.tienePrivilegios = this.auth.isAdmin();
      const usuario = auth.usuarioValue;
      if (isAuth) {
        this.nombreApellido = `${usuario?.nombre} ${usuario?.apellido}`
        this.correo = usuario?.correo ? usuario.correo : null
      } else {
        this.nombreApellido = null;
        this.correo = null;
      }
      emailjs.init({
        publicKey: MAIL_KEY,
      })
    });

  }

  urlPerfil(): string {
    return this.isAuth ? '/perfil-inicio' : '/login';
  }

  logout() {
    this.auth.logout()
    this.menu.close()
  }
}
