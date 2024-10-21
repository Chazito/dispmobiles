import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResennaPage } from './resenna.page';

const routes: Routes = [
  {
    path: '',
    component: ResennaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResennaPageRoutingModule {}
