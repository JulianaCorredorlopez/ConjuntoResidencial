import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();

const isProduction = process.env['NODE_ENV'] === 'production';

const angularApp = new AngularNodeAppEngine({
  allowedHosts: isProduction
    ? ['conjuntoresidencial-l0au.onrender.com']
    : ['localhost'],
  trustProxyHeaders: isProduction,
});

/**
 * Serve static files from /browser.
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response
        ? writeResponseToNodeResponse(response, res)
        : next(),
    )
    .catch(next);
});

/**
 * Start the server.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;

  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(
      `Node Express server listening on http://localhost:${port}`,
    );
  });
}

/**
 * Request handler used by the Angular CLI
 * and other environments.
 */
export const reqHandler = createNodeRequestHandler(app);