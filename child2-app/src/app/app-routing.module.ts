import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {App2Component} from './app2/app2.component';
import {EmptyComponent} from './empty/empty.component';
import {App2Child1Component} from './app2-child1/app2-child1.component';


const routes: Routes = [
  {
    path: 'app2', component: App2Component,
    children: [
      { path: 'child1', component: App2Child1Component }
    ]
  },
  {
    path: '**', component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
