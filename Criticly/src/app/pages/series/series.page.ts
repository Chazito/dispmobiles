import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  tienePrivilegios: boolean = false;
  destacados: Titulo[] = []
  criticados: Titulo[] = []
  mejores: Titulo[] = []


  constructor(private sqlService: ServicebdService, private auth: AuthService) { }

  async ngOnInit() {
    this.tienePrivilegios = await this.auth.isAdmin()
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

  ionViewWillEnter() {
    this.sqlService.selectDestacados();
    this.sqlService.selectCriticados();
    this.sqlService.selectMejores();
  }
}

