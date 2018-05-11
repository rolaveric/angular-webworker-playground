import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppPlatformWebWorkerModule } from '../lib/platform-webworker/worker/public_api';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    WorkerAppModule,
    AppPlatformWebWorkerModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppWebWorkerModule {
  ngDoBootstrap() {}
}
