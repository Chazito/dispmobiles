import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPreferenciasPage } from './perfil-preferencias.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPreferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPreferenciasPageRoutingModule {}
