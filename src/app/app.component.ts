import { Component } from '@angular/core';

@Component({
  selector: 'ww-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  routes = [
    {url: 'angular', label: 'Angular'},
    {url: 'lazy', label: 'Lazy loading (broken)', disabled: true},
    {url: 'material', label: 'Angular material'},
    {url: 'ng-bootstrap', label: 'ng-bootstrap'},
    {url: 'ngx-bootstrap', label: 'ngx-bootstrap'}
  ];
}
