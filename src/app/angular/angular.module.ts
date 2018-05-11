import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularComponent } from './angular.component';
import { AngularNavComponent } from './angular-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AngularComponent,
    AngularNavComponent
  ],
  providers: [],
  exports: [
    AngularComponent,
    AngularNavComponent
  ]
})
export class AngularModule {}
