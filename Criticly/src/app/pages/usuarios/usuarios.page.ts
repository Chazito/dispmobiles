import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: Usuario[] = []
  superAdmin : boolean = false;
  admin : boolean = true;
  constructor(private bd: ServicebdService, private auth : AuthService) { }

  ngOnInit() {
    this.auth.usuarioObservable.subscribe(async usuario => {
      this.superAdmin = await this.auth.isSuperAdmin();
      this.admin = await this.auth.isAdmin();
    });
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

  canEditUser(idUsuario:string) : boolean{
    let other = this.usuarios.find(x => x.idUsuario == idUsuario);
    if(this.superAdmin && other?.id_rol == 1){ //Super admin no pueden cambiarse entre ellos
      return false;
    }
    else if(this.auth.usuarioSubject.value?.id_rol==3 && (other?.id_rol == 1 || other?.id_rol == 3)){ //Admins no pueden editar entre ellos o al super admin
      return false;
    }
    else{
      return true;
    }
  }

  canDeleteUser(){
    return this.auth.isSuperAdmin();
  }
}
