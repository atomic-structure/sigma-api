import * as Joi from 'joi';

export const baseSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'dev', 'int', 'uat', 'prod')
    .default('dev'),
  PORT: Joi.number().default(3000),
  API_PREFIX: Joi.string().default('api'),
  API_ENABLE_CORS: Joi.boolean().default(false),
  // Fügen Sie hier weitere gemeinsame Konfigurationsfelder hinzu
});
