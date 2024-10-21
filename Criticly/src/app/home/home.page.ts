import { Component, OnInit } from '@angular/core';
import { ServicebdService } from '../services/servicebd.service';
import { Titulo } from '../services/titulo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  arregloDestacados: Titulo[] = []
  arregloCriticados: Titulo[] = []
  arregloMejores: Titulo[] = []

  constructor(private db: ServicebdService) {

  }

  ngOnInit() {

    this.db.dbState().subscribe(res => {
      if (res) {
        this.db.selectDestacados();
        this.db.selectCriticados();
        this.db.selectMejores();

        this.db.fetchDestacados().subscribe(data => {
          this.arregloDestacados = data;
        })
        this.db.fetchCriticados().subscribe(data => {
          this.arregloCriticados = data;
        })
        this.db.fetchMejor().subscribe(data => {
          this.arregloMejores = data;
        })
      }
    })
  }

  clickOnEntry(x: any) {
    console.log("Woops");
  }

}
