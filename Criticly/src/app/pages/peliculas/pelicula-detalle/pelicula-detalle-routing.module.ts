import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaDetallePage } from './pelicula-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculaDetallePageRoutingModule {}
