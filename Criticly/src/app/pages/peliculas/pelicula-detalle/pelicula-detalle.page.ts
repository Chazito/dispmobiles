import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  rating: number = 3.4;

  constructor() { }

  ngOnInit() { }

  get ratingPercentage(): number {
    return (this.rating / 5) * 100;
  }
}
