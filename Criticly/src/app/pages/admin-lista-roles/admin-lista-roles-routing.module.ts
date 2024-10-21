import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListaRolesPage } from './admin-lista-roles.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListaRolesPage
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./nuevo/nuevo.module').then(m => m.NuevoPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./rol/rol.module').then(m => m.RolPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListaRolesPageRoutingModule { }
