import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_KEY } from 'environment';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: any = []
  cargandoNoticias: boolean = false
  totalImagenes: number = 0;
  imagenesCargadas: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargandoNoticias = true
    this.http.get("https://newsapi.org/v2/everything?q=película&language=es&apiKey=" + API_KEY).subscribe((res: any) => {
      this.noticias = res.articles.filter((f: any) => f.author !== null).slice(0, 20)
      this.totalImagenes = this.noticias.length;
      this.imagenesCargadas = 0;
    })
  }

  imagenCargada() {
    this.imagenesCargadas++;
    if (this.imagenesCargadas >= 20) {
      this.cargandoNoticias = false;
    }
  }

  async navegarANoticia(url: string) {
    await Browser.open({ url, toolbarColor: "#060B1D" })
  }
}
