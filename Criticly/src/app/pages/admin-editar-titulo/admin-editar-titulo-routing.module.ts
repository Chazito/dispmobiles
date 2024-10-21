import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEditarTituloPage } from './admin-editar-titulo.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEditarTituloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEditarTituloPageRoutingModule {}
