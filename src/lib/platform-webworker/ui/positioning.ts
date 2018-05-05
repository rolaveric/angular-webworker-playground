import { FactoryProvider, Injectable, Injector, NgZone, PLATFORM_INITIALIZER } from '@angular/core';
import { ServiceMessageBrokerFactory, ServiceMessageBroker } from '@angular/platform-webworker';

import { POSITIONING_CHANNEL, PRIMITIVE, RENDER_STORE_OBJECT } from '../shared/tokens';
import { Positioning } from '../../ng-bootstrap/util/positioning';

@Injectable()
export class UiPositioning {
  private messageBroker: ServiceMessageBroker;

  constructor(
    private messageBrokerFactory: ServiceMessageBrokerFactory,
    private positioning: Positioning
  ) {
    this.messageBroker = this.messageBrokerFactory.createMessageBroker(POSITIONING_CHANNEL);
  }

  /**
   * Called when the UI app is ready, via the PLATFORM_INITIALIZER token
   */
  start() {
    // positioning.positionElements()
    this.messageBroker.registerMethod(
      'positionElements',
      [RENDER_STORE_OBJECT, RENDER_STORE_OBJECT, PRIMITIVE, PRIMITIVE],
      (a, b, c, d) => this.positioning.positionElements(a, b, c, d).toPromise(),
      PRIMITIVE
    );
  }
}

// Factory used with `PLATFORM_INITIALIZER` to run `start()` when bootstrapping the UI
function platformInitFnFactory(injector: Injector) {
  return () => {
    const zone: NgZone = injector.get(NgZone);
    zone.runGuarded(() => injector.get(UiPositioning).start());
  };
}

export const platformInitPositioningProvider: FactoryProvider = {
  provide: PLATFORM_INITIALIZER,
  useFactory: platformInitFnFactory,
  multi: true,
  deps: [Injector]
};
