import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-material',
  template: `
    <h2>Material Features</h2>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialComponent {}
