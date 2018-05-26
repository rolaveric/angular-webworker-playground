import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

    .example-container {
      display: flex;
      flex-direction: column;
    }

    .example-container > * {
      width: 100%;
    }

    .example-radio-group {
      display: inline-flex;
      flex-direction: column;
    }

    .example-radio-button {
      margin: 5px;
    }

    .example-selected-value {
      margin: 15px 0;
    }

    .mat-slider-horizontal {
      width: 300px;
    }

    .mat-slider-vertical {
      height: 300px;
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
      margin: 10px;
    }

    .example-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eee;
    }

    .example-icon {
      padding: 0 14px;
    }

    .example-spacer {
      flex: 1 1 auto;
    }

    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }

    .mat-list-icon {
      color: rgba(0, 0, 0, 0.54);
    }

    .demo-tab-group {
      border: 1px solid #e8e8e8;
    }

    .demo-tab-content {
      padding: 16px;
    }
  `]
})
export class MaterialComponent implements OnInit {
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  indeterminate = false;
  labelPosition = 'after';

  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];


  autoTicks = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  color = 'accent';
  checked = false;
  disabled = false;

  panelOpenState = false;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
