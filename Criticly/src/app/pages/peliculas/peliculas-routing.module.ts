import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaDetallePage } from './pelicula-detalle/pelicula-detalle.page';
import { PeliculasPage } from './peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculasPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasPageRoutingModule { }
