import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { AuthService } from './services/auth.service';
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

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.mostrarToolbar = !(e.url.includes('/buscar') || e.url.includes('/perfil-inicio') || e.url.includes('/login')
          || e.url.includes('/perfil-preferencias') || e.url.includes('/peliculas/') || e.url.includes('/usuarios') || e.url.includes('/nuevo-editar-titulo')
          || e.url.includes('/recuperar') || e.url.includes('/registro') || e.url.includes('/recuperar') || e.url.includes('/escribir-resenia'))
      }
    })
    this.auth.isAuthObservable.subscribe((isAuth) => {
      this.isAuth = isAuth; // Actualiza isLoggedIn cuando isAuth cambia
    });
  }

  urlPerfil(): string {
    return this.isAuth ? '/perfil-inicio' : '/login';
  }

  logout() {
    this.auth.logout()
  }
}
