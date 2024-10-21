import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-resenna',
  templateUrl: './resenna.page.html',
  styleUrls: ['./resenna.page.scss'],
})
export class ResennaPage implements OnInit {
  resenna: Resenna = {}
  constructor(private sqlService: ServicebdService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectResennaPorId(id).then((resenna: any) => {
          if (resenna) this.resenna = resenna;
        });
      }
    });
  }

  modificarResenna() {
    this.sqlService.modificarResennaPorId(this.resenna)
  }

}
