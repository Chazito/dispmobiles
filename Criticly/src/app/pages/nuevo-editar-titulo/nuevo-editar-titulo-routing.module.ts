import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoEditarTituloPage } from './nuevo-editar-titulo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoEditarTituloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoEditarTituloPageRoutingModule {}
