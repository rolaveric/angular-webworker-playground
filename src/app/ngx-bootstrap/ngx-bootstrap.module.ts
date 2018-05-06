import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  DatepickerModule
} from 'ngx-bootstrap';

import { NgxBootstrapComponent } from './ngx-bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DatepickerModule
  ],
  declarations: [
    NgxBootstrapComponent
  ],
  providers: [],
  exports: [NgxBootstrapComponent]
})
export class NgxBootstrapModule {}
