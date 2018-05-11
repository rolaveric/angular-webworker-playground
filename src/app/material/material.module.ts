import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponent } from './material.component';
import { MaterialNavComponent } from './material-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaterialComponent,
    MaterialNavComponent
  ],
  providers: [],
  exports: [
    MaterialComponent,
    MaterialNavComponent
  ]
})
export class MaterialModule {}
