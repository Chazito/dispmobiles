import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEditarRolPage } from './admin-editar-rol.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEditarRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEditarRolPageRoutingModule {}
