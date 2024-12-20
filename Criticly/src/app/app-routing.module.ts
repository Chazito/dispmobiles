import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'perfil-inicio',
    loadChildren: () => import('./pages/perfil-inicio/perfil-inicio.module').then(m => m.PerfilInicioPageModule)
  },
  {
    path: 'perfil-preferencias',
    loadChildren: () => import('./pages/perfil-preferencias/perfil-preferencias.module').then(m => m.PerfilPreferenciasPageModule)
  },
  {
    path: 'perfil-preferencias/general',
    loadChildren: () => import('./pages/perfil-preferencias/general/general.module').then(m => m.GeneralPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then(m => m.PeliculasPageModule)
  },
  {
    path: 'titulo/nuevo',
    loadChildren: () => import('./pages/nuevo-titulo/nuevo-titulo.module').then(m => m.NuevoTituloPageModule)
  },
  {
    path: 'titulo/:id',
    loadChildren: () => import('./pages/peliculas/pelicula-detalle/pelicula-detalle.module').then(m => m.PeliculaDetallePageModule)
  },
  {
    path: 'titulo/:id/escribir-resenia',
    loadChildren: () => import('./pages/escribir-resenia/escribir-resenia.module').then(m => m.EscribirReseniaPageModule)
  },
  {
    path: 'titulo/:id/editar',
    loadChildren: () => import('./pages/editar-titulo/editar-titulo.module').then(m => m.EditarTituloPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then(m => m.BuscarPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'usuarios/:id',
    loadChildren: () => import('./pages/usuarios/usuario/usuario.module').then(m => m.UsuarioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/admin-lista-roles/admin-lista-roles.module').then(m => m.AdminListaRolesPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./pages/admin-lista-tipos/admin-lista-tipos.module').then(m => m.AdminListaTiposPageModule)
  },
  {
    path: 'resennas',
    loadChildren: () => import('./pages/admin-lista-resennas/admin-lista-resennas.module').then(m => m.AdminListaResennasPageModule)
  },
  {
    path: 'guardados',
    loadChildren: () => import('./pages/guardados/guardados.module').then(m => m.GuardadosPageModule)
  },
  {
    path: 'mis-resenias',
    loadChildren: () => import('./pages/mis-resenias/mis-resenias.module').then(m => m.MisReseniasPageModule)
  },
  {
    path: 'modificar-resenia/:id',
    loadChildren: () => import('./pages/modificar-resenia/modificar-resenia.module').then(m => m.ModificarReseniaPageModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
