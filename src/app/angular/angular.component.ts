import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ww-angular',
  templateUrl: './angular.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent {}
