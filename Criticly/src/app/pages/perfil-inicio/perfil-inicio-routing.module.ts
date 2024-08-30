import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilInicioPage } from './perfil-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilInicioPageRoutingModule {}
