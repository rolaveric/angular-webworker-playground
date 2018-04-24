import { Injectable } from '@angular/core';
import {
  ClientMessageBroker, ClientMessageBrokerFactory, FnArg, UiArguments
} from '@angular/platform-webworker';

import { DomContainsService } from '../../common';
import { DOM_CONTAINS_CHANNEL, PRIMITIVE, RENDER_STORE_OBJECT } from '../shared/tokens';

@Injectable()
export class WorkerDomContainsService extends DomContainsService {
  private messageBroker: ClientMessageBroker;

  constructor(private messageBrokerFactory: ClientMessageBrokerFactory) {
    super();

    this.messageBroker = this.messageBrokerFactory.createMessageBroker(DOM_CONTAINS_CHANNEL);
  }

  contains(ancestor: any, descendant: any): Promise<boolean> {
    const fnArgs = [
      new FnArg(ancestor, RENDER_STORE_OBJECT),
      new FnArg(descendant, RENDER_STORE_OBJECT)
    ];
    const uiArgs = new UiArguments('contains', fnArgs);
    return this.messageBroker.runOnService(uiArgs, PRIMITIVE) as Promise<boolean>;
  }
}
