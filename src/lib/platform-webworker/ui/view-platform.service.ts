import { FactoryProvider, Injectable, Injector, NgZone, PLATFORM_INITIALIZER } from '@angular/core';
import { ServiceMessageBrokerFactory, ServiceMessageBroker, SerializerTypes } from '@angular/platform-webworker';

import { VIEW_PLATFORM_SERVICE_CHANNEL } from '../shared/channels';
import { ViewPlatformService } from '../../common';

/**
 * UI service for the WebWorker implementation of the ViewPlatformService class.
 * Proxies RPC messages to the real browser implementation.
 */
@Injectable()
export class UiViewPlatformService {
  private messageBroker: ServiceMessageBroker;

  constructor(
    private messageBrokerFactory: ServiceMessageBrokerFactory,
    private domContainsService: ViewPlatformService
  ) {
    this.messageBroker = this.messageBrokerFactory.createMessageBroker(VIEW_PLATFORM_SERVICE_CHANNEL);
  }

  /**
   * Called when the UI app is ready, via the PLATFORM_INITIALIZER token
   */
  start() {
    // domContainsService.contains()
    this.messageBroker.registerMethod(
      'contains',
      [SerializerTypes.RENDER_STORE_OBJECT, SerializerTypes.RENDER_STORE_OBJECT],
      (a, b) => this.domContainsService.contains(a, b).toPromise(),
      SerializerTypes.PRIMITIVE
    );
  }
}

// Factory used with `PLATFORM_INITIALIZER` to run `start()` when bootstrapping the UI
function platformInitFnFactory(injector: Injector) {
  return () => {
    const zone: NgZone = injector.get(NgZone);
    zone.runGuarded(() => injector.get(UiViewPlatformService).start());
  };
}

export const platformInitViewPlatformServiceProvider: FactoryProvider = {
  provide: PLATFORM_INITIALIZER,
  useFactory: platformInitFnFactory,
  multi: true,
  deps: [Injector]
};
