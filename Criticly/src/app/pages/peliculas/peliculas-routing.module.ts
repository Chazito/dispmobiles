import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaDetallePage } from './pelicula-detalle/pelicula-detalle.page';
import { PeliculasPage } from './peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculasPage
  },
  {
    path: ':id',
    component: PeliculaDetallePage
  },  {
    path: 'pelicula-detalle',
    loadChildren: () => import('./pelicula-detalle/pelicula-detalle.module').then( m => m.PeliculaDetallePageModule)
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasPageRoutingModule { }
