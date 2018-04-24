import { Injectable } from '@angular/core';

import { DomContainsService } from '../common';

@Injectable()
export class BrowserDomContainsService extends DomContainsService {
  public contains(ancestor: HTMLElement, descendant: HTMLElement): Promise<boolean> {
    return Promise.resolve(ancestor.contains(descendant));
  }
}
