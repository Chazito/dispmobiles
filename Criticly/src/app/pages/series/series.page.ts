import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  tienePrivilegios: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((e: any) => {
      if (e && e.url) {
        this.tienePrivilegios = e.url.includes('auth=true')
      }
    })
  }

  ngOnInit() {
  }

}
