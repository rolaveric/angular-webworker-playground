import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ww-material',
  templateUrl: './material.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }

    .example-h2 {
      margin: 10px;
    }

    .example-section {
      display: flex;
      align-content: center;
      align-items: center;
      height: 60px;
    }

    .example-margin {
      margin: 0 10px;
    }
  `]
})
export class MaterialComponent {
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
}
