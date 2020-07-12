import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloPage } from './hello.page';

const routes: Routes = [
  {
    path: '',
    component: HelloPage
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloPageRoutingModule {}
