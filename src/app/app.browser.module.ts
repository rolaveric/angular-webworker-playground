import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppPlatformBrowserModule } from '../lib/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppModule,
    BrowserAnimationsModule,

    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),

    // Enable state transfer from server app down to the browser app
    BrowserTransferStateModule,

    AppPlatformBrowserModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
  ngDoBootstrap() {}
}
