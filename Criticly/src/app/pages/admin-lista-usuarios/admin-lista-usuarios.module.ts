import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListaUsuariosPageRoutingModule } from './admin-lista-usuarios-routing.module';

import { AdminListaUsuariosPage } from './admin-lista-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListaUsuariosPageRoutingModule
  ],
  declarations: [AdminListaUsuariosPage]
})
export class AdminListaUsuariosPageModule {}
