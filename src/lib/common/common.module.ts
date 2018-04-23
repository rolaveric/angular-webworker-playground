import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class AppCommonModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: []
    };
  }
}
