import { enableProdMode } from '@angular/core';
import { bootstrapWorkerUi } from '@angular/platform-webworker';

import { APP_WEB_WORKER_UI_PROVIDERS } from './lib/platform-webworker';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi(
  'webworker.bundle.js',
  [
    ...APP_WEB_WORKER_UI_PROVIDERS
  ]
)
  .then(() => {
    console.log('Worker UI started');
  });
