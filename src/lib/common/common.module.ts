import { ModuleWithProviders, NgModule } from '@angular/core';

import { ViewPlatformService } from './view-platform.service';

@NgModule({})
export class AppCommonModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [
        ViewPlatformService
      ]
    };
  }
}
