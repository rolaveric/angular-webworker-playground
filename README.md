# angular-webworker-playground

Playground for seeing `platform-webworker` from Angular in action, and testing popular UI libraries with it.

This project is a typical Angular CLI built application, with a few additions:
* `src/lib/*` folders for different platforms.
* Scripts and entry points for all 3 platform types: browser, server, and webworker:
`npm/yarn run start-browser`, `npm/yarn run start-server`, and `npm/yarn run start-webworker`

# Tips for using `platform-webworker`

To call a service on the UI at startup, add it to the `PLATFORM_INITIALIZER` multi provider:
```
function platformInitFnFactory(injector: Injector) {
  return () => {
    const zone: NgZone = injector.get(NgZone);
    zone.runGuarded(() => injector.get(MyUiService).start());
  };
}

export const platformInitMyUiServiceProvider: FactoryProvider = {
  provide: PLATFORM_INITIALIZER,
  useFactory: platformInitFnFactory,
  multi: true,
  deps: [Injector]
};
```

To expose methods on the UI, use `ServiceMessageBrokerFactory`:
* Create a message broker using `createMessageBroker(CHANNEL)`, where `CHANNEL` is the same
string used by the service on the UI and the client on the Worker.
```
constructor(
  private messageBrokerFactory: ServiceMessageBrokerFactory,
  private myService: MyService
) {
  this.messageBroker = this.messageBrokerFactory.createMessageBroker(MY_SERVICE_CHANNEL);
}
```
* Call `registerMethod()` on the message broker to expose a method to the client, in a method
called by the `PLATFORM_INITIALIZER` factory:
```
start() {
  this.messageBroker.registerMethod(
    // Method name
    'myMethod',
    // Expected argument types: 1 === Primitive, 2 === Render store object (ie. HTML element) 
    [1, 2],
    // Actual function
    this.myService.myMethod.bind(this.myService),
    // Expected return type (null for nothing)
    PRIMITIVE
  );
}
```

To call methods on the UI from the Worker, use `ClientMessageBrokerFactory`:
* Create a message broker using `createMessageBroker(CHANNEL)`, where `CHANNEL` is the same
 string used by the service on the UI and the client on the Worker.
* Call `runOnService()` on the message broker, using `FnArg` and `UiArguments` to define the method and arguments:
```
myMethod(value: string, nativeElement: any): Promise<boolean> {
  const fnArgs = [
    new FnArg(value, 1), // 1 === Primitive
    new FnArg(nativeElement, 2) // 2 === Render store object (ie. HTML element)
  ];
  const args = new UiArguments('myMethod', fnArgs);
  return this.messageBroker.runOnService(args, PRIMITIVE) as Promise<boolean>;
}
```

To call a service on the Worker at startup (eg. To load data from the UI), add it to the `APP_INITIALIZER` multi provider:
```
export function appInitFnFactory(myService: MyWorkerService, zone: NgZone) {
  return () => zone.runGuarded(() => myService.init());
}

export const appInitMyServiceProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitFnFactory,
  multi: true,
  deps: [MyWorkerService, NgZone]
};
```

# Tips for using `platform-server`

Handling DOM interactions in `platform-server` is much simpler for 2 reasons:

1. `platform-server` uses [Domino](https://github.com/fgnass/domino) to simulate the DOM on the server
2. `platform-server` shouldn't need to deal with most key or mouse events, since it's just rendering the first paint

The important things with `platform-server` are:
* Use `TransferState` to avoid redoing work.
* If `platform-server` takes too long, your UX will be a blank page till it's ready.
If you're just using `platform-server` for SEO, or if your #1 priority is battery optimization, that's fine.
Otherwise you should prevent `platform-server` from running anything that takes too long. 

# Known platform-webworker issues

* `$event.target` is undefined for all mouse events
* `$event.target.checked` is undefined for `change` events
* Code splitting/lazy loading does not currently work  
This is more an issue with Webpack, which sets up everything expecting to use `window` and JSONP.  
Likely a Webpack plugin/loader that can solve this.

# TODO

* Demo Angular features - specially those with known issues
* Test Angular v6's `providedIn: root` behavior
* Demo ngx-bootstrap UI components
* Demo Angular Material UI components
* Log github issues for the problems that were found
* Find other UI libraries to test
* Setup scripts to switch CSS frameworks (bootstrap 3, bootstrap 4, and material)
* Find webpack plugin/loader for lazy loading on web workers
