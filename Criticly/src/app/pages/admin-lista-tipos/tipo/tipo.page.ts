import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { TipoTitulo } from 'src/app/services/tipo-titulo';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss'],
})
export class TipoPage implements OnInit {

  tipo: TipoTitulo = { idTipo: undefined, nombre: undefined }

  constructor(private sqlService: ServicebdService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectTipoPorId(id).then((tipo: TipoTitulo | null) => {
          if (tipo) this.tipo = tipo;
        });
      }
    });
  }

  modificarTipo() {
    this.sqlService.modificarRol(this.tipo)
  }

}
