import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AlertModule,
  BsDropdownModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  DatepickerModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule, TooltipModule, TypeaheadModule
} from 'ngx-bootstrap';

import { NgxBootstrapComponent } from './ngx-bootstrap.component';
import { NgxBootstrapNavComponent } from './ngx-bootstrap-nav.component';
import { ModalContentComponent } from './modal-content.component';

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
    DatepickerModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule
  ],
  declarations: [
    NgxBootstrapComponent,
    NgxBootstrapNavComponent,
    ModalContentComponent
  ],
  providers: [],
  exports: [
    NgxBootstrapComponent,
    NgxBootstrapNavComponent
  ],
  entryComponents: [
    ModalContentComponent
  ]
})
export class NgxBootstrapModule {}
