import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Rol } from 'src/app/services/rol';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { roles } from 'src/assets/datos';

@Component({
  selector: 'app-admin-lista-roles',
  templateUrl: './admin-lista-roles.page.html',
  styleUrls: ['./admin-lista-roles.page.scss'],
})
export class AdminListaRolesPage implements OnInit {

  roles: Rol[] = []

  constructor(private bd: ServicebdService, private router: Router) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      this.bd.selectRol();
      if (res) {
        //subscribirme al observable del select
        this.bd.fetchRol().subscribe(data => {
          this.roles = data;
        })
      }
    });
  }

  eliminar(x: any) {
    this.bd.eliminarRol(x.idRol);
  }
}
