import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaResennasPage } from './admin-lista-resennas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaResennasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaResennasPageRoutingModule {}
