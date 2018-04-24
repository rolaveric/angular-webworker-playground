import { ModuleWithProviders, NgModule } from '@angular/core';

import { DomContainsService } from './dom-contains.service';

@NgModule({})
export class AppCommonModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [
        DomContainsService
      ]
    };
  }
}
