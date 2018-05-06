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
  NgbModalModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbRatingModule,
  NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';

import { NgbDropdownModule } from '../../lib/ng-bootstrap/dropdown/dropdown.module';
import { NgBootstrapComponent } from './ng-bootstrap.component';
import { ModalComponent } from './modal.component';

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
    NgbModalModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbTabsetModule,

    NgbDropdownModule // Custom version
  ],
  declarations: [
    NgBootstrapComponent,
    ModalComponent
  ],
  providers: [],
  exports: [NgBootstrapComponent],
  entryComponents: [
    ModalComponent
  ]
})
export class NgBootstrapModule {}
