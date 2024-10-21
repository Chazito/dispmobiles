import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaTitulosPage } from './admin-lista-titulos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaTitulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaTitulosPageRoutingModule {}
