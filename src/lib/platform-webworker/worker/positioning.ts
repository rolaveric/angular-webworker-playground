import { Injectable } from '@angular/core';
import {
  ClientMessageBroker, ClientMessageBrokerFactory, FnArg, UiArguments
} from '@angular/platform-webworker';

import { Placement, PlacementArray } from '../../ng-bootstrap/util/positioning';
import { POSITIONING_CHANNEL, PRIMITIVE, RENDER_STORE_OBJECT } from '../shared/tokens';

@Injectable()
export class WorkerPositioning {
  private messageBroker: ClientMessageBroker;

  constructor(private messageBrokerFactory: ClientMessageBrokerFactory) {
    this.messageBroker = this.messageBrokerFactory.createMessageBroker(POSITIONING_CHANNEL);
  }

  positionElements(
    hostElement: any, targetElement: any, placement: string | Placement | PlacementArray,
    appendToBody?: boolean): Promise<Placement> {
    const fnArgs = [
      new FnArg(hostElement, RENDER_STORE_OBJECT),
      new FnArg(targetElement, RENDER_STORE_OBJECT),
      new FnArg(placement, PRIMITIVE),
      new FnArg(appendToBody, PRIMITIVE)
    ];
    const uiArgs = new UiArguments('positionElements', fnArgs);
    return this.messageBroker.runOnService(uiArgs, PRIMITIVE) as Promise<Placement>;
  }
}
