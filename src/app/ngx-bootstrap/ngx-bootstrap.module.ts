import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxBootstrapComponent } from './ngx-bootstrap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxBootstrapComponent
  ],
  providers: [],
  exports: [NgxBootstrapComponent]
})
export class NgxBootstrapModule {}
