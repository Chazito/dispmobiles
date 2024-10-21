import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/rol';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  rol: Rol = { nombre: undefined }

  constructor(private sqlService: ServicebdService) { }

  ngOnInit() {
  }

  agregarRol() {
    this.sqlService.insertarRol(this.rol.nombre!)
  }

}
