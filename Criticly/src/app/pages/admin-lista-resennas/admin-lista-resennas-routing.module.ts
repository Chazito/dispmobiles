import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaResennasPage } from './admin-lista-resennas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaResennasPage
  },
  {
    path: ':id',
    loadChildren: () => import('./resenna/resenna.module').then(m => m.ResennaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaResennasPageRoutingModule { }
