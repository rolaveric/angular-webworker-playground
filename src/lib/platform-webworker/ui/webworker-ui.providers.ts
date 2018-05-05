import { ServiceMessageBrokerFactory, WORKER_UI_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { StaticProvider } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { Positioning } from '../../ng-bootstrap/util/positioning';
import { ViewPlatformService } from '../../common';
import { BrowserViewPlatformService } from '../../platform-browser';
import { UiViewPlatformService, platformInitViewPlatformServiceProvider } from './view-platform.service';
import { platformInitPositioningProvider, UiPositioning } from './positioning';

export const APP_WEB_WORKER_UI_PROVIDERS: StaticProvider[] = [
  ...WORKER_UI_LOCATION_PROVIDERS,

  {provide: TransferState, useClass: TransferState, deps: []},

  // Browser platform services
  {provide: ViewPlatformService, useClass: BrowserViewPlatformService, deps: []},
  {provide: Positioning, useClass: Positioning, deps: []},

  // Message broker services
  {provide: UiViewPlatformService, deps: [ServiceMessageBrokerFactory, ViewPlatformService]},
  {provide: UiPositioning, deps: [ServiceMessageBrokerFactory, Positioning]},

  // PLATFORM_INITIALIZER providers
  platformInitViewPlatformServiceProvider,
  platformInitPositioningProvider
];
