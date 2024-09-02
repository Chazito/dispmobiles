import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaDetallePageRoutingModule } from './pelicula-detalle-routing.module';

import { PeliculaDetallePage } from './pelicula-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaDetallePageRoutingModule
  ],
  declarations: [PeliculaDetallePage]
})
export class PeliculaDetallePageModule {}
