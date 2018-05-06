import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-ngx-bootstrap',
  template: `
    <h2>ngx-bootstrap Features</h2>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBootstrapComponent {}
