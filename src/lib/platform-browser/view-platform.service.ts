import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, of } from 'rxjs';

import { ViewPlatformService } from '../common';

/**
 * Browser (window) implementation of the ViewPlatformService.
 *
 * Methods return `asap` scheduled observables which will execute synchronously.
 */
@Injectable()
export class BrowserViewPlatformService extends ViewPlatformService {
  constructor(@Inject(DOCUMENT) private document: any) {
    super();
  }

  public contains(ancestor: HTMLElement, descendant: HTMLElement): Observable<boolean> {
    return of(ancestor.contains(descendant));
  }

  public scrollIntoView(element: HTMLElement): void {
    element.scrollIntoView(true);
  }

  public getElementById(id: string): Observable<HTMLElement | null> {
    return of((this.document as Document).getElementById(id));
  }
}
