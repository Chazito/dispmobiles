import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/services/rol';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario: Usuario = {};
  roles : Rol[] = [];
  constructor(private route: ActivatedRoute, private sqlService: ServicebdService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectUsuarioPorId(id).then((usuario: Usuario | null) => {
          if (usuario) this.usuario = usuario;
        });
      }
    });
    this.sqlService.dbState().subscribe(res => {
      this.sqlService.selectRol();
      if (res) {
        //subscribirme al observable del select
        this.sqlService.fetchRol().subscribe(data => {
          this.roles = data;
          this.roles = this.roles.filter(r => r.idRol !== 1); //El rol de super admin solo se da desde la creacion de la bd
        })
      }
    });
  }

  modificarUsuario() {
    this.sqlService.modificarUsuario(this.usuario)
  }
}
