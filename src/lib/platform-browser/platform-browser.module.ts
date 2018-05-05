import { ModuleWithProviders, NgModule } from '@angular/core';

import { ViewPlatformService } from '../common';
import { BrowserViewPlatformService } from './view-platform.service';

@NgModule({})
export class AppPlatformBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppPlatformBrowserModule,
      providers: [
        {provide: ViewPlatformService, useClass: BrowserViewPlatformService}
      ]
    };
  }
}
