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
  usuarios: Usuario[] = [];
  superAdmin: boolean = false;
  admin: boolean = false;

  constructor(private bd: ServicebdService, private auth: AuthService) { }

  ngOnInit() {
    // Obtenemos los roles del usuario actual
    this.auth.isAdminObservable.subscribe(isAdmin =>{
      this.admin = isAdmin;
    })
    this.auth.isSuperAdminObservable.subscribe(isSuper =>{
      this.superAdmin = isSuper;
    })

    // Escuchamos los cambios en la base de datos y actualizamos los usuarios
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.selectUsuario();
        this.bd.fetchUsuario().subscribe(data => {
          this.usuarios = data;
        });
      }
    });
  }

  // Eliminar un usuario
  eliminar(idUsuario: string) {
    if (!this.canDeleteUser()) {
      console.warn('No tienes permiso para eliminar usuarios.');
      return;
    }
    this.bd.eliminarUsuario(idUsuario);
  }

  // Verificar si se puede editar un usuario
  canEditUser(idUsuario: string): boolean {
    const otherUser = this.usuarios.find(x => x.idUsuario == idUsuario); // Usuario objetivo

    if (!otherUser) return false;

    if (this.superAdmin && otherUser.id_rol === 1) {
      // Superadmins no editan a otros superadmins
      return false;
    }
    else if (this.superAdmin && (otherUser.id_rol != "1")){
      //Super admin puede editar al resto
      return true;
    }
    else if (this.admin && (otherUser.id_rol === 1 || otherUser.id_rol === 3)) {
      // Admins no editan superadmins ni otros admins
      return false;
    }

    return true;
  }

  // Verificar si se puede eliminar usuarios
  canDeleteUser(): boolean {
    return this.superAdmin; // Solo superadmins pueden eliminar
  }

}
