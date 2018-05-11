import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ViewPlatformService } from '../../lib/common';

@Component({
  selector: 'ww-angular-nav',
  template: `
    <nav class="nav flex-column">
      <a
        *ngFor="let section of sections"
        class="nav-link"
        (click)="scrollTo('angular-' + section.id)"
      >{{section.label}}</a>
    </nav>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularNavComponent {
  sections = [];

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
