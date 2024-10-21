import { Component, OnInit } from '@angular/core';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { resenias } from 'src/assets/datos';

@Component({
  selector: 'app-admin-lista-resennas',
  templateUrl: './admin-lista-resennas.page.html',
  styleUrls: ['./admin-lista-resennas.page.scss'],
})
export class AdminListaResennasPage implements OnInit {

  resennas: Resenna[] = [...resenias]

  constructor(private bd: ServicebdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      this.bd.selectResenna();
      if (res) {
        //subscribirme al observable del select
        this.bd.fetchResenna().subscribe(data => {
          this.resennas = data;
        })
      }
    });
  }

  eliminar(idResenna: string) {
    this.bd.eliminarResenna(idResenna);
  }
}
