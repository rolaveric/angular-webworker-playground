import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Service for handling queries to the view implementation for the given platform (eg. browser, web worker, server, etc.)
 * Returns observables to handle async view interfaces.
 */
@Injectable()
export class ViewPlatformService {
  /**
   * Tests if one element (the ancestor) contains another (the descendant).
   */
  public contains(ancestor: any, descendant: any): Observable<boolean> {
    throw new Error('ViewPlatformService.contains() has not been implemented for this platform');
  }

  public scrollIntoView(element: any): void {
    throw new Error('ViewPlatformService.scrollIntoView() has not been implemented for this platform');
  }

  public getElementById(id: string): Observable<any | null> {
    throw new Error('ViewPlatformService.getElementById() has not been implemented for this platform');
  }
}
