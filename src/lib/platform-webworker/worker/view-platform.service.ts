import { Injectable } from '@angular/core';
import {
  ClientMessageBroker, ClientMessageBrokerFactory, FnArg, UiArguments, SerializerTypes
} from '@angular/platform-webworker';
import { Observable, from } from 'rxjs';

import { ViewPlatformService } from '../../common';
import { VIEW_PLATFORM_SERVICE_CHANNEL } from '../shared/channels';

/**
 * WebWorker implementation of the ViewPlatformService.
 *
 * Methods return `async` scheduled observables as they work via RPC messages to the UI (window) thread.
 */
@Injectable()
export class WorkerViewPlatformService extends ViewPlatformService {
  private messageBroker: ClientMessageBroker;

  constructor(private messageBrokerFactory: ClientMessageBrokerFactory) {
    super();

    this.messageBroker = this.messageBrokerFactory.createMessageBroker(VIEW_PLATFORM_SERVICE_CHANNEL);
  }

  contains(ancestor: any, descendant: any): Observable<boolean> {
    const fnArgs = [
      new FnArg(ancestor, SerializerTypes.RENDER_STORE_OBJECT),
      new FnArg(descendant, SerializerTypes.RENDER_STORE_OBJECT)
    ];
    const uiArgs = new UiArguments('contains', fnArgs);
    return from(this.messageBroker.runOnService(uiArgs, SerializerTypes.PRIMITIVE)) as Observable<boolean>;
  }
}
