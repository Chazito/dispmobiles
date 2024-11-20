import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarReseniaPage } from './modificar-resenia.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarReseniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarReseniaPageRoutingModule {}
