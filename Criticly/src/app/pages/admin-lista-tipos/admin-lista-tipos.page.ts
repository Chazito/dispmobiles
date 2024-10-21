import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { TipoTitulo } from 'src/app/services/tipo-titulo';
import { tiposTitulo } from 'src/assets/datos';

@Component({
  selector: 'app-admin-lista-tipos',
  templateUrl: './admin-lista-tipos.page.html',
  styleUrls: ['./admin-lista-tipos.page.scss'],
})
export class AdminListaTiposPage implements OnInit {

  tipos: TipoTitulo[] = []

  constructor(private bd: ServicebdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      this.bd.selectTipoTitulo();
      if (res) {
        //subscribirme al observable del select
        this.bd.fetchRol().subscribe(data => {
          this.tipos = data;
        })
      }
    });
  }

  eliminar(idTipo: string) {
    this.bd.eliminarTipo(idTipo);
  }
}
