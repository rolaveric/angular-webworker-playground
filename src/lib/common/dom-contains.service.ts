import { Injectable } from '@angular/core';

@Injectable()
export class DomContainsService {
  public contains(ancestor: any, descendant: any): Promise<boolean> {
    throw new Error('DomContainsService.contains() has not been implemented for this platform');
  }
}
