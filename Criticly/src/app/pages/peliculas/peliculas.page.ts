import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';

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


  constructor(private router: Router, private sqlService: ServicebdService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuthObservable.subscribe(() => {
      if (this.auth.usuarioValue?.id_rol === 1) { this.tienePrivilegios = true } else { this.tienePrivilegios = false }
    })
    this.sqlService.selectDestacados()
    this.sqlService.fetchDestacados().subscribe(res => {
      this.destacados = res
    })
    this.sqlService.fetchCriticados().subscribe(res => {
      this.criticados = res
    })
    this.sqlService.fetchMejor().subscribe(res => {
      this.mejores = res
    })
  }

}
