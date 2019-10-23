import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {App1Component} from './app1/app1.component';
import {App1Child1Component} from './app1-child1/app1-child1.component';
import {EmptyComponent} from './empty/empty.component';


const routes: Routes = [
  {
    path: 'app1', component: App1Component,
    children: [
      { path: 'child1', component: App1Child1Component }
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
