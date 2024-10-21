import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario: Usuario = {}
  constructor(private route:ActivatedRoute, private sqlService: ServicebdService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectUsuarioPorId(id).then((usuario: Usuario | null) => {
          if (usuario) this.usuario = usuario;
        });
      }
    });
    if (!this.usuario.idUsuario ) this.usuario = {
      idUsuario: "1",
      nombre: "Juan",
      apellido: "Pérez",
      correo: "juan.perez@example.com",
      clave: "contraseñaSegura",
      fechaNacimiento: new Date("1990-05-15"),
      avatar: "https://example.com/avatar.jpg",
      telefono: "+1234567890",
      reputacion: 4.5,
      id_rol: 0
    }
  }
  
}
