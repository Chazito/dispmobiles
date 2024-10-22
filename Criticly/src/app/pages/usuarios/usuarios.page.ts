import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: Usuario[] = []
  constructor(private bd: ServicebdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      this.bd.selectUsuario();
      if (res) {
        //subscribirme al observable del select
        this.bd.fetchUsuario().subscribe(data => {
          this.usuarios = data;
        })
      }
    });
  }

  eliminar(idUsuario: string) {
    this.bd.eliminarUsuario(idUsuario);
  }
}
