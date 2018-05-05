import {Component, OnInit} from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient
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
}
