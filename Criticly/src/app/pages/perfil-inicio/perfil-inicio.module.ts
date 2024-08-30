import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilInicioPageRoutingModule } from './perfil-inicio-routing.module';

import { PerfilInicioPage } from './perfil-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilInicioPageRoutingModule
  ],
  declarations: [PerfilInicioPage]
})
export class PerfilInicioPageModule {}
