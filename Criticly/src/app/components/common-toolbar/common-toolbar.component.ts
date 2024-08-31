import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-toolbar',
  templateUrl: './common-toolbar.component.html',
  styleUrls: ['./common-toolbar.component.scss'],
})
export class CommonToolbarComponent  implements OnInit {

  @Input() title : string = "";

  constructor() { }

  ngOnInit() {}

}
