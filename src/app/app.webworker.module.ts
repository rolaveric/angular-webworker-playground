import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';

import { AppPlatformWebWorkerModule } from '../lib/platform-webworker';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    WorkerAppModule,
    AppPlatformWebWorkerModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppWebWorkerModule {
  ngDoBootstrap() {}
}
