import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-angular',
  template: `
    <h2>Angular Features</h2>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent {}
