import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { EmptyComponent } from './empty/empty.component';
import {createCustomElement} from '@angular/elements';
import { App2Child1Component } from './app2-child1/app2-child1.component';
import {NgxsRouterPluginModule} from '@ngxs/router-plugin';
import {NgxsModule} from '@ngxs/store';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {App2State} from './app2.state';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    EmptyComponent,
    App2Child1Component
  ],
  imports: [
    NgxsModule.forRoot([App2State]),
    NgxsStoragePluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-2', myCustomElement);
  }
}
