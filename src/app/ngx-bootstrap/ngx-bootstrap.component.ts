import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  constructor(private _http: HttpClient) {}

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/1100/500?image=${randomId}`;
    });
  }
}
