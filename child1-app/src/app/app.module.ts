import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { EmptyComponent } from './empty/empty.component';
import { App1Child1Component } from './app1-child1/app1-child1.component';
import {createCustomElement} from '@angular/elements';
import {NgxsModule} from '@ngxs/store';
import {NgxsRouterPluginModule} from '@ngxs/router-plugin';
import {NgxsStoragePlugin, NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {App1State} from './app1.state';

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    EmptyComponent,
    App1Child1Component
  ],
  imports: [
    NgxsModule.forRoot([App1State]),
    NgxsStoragePluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  exports: [
    App1Component
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-1', myCustomElement);
  }

}
