import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatBottomSheet, MatDialog, MatSnackBar, MatTableDataSource, PageEvent, Sort, TooltipPosition } from '@angular/material';

import { DynamicDatabase, DynamicDataSource, DynamicFlatNode } from './tree';
import { BottomSheetComponent } from './bottom-sheet.component';
import { DialogComponent } from './dialog';
import { SnackbarComponent } from './snackbar';

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

    .example-tree-progress-bar {
      margin-left: 30px;
    }

    .example-button-row {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .example-selected-value {
      margin: 15px 0;
    }

    mat-chip {
      max-width: 200px;
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

    .example-user-input {
      margin-right: 8px;
    }

    .mat-sort-header-container {
      align-items: center;
    }

    table {
      width: 100%;
    }

    .mat-form-field {
      font-size: 14px;
      width: 100%;
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

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  mode = 'determinate';

  bufferValue = 75;

  animal: string;
  name: string;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  tableDataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private _formBuilder: FormBuilder,
    // private bottomSheet: MatBottomSheet,
    // public dialog: MatDialog,
    // public snackBar: MatSnackBar,
    database: DynamicDatabase
  ) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();

    this.sortedData = this.desserts.slice();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  openBottomSheet(): void {
    // this.bottomSheet.open(BottomSheetComponent);
  }

  openDialog(): void {
    // const dialogRef = this.dialog.open(DialogComponent, {
    //   width: '250px',
    //   data: { name: this.name, animal: this.animal }
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  openSnackBar() {
    // this.snackBar.openFromComponent(SnackbarComponent, {
    //   duration: 500,
    // });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.tableDataSource.filter = filterValue;
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
