import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribirReseniaPage } from './escribir-resenia.page';

const routes: Routes = [
  {
    path: '',
    component: EscribirReseniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribirReseniaPageRoutingModule {}
