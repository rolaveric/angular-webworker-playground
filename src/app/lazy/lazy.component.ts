import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-lazy',
  template: `
    <h2>Lazy Route Loading Feature</h2>
    <p>TODO</p>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent {}
