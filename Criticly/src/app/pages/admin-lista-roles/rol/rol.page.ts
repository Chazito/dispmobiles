import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/services/rol';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { roles } from 'src/assets/datos';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {

  rol: Rol = { idRol: undefined, nombre: undefined }

  constructor(private sqlService: ServicebdService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectRolPorId(id).then((rol: Rol | null) => {
          if (rol) this.rol = rol;
        });
      }
    });
  }

  modificarRol() {
    this.sqlService.modificarRol(this.rol)
  }

}
