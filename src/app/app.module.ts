import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule,
  // NgbDatepickerModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbRatingModule,
  NgbTabsetModule,
  NgbTimepickerModule,
  NgbTooltipModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
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
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
} from 'ngx-bootstrap';

import { AppCommonModule } from '../lib/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,

    HttpClientModule,

    // ng-bootstrap
    NgbAccordionModule.forRoot(),
    NgbAlertModule.forRoot(),
    NgbButtonsModule.forRoot(),
    NgbCarouselModule.forRoot(),
    NgbCollapseModule.forRoot(),
    // NgbDatepickerModule.forRoot(), // Throws a 'Document is not defined' error
    NgbDropdownModule.forRoot(),
    NgbModalModule.forRoot(),
    NgbPaginationModule.forRoot(),
    NgbPopoverModule.forRoot(),
    NgbProgressbarModule.forRoot(),
    NgbRatingModule.forRoot(),
    NgbTabsetModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    NgbTooltipModule.forRoot(),
    NgbTypeaheadModule.forRoot(),

    // ngx-bootstrap
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),

    AppCommonModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
