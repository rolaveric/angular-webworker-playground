import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal.component';

@Component({
  selector: 'ww-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgBootstrapComponent implements OnInit {
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

  images: Array<string>;

  isCollapsed = false;

  dateModel;

  closeResult: string;

  page = 4;

  currentRate = 8;

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

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
