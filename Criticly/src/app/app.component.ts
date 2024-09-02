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

  isLoggedIn : boolean = false;
  
  constructor(private router: Router) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.mostrarToolbar = !(e.url.includes('/buscar') || e.url.includes('/perfil-inicio'))
      }
    })
  }

  //Redirige al login o al perfil dependiendo de si esta loggeado
  getPersonPath(): string{
    return this.isLoggedIn ? '/perfil-inicio' : '/login';
  }

  //Muestra "Perfil" o "Iniciar sesion"
  getPersonLabel(): string{
    return this.isLoggedIn ? 'Perfil' : 'Iniciar Sesión';
  }
}
