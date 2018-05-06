import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponent } from './material.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaterialComponent
  ],
  providers: [],
  exports: [MaterialComponent]
})
export class MaterialModule {}
