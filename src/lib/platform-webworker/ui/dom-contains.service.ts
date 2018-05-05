import { FactoryProvider, Injectable, Injector, NgZone, PLATFORM_INITIALIZER } from '@angular/core';
import { ServiceMessageBrokerFactory, ServiceMessageBroker } from '@angular/platform-webworker';

import { DOM_CONTAINS_CHANNEL, PRIMITIVE, RENDER_STORE_OBJECT } from '../shared/tokens';
import { DomContainsService } from '../../common';

@Injectable()
export class UiDomContainsService {
  private messageBroker: ServiceMessageBroker;

  constructor(
    private messageBrokerFactory: ServiceMessageBrokerFactory,
    private domContainsService: DomContainsService
  ) {
    this.messageBroker = this.messageBrokerFactory.createMessageBroker(DOM_CONTAINS_CHANNEL);
  }

  /**
   * Called when the UI app is ready, via the PLATFORM_INITIALIZER token
   */
  start() {
    // domContainsService.contains()
    this.messageBroker.registerMethod(
      'contains',
      [RENDER_STORE_OBJECT, RENDER_STORE_OBJECT],
      (a, b) => this.domContainsService.contains(a, b).toPromise(),
      PRIMITIVE
    );
  }
}

// Factory used with `PLATFORM_INITIALIZER` to run `start()` when bootstrapping the UI
function platformInitFnFactory(injector: Injector) {
  return () => {
    const zone: NgZone = injector.get(NgZone);
    zone.runGuarded(() => injector.get(UiDomContainsService).start());
  };
}

export const platformInitDomContainsProvider: FactoryProvider = {
  provide: PLATFORM_INITIALIZER,
  useFactory: platformInitFnFactory,
  multi: true,
  deps: [Injector]
};
