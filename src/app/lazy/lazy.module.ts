import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ])
  ],
  declarations: [
    LazyComponent
  ],
  providers: [],
  entryComponents: [LazyComponent]
})
export class LazyModule {}
