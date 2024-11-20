import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisReseniasPage } from './mis-resenias.page';

const routes: Routes = [
  {
    path: '',
    component: MisReseniasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisReseniasPageRoutingModule {}
