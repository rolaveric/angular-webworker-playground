import { ModuleWithProviders, NgModule } from '@angular/core';

import { DomContainsService } from '../common';
import { BrowserDomContainsService } from './dom-contains.service';

@NgModule({})
export class AppPlatformBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppPlatformBrowserModule,
      providers: [
        {provide: DomContainsService, useClass: BrowserDomContainsService}
      ]
    };
  }
}
