import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ViewPlatformService } from '../../lib/common';

@Component({
  selector: 'ww-ngx-bootstrap-nav',
  template: `
    <nav class="nav flex-column">
      <a
        *ngFor="let section of sections"
        class="nav-link"
        (click)="scrollTo('ngx-bootstrap-' + section.id)"
      >{{section.label}}</a>
    </nav>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBootstrapNavComponent {
  sections = [
    {id: 'accordion', label: 'Accordion'},
    {id: 'alert', label: 'Alert'},
    {id: 'checkbox', label: 'Checkbox'},
    {id: 'carousel', label: 'Carousel'},
    {id: 'collapse', label: 'Collapse'},
    {id: 'datepicker', label: 'Datepicker'},
    {id: 'dropdown', label: 'Dropdown'},
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
