import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaUsuariosPage } from './admin-lista-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaUsuariosPageRoutingModule {}
