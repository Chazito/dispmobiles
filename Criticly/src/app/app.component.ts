import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarToolbar: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.mostrarToolbar = !(e.url.includes('/buscar') || e.url.includes('/perfil-inicio'))
      }
    })
  }
}
