import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/rol';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { TipoTitulo } from 'src/app/services/tipo-titulo';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  tipo: TipoTitulo = { nombre: undefined }

  constructor(private sqlService: ServicebdService) { }

  ngOnInit() {
  }

  agregarTipo() {
    this.sqlService.insertarTipoTitulo(this.tipo.nombre!)
  }

}
