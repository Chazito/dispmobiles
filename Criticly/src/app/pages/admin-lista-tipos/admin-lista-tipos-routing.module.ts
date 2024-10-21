import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaTiposPage } from './admin-lista-tipos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaTiposPage
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./nuevo/nuevo.module').then(m => m.NuevoPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./tipo/tipo.module').then(m => m.TipoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaTiposPageRoutingModule { }
