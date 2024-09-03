import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarToolbar: boolean = true;

  isLoggedIn: boolean = false;
  tienePrivilegios: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.mostrarToolbar = !(e.url.includes('/buscar') || e.url.includes('/perfil-inicio') || e.url.includes('/login')
          || e.url.includes('/perfil-preferencias') || e.url.includes('/peliculas/') || e.url.includes('/usuarios') || e.url.includes('/nuevo-editar-titulo') || e.url.includes('/recuperar'))
      }
    })
  }

  urlPerfil(): string {
    return this.isLoggedIn ? '/perfil-inicio' : '/login';
  }

  toggleAuth() {
    this.isLoggedIn = !this.isLoggedIn;
    this.tienePrivilegios = !this.tienePrivilegios;
  }
}
