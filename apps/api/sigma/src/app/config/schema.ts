import * as Joi from 'joi';
import { baseSchema } from '@sigma-api/config';

export const sigmaApiConfigSchema = baseSchema.keys({
  API1_SPECIFIC_VAR: Joi.string().required(),
  // Fügen Sie hier weitere API1-spezifische Felder hinzu
});
