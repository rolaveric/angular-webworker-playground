import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DomContainsService } from '../common';

@Injectable()
export class BrowserDomContainsService extends DomContainsService {
  public contains(ancestor: HTMLElement, descendant: HTMLElement): Observable<boolean> {
    return of(ancestor.contains(descendant));
  }
}
