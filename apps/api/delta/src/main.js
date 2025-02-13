/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
// import { Config } from '@sigma-api/config'; Should be the target once integrated
import { Config } from '../../../../dist/libs/config/src/index.js'; // eslint-disable-line @nx/enforce-module-boundaries
import { deltaApiConfigSchema } from './config/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url)); // TODO: Replace once migrated to TS

const config = Config.getInstance('delta-api', deltaApiConfigSchema);
const port = config.get('PORT');

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to delta!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
