// These are important and needed before anything else
require('zone.js/dist/zone-node');
require('reflect-metadata');

const { enableProdMode } = require('@angular/core');

const express = require('express');
const { join } = require('path');
const { readFileSync } = require('fs');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const { ngExpressEngine } = require('@nguniversal/express-engine');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const cwd = process.cwd();
const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(cwd, 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Common platform-server providers used for all requests
const commonProviders = [
  // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
  provideModuleMap(LAZY_MODULE_MAP)
];

function setupServerEngine(app) {
  // Our index.html we'll use as our template
  const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

  // Set the engine
  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    // These are providers that are ALWAYS applicable, regardless of the request
    providers: commonProviders
  }));

  app.set('view engine', 'html');
  app.set('views', join(DIST_FOLDER, 'browser'));

  // Server static files from /browser
  app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

  // All regular routes use the Universal engine
  app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), {
      req,
      res,
      url: req.url,
      document: template,
      // These are providers that are specific to the request
      providers: []
    });
  });

  return app;
}

// Start up the Node server
const expressServer = setupServerEngine(express());

// Start HTTP server
expressServer.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
