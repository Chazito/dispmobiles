import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTituloPage } from './editar-titulo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTituloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTituloPageRoutingModule {}
