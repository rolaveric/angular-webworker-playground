import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class AppPlatformBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppPlatformBrowserModule,
      providers: []
    };
  }
}
