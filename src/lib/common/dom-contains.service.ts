import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DomContainsService {
  public contains(ancestor: any, descendant: any): Observable<boolean> {
    throw new Error('DomContainsService.contains() has not been implemented for this platform');
  }
}
