import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDatepickerModule,
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

import { NgBootstrapComponent } from './ng-bootstrap.component';
import { ModalComponent } from './modal.component';
import { NgBootstrapNavComponent } from './ng-bootstrap-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgbAccordionModule,
    NgbAlertModule,
    NgbButtonsModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDatepickerModule,
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
  ],
  declarations: [
    NgBootstrapComponent,
    NgBootstrapNavComponent,
    ModalComponent
  ],
  providers: [],
  exports: [
    NgBootstrapComponent,
    NgBootstrapNavComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class NgBootstrapModule {}
