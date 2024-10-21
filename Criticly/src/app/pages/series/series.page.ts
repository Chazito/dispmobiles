import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  tienePrivilegios: boolean = true;
  destacados: Titulo[] = []
  criticados: Titulo[] = []
  mejores: Titulo[] = []


  constructor(private router: Router, private sqlService: ServicebdService) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.tienePrivilegios = e.url.includes('auth=true')
      }
    })
    sqlService.fetchDestacados().subscribe(res => {
      this.destacados = res
    })
    sqlService.fetchCriticados().subscribe(res => {
      this.criticados = res
    })
    sqlService.fetchMejor().subscribe(res => {
      this.mejores = res
    })
  }

  ngOnInit() {
  }

}
