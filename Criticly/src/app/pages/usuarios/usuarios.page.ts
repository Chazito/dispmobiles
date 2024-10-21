import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
usuario: Usuario = {}
  constructor() { }

  ngOnInit() {
  }

}
