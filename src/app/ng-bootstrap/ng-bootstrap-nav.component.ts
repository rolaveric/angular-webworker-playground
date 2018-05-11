import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ViewPlatformService } from '../../lib/common';

@Component({
  selector: 'ww-ng-bootstrap-nav',
  template: `
    <nav class="nav flex-column">
      <a
        *ngFor="let section of sections"
        class="nav-link"
        (click)="scrollTo('ng-bootstrap:' + section.id)"
      >{{section.label}}</a>
    </nav>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgBootstrapNavComponent {
  sections = [
    {id: 'accordion', label: 'Accordion'},
    {id: 'alert', label: 'Alert'},
    {id: 'buttons', label: 'Buttons'},
    {id: 'carousel', label: 'Carousel'},
    {id: 'collapse', label: 'Collapse'},
    {id: 'datepicker', label: 'Datepicker'},
    {id: 'dropdown', label: 'Dropdown'},
    {id: 'modal', label: 'Modal'},
    {id: 'pagination', label: 'Pagination'},
    {id: 'popover', label: 'Popover'},
    {id: 'progressbar', label: 'Progressbar'},
    {id: 'rating', label: 'Rating'},
    {id: 'tabset', label: 'Tabset'},
    {id: 'timepicker', label: 'Timepicker'},
    {id: 'tooltip', label: 'Tooltip'},
    {id: 'typeahead', label: 'Typeahead'}
  ];

  constructor(private viewPlatformService: ViewPlatformService) {}

  scrollTo(fragmentId: string) {
    this.viewPlatformService.getElementById(fragmentId)
      .subscribe((element: any | null) => {
        if (element) {
          this.viewPlatformService.scrollIntoView(element);
        }
      });
  }
}
