import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoEditarTituloPageRoutingModule } from './nuevo-editar-titulo-routing.module';

import { NuevoEditarTituloPage } from './nuevo-editar-titulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoEditarTituloPageRoutingModule
  ],
  declarations: [NuevoEditarTituloPage]
})
export class NuevoEditarTituloPageModule {}
