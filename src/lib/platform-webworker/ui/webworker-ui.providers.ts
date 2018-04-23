import { WORKER_UI_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { StaticProvider } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

export const APP_WEB_WORKER_UI_PROVIDERS: StaticProvider[] = [
  ...WORKER_UI_LOCATION_PROVIDERS,

  {provide: TransferState, useClass: TransferState, deps: []}
];
