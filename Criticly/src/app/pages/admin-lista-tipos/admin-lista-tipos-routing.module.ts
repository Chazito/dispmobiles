import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaTiposPage } from './admin-lista-tipos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaTiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaTiposPageRoutingModule {}
