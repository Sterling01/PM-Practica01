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
    path: 'hello',
    loadChildren: () => import('./hello/hello.module').then( m => m.HelloPageModule)
  },
  {
    path: 'hello/:id',
    loadChildren: () => import('./hello/hello.module').then( m => m.HelloPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'estudio',
    loadChildren: () => import('./estudio/estudio.module').then( m => m.EstudioPageModule)
  },
  {
    path: 'presentacion',
    loadChildren: () => import('./presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'lista-empleos',
    loadChildren: () => import('./lista-empleos/lista-empleos.module').then( m => m.ListaEmpleosPageModule)
  },
  {
    path: 'empleo',
    loadChildren: () => import('./empleo/empleo.module').then( m => m.EmpleoPageModule)
  },
  {
    path: 'empleo/:id',
    loadChildren: () => import('./empleo/empleo.module').then( m => m.EmpleoPageModule)
  },
  {
    path: 'crear-empleo',
    loadChildren: () => import('./crear-empleo/crear-empleo.module').then( m => m.CrearEmpleoPageModule)
  },
  {
    path: 'actualizar-empleo',
    loadChildren: () => import('./actualizar-empleo/actualizar-empleo.module').then( m => m.ActualizarEmpleoPageModule)
  },
  {
    path: 'actualizar-empleo/:id',
    loadChildren: () => import('./actualizar-empleo/actualizar-empleo.module').then( m => m.ActualizarEmpleoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
