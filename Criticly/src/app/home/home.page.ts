import { Component, OnInit } from '@angular/core';
import { ServicebdService } from '../services/servicebd.service';
import { Titulo } from '../services/titulo';
import { peliculas } from 'src/assets/datos';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from 'enviroment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  arregloDestacados: Titulo[] = []
  arregloCriticados: Titulo[] = []
  arregloMejores: Titulo[] = []
  noticias: any = []

  constructor(private db: ServicebdService, private router: Router, private http: HttpClient) {

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
    this.http.get("https://newsapi.org/v2/everything?q=película&language=es&apiKey=" + API_KEY).subscribe((res: any) => {
      this.noticias = res.articles.filter((f: any) => f.author !== null).filter((f: any, index: number) => [0, 8].includes(index))
    })
  }

  clickOnEntry(x: any) {
    this.router.navigate(['/titulo/' + x.idTitulo])
  }

  async navegarANoticia(url: string) {
    await Browser.open({ url, toolbarColor: "#060B1D" })
  }
}
