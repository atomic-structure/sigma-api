import Joi from 'joi';
// import { baseSchema } from '@sigma-api/config'; Should be the target once integrated
import { baseSchema } from '../../../../../dist/libs/config/src/index.js'; // eslint-disable-line @nx/enforce-module-boundaries

export const deltaApiConfigSchema = baseSchema.keys({
  API2_SPECIFIC_VAR: Joi.string().required(),
  // Fügen Sie hier weitere API2-spezifische Felder hinzu
});
