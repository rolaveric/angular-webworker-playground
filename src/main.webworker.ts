import './polyfills.ts';
import '@angular/core';
import '@angular/common';

import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

import { AppWebWorkerModule } from './app/app.webworker.module';

platformWorkerAppDynamic().bootstrapModule(AppWebWorkerModule)
  .then((v) => {
    console.log('Worker App Started');
    return v;
  });
