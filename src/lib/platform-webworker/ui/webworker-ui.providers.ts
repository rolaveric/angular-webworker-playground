import { ServiceMessageBrokerFactory, WORKER_UI_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { StaticProvider } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { Positioning } from '../../ng-bootstrap/util/positioning';
import { DomContainsService } from '../../common';
import { BrowserDomContainsService } from '../../platform-browser';
import { UiDomContainsService, platformInitDomContainsProvider } from './dom-contains.service';
import { platformInitPositioningProvider, UiPositioning } from './positioning';

export const APP_WEB_WORKER_UI_PROVIDERS: StaticProvider[] = [
  ...WORKER_UI_LOCATION_PROVIDERS,

  {provide: TransferState, useClass: TransferState, deps: []},

  // Browser platform services
  {provide: DomContainsService, useClass: BrowserDomContainsService, deps: []},
  {provide: Positioning, useClass: Positioning, deps: []},

  // Message broker services
  {provide: UiDomContainsService, deps: [ServiceMessageBrokerFactory, DomContainsService]},
  {provide: UiPositioning, deps: [ServiceMessageBrokerFactory, Positioning]},

  // PLATFORM_INITIALIZER providers
  platformInitDomContainsProvider,
  platformInitPositioningProvider
];
