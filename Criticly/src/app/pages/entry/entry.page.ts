import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {
  rating: number = 3.4;

  constructor() { }

  ngOnInit() { }

  get ratingPercentage(): number {
    return (this.rating / 5) * 100;
  }

}
