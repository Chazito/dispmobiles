import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_KEY } from 'environment';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: any = []
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://newsapi.org/v2/everything?q=película&language=es&apiKey=" + API_KEY).subscribe((res: any) => {
      this.noticias = res.articles.filter((f: any) => f.author !== null).slice(0, 20)
    })
  }

}
