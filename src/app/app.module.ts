import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule
  // NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppCommonModule } from '../lib/common';
import { NgbDropdownModule } from '../lib/ng-bootstrap/dropdown/dropdown.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbAccordionModule.forRoot(),
    NgbAlertModule.forRoot(),
    NgbButtonsModule.forRoot(),
    NgbCarouselModule.forRoot(),
    NgbCollapseModule.forRoot(),
    // NgbDatepickerModule.forRoot(),
    NgbDropdownModule.forRoot(),
    AppCommonModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
