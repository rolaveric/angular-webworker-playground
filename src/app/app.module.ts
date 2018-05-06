import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDatepickerModule,
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
  ButtonsModule, CarouselModule, CollapseModule, DatepickerModule
} from 'ngx-bootstrap';

import { AppCommonModule } from '../lib/common';
import { NgbDropdownModule } from '../lib/ng-bootstrap/dropdown/dropdown.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,

    HttpClientModule,

    NgbAccordionModule.forRoot(),
    NgbAlertModule.forRoot(),
    NgbButtonsModule.forRoot(),
    NgbCarouselModule.forRoot(),
    NgbCollapseModule.forRoot(),
    // NgbDatepickerModule.forRoot(), // Throws a 'Document is not defined' error
    NgbModalModule.forRoot(),
    NgbPaginationModule.forRoot(),
    NgbPopoverModule.forRoot(),
    NgbProgressbarModule.forRoot(),
    NgbRatingModule.forRoot(),
    NgbTabsetModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    NgbTooltipModule.forRoot(),
    NgbTypeaheadModule.forRoot(),

    AccordionModule.forRoot(),
    AlertModule.forRoot(),

    NgbDropdownModule.forRoot(), // Custom version
    AppCommonModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
