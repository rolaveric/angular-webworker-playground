import { ServiceMessageBrokerFactory, WORKER_UI_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { StaticProvider } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TransferState } from '@angular/platform-browser';

import { ViewPlatformService } from '../../common';
import { BrowserViewPlatformService } from '../../platform-browser';
import { UiViewPlatformService, platformInitViewPlatformServiceProvider } from './view-platform.service';

export const APP_WEB_WORKER_UI_PROVIDERS: StaticProvider[] = [
  ...WORKER_UI_LOCATION_PROVIDERS,

  {provide: TransferState, useClass: TransferState, deps: []},

  // Browser platform services
  {provide: ViewPlatformService, useClass: BrowserViewPlatformService, deps: [DOCUMENT]},

  // Message broker services
  {provide: UiViewPlatformService, deps: [ServiceMessageBrokerFactory, ViewPlatformService]},

  // PLATFORM_INITIALIZER providers
  platformInitViewPlatformServiceProvider
];
