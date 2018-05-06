import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal.component';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'ww-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgBootstrapComponent {
  checkboxModel = {
    left: true,
    middle: false,
    right: false
  };
  checkboxGroupForm = this.fb.group({
    left: true,
    middle: false,
    right: false
  });
  radioModel = 1;
  radioGroupForm = this.fb.group({
    'model': 1
  });

  images$ = this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)));

  isCollapsed = false;

  dateModel: any;

  closeResult: string;

  page = 4;

  currentRate = 8;

  time = {hour: 13, minute: 30};

  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  typeaheadModel: any;

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  };

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private modalService: NgbModal
  ) {}

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/1100/500?image=${randomId}`;
    });
  }

  dropdownItemClick(id: number) {
    console.log(`Dropdown item ${id} clicked`);
  }

  openTemplateModal(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  openComponentModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
