import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-lazy',
  template: `<h2>Lazy Route Loading Feature</h2>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent {}
