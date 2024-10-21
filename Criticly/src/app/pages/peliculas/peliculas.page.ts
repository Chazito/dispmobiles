import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';
import { peliculas } from 'src/assets/datos'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  tienePrivilegios: boolean = false;
  destacados: Titulo[] = []
  criticados: Titulo[] = []
  mejores: Titulo[] = []


  constructor(private router: Router, private sqlService: ServicebdService, private auth: AuthService) {
    auth.isAuthObservable.subscribe(() => {
      if (auth.usuarioValue?.id_rol === 1) { this.tienePrivilegios = true } else { this.tienePrivilegios = false }
    })
    sqlService.fetchDestacados().subscribe(res => {
      if (res.length < 1) {
        this.destacados = peliculas
      } else {
        this.destacados = res
      }
    })
    sqlService.fetchCriticados().subscribe(res => {
      if (res.length < 1) {
        this.criticados = peliculas
      } else {
        this.criticados = res
      }
    })
    sqlService.fetchMejor().subscribe(res => {
      if (res.length < 1) {
        this.mejores = peliculas
      } else {
        this.mejores = res
      }
    })
  }

  ngOnInit() {
  }

}
