import { ModuleWithProviders, NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { WORKER_APP_LOCATION_PROVIDERS } from '@angular/platform-webworker';

@NgModule({})
export class AppPlatformWebWorkerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppPlatformWebWorkerModule,
      providers: [
        {provide: TransferState, useClass: TransferState, deps: []},

        // Bandaid fix for PlatformLocation providers not included in Angular
        ...WORKER_APP_LOCATION_PROVIDERS
      ]
    };
  }
}
