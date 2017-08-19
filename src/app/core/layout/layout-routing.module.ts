import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../../routes/inicio/inicio/inicio.component';
import { MinionComponent } from "../../routes/inicio/minion/minion.component";

const routes: Routes = [
   {
    path: '',
    component: InicioComponent
  },
  {
    path:'cosas',
    loadChildren: '../../routes/cosas/cosas.module#CosasModule'
  }
  ,
  {
    path:'minion',
     component: MinionComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
