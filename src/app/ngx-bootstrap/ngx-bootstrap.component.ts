import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ModalContentComponent } from './modal-content.component';

@Component({
  selector: 'ww-ngx-bootstrap',
  templateUrl: './ngx-bootstrap.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBootstrapComponent {
  checkModel: any = { left: false, middle: true, right: false };

  images$ = this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)));

  isCollapsed = false;

  templateModalRef: BsModalRef;
  bsModalRef: BsModalRef;

  currentPage = 3;

  max = 10;
  rate = 7;
  isReadonly = false;

  overStar: number;
  percent: number;

  itemStringsLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];

  itemStringsRight = ['Mr. O', 'Tomato'];

  mytime: Date = new Date();

  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  constructor(
    private modalService: BsModalService,
    private _http: HttpClient
  ) {}

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/1100/500?image=${randomId}`;
    });
  }

  openTemplateModal(template: TemplateRef<any>) {
    this.templateModalRef = this.modalService.show(template);
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }
}
