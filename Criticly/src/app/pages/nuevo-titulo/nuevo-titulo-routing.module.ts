import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTituloPage } from './nuevo-titulo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoTituloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTituloPageRoutingModule {}
