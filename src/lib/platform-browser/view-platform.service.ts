import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ViewPlatformService } from '../common';

/**
 * Browser (window) implementation of the ViewPlatformService.
 *
 * Methods return `asap` scheduled observables which will execute synchronously.
 */
@Injectable()
export class BrowserViewPlatformService extends ViewPlatformService {
  public contains(ancestor: HTMLElement, descendant: HTMLElement): Observable<boolean> {
    return of(ancestor.contains(descendant));
  }
}
