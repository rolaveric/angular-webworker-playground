import { ModuleWithProviders, NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { WORKER_APP_LOCATION_PROVIDERS } from '@angular/platform-webworker';

import { DomContainsService } from '../../common';
import { Positioning } from '../../ng-bootstrap/util/positioning';
import { WorkerDomContainsService } from './dom-contains.service';
import { WorkerPositioning } from './positioning';

@NgModule({})
export class AppPlatformWebWorkerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppPlatformWebWorkerModule,
      providers: [
        {provide: TransferState, useClass: TransferState, deps: []},

        {provide: DomContainsService, useClass: WorkerDomContainsService},
        {provide: Positioning, useClass: WorkerPositioning},

        // Bandaid fix for PlatformLocation providers not included in Angular
        ...WORKER_APP_LOCATION_PROVIDERS
      ]
    };
  }
}
