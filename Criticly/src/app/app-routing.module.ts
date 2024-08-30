import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil-inicio',
    loadChildren: () => import('./pages/perfil-inicio/perfil-inicio.module').then( m => m.PerfilInicioPageModule)
  },
  {
    path: 'perfil-preferencias',
    loadChildren: () => import('./pages/perfil-preferencias/perfil-preferencias.module').then( m => m.PerfilPreferenciasPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'entry',
    loadChildren: () => import('./pages/entry/entry.module').then( m => m.EntryPageModule)
  },
  {
    path: 'news-dashboard',
    loadChildren: () => import('./pages/news-dashboard/news-dashboard.module').then( m => m.NewsDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
