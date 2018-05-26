import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ViewPlatformService } from '../../lib/common';

@Component({
  selector: 'ww-material-nav',
  template: `
    <nav class="mat-nav-list">
      <a
        *ngFor="let section of sections"
        class="list-item"
        (click)="scrollTo('material:' + section.id)"
      >{{section.label}}</a>
    </nav>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialNavComponent {
  sections = [
    {id: 'autocomplete', label: 'Autocomplete'},
    {id: 'checkbox', label: 'Checkbox'},
    {id: 'datepicker', label: 'Datepicker'},
    {id: 'formfield', label: 'Form field'},
    {id: 'input', label: 'Input'},
    {id: 'radiobutton', label: 'Radio button'},
    {id: 'select', label: 'Select'},
    {id: 'slider', label: 'Slider'},
    {id: 'slidetoggle', label: 'Slide toggle'},
    {id: 'menu', label: 'Menu'},
    {id: 'sidenav', label: 'Sidenav'},
    {id: 'toolbar', label: 'Toolbar'},
    {id: 'card', label: 'Card'},
    {id: 'divider', label: 'Divider'},
    {id: 'expansionpanel', label: 'Expansion Panel'},
    {id: 'gridlist', label: 'Grid list'},
    {id: 'list', label: 'List'},
    {id: 'stepper', label: 'Stepper'},
    {id: 'tabs', label: 'Tabs'},
    {id: 'tree', label: 'Tree'},
    {id: 'button', label: 'Button'},
    {id: 'buttontoggle', label: 'Button toggle'},
    {id: 'badge', label: 'Badge'},
    {id: 'chips', label: 'Chips'},
    {id: 'icon', label: 'Icon'},
    {id: 'progressspinner', label: 'Progress spinner'},
    {id: 'progressbar', label: 'Progress bar'},
    {id: 'bottomsheet', label: 'Bottom Sheet'},
    {id: 'dialog', label: 'Dialog'},
    {id: 'snackbar', label: 'Snackbar'},
    {id: 'tooltip', label: 'Tooltip'},
    {id: 'paginator', label: 'Paginator'},
    {id: 'sortheader', label: 'Sort header'},
    {id: 'table', label: 'Table'}
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
