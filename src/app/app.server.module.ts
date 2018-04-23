import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppPlatformServerModule } from '../lib/platform-server';
import { AppBrowserModule } from './app.browser.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppBrowserModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work
    AppPlatformServerModule.forRoot()
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
