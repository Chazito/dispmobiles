import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { AuthService } from './services/auth.service';
import emailjs from '@emailjs/browser';
import { MAIL_KEY } from 'enviroment';
import { MenuController } from '@ionic/angular';
import { Usuario } from './services/usuario';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarToolbar: boolean = true;

  tienePrivilegios: boolean = false;
  usuario: Usuario = {}
  nombreApellido: string | null = null;

  constructor(private router: Router, private auth: AuthService, private menu: MenuController) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.mostrarToolbar = !(e.url.includes('/buscar') || e.url.includes('/perfil-inicio') || e.url.includes('/login')
          || e.url.includes('/perfil-preferencias') || e.url.includes('/peliculas/') || e.url.includes('/usuarios') || e.url.includes('/nuevo-editar-titulo')
          || e.url.includes('/recuperar') || e.url.includes('/registro') || e.url.includes('/recuperar') || e.url.includes('/escribir-resenia') || e.url.includes('/nuevo')
          || e.url.includes('/editar') || e.url.includes('roles/') || e.url.includes('tipos/') || e.url.includes('usuarios/') || e.url.includes('resennas/') || e.url.includes('titulo/') || e.url.includes('modificar-resenia'))
      }
    })
    this.auth.usuarioObservable.subscribe(async usuario => {
      if (!usuario) {
        this.nombreApellido = null;
        this.usuario = {}
        return
      }
      this.tienePrivilegios = await this.auth.isAdmin();
      this.usuario = usuario;
      this.nombreApellido = `${this.usuario?.nombre} ${this.usuario?.apellido}`
    });
    emailjs.init({
      publicKey: MAIL_KEY,
    })
  }

  urlPerfil(): string {
    return !!(this.usuario && this.usuario.idUsuario) ? '/perfil-inicio' : '/login';
  }

  logout() {
    this.auth.logout()
    this.menu.close()
  }
}
