import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class AppPlatformServerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppPlatformServerModule,
      providers: []
    };
  }
}
