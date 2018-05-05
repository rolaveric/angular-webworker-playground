import { Injectable } from '@angular/core';
import {
  ClientMessageBroker, ClientMessageBrokerFactory, FnArg, UiArguments, SerializerTypes
} from '@angular/platform-webworker';
import { from, Observable } from 'rxjs';

import { Placement, PlacementArray } from '../../ng-bootstrap/util/positioning';
import { POSITIONING_CHANNEL } from '../shared/channels';

@Injectable()
export class WorkerPositioning {
  private messageBroker: ClientMessageBroker;

  constructor(private messageBrokerFactory: ClientMessageBrokerFactory) {
    this.messageBroker = this.messageBrokerFactory.createMessageBroker(POSITIONING_CHANNEL);
  }

  positionElements(
    hostElement: any, targetElement: any, placement: string | Placement | PlacementArray,
    appendToBody?: boolean): Observable<Placement> {
    const fnArgs = [
      new FnArg(hostElement, SerializerTypes.RENDER_STORE_OBJECT),
      new FnArg(targetElement, SerializerTypes.RENDER_STORE_OBJECT),
      new FnArg(placement, SerializerTypes.PRIMITIVE),
      new FnArg(appendToBody, SerializerTypes.PRIMITIVE)
    ];
    const uiArgs = new UiArguments('positionElements', fnArgs);
    return from(this.messageBroker.runOnService(uiArgs, SerializerTypes.PRIMITIVE)) as Observable<Placement>;
  }
}
