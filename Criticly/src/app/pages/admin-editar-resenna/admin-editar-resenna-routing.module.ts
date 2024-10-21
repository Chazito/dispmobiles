import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEditarResennaPage } from './admin-editar-resenna.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEditarResennaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEditarResennaPageRoutingModule {}
