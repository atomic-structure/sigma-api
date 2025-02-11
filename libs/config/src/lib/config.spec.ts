import { Config } from './config';
import * as Joi from 'joi';

describe('Config Class', () => {
  const schema = Joi.object({
    TEST_VAR: Joi.string().required(),
    PORT: Joi.number().default(3000),
  });

  beforeEach(() => {
    jest.resetModules();
    process.env = {};
  });

  it('should initialize with valid environment variables', () => {
    process.env['TEST_VAR'] = 'test';
    const config = new Config('test-api', schema);
    expect(config.get('TEST_VAR')).toBe('test');
    expect(config.get('PORT')).toBe(3000);
  });

  it('should throw an error for missing required variables', () => {
    expect(() => new Config('test-api', schema)).toThrow('Config validation error');
  });

  it('should use default values when not provided', () => {
    process.env['TEST_VAR'] = 'test';
    const config = new Config('test-api', schema);
    expect(config.get('PORT')).toBe(3000);
  });

  it('should throw an error for non-existent config keys', () => {
    process.env['TEST_VAR'] = 'test';
    const config = new Config('test-api', schema);
    expect(() => config.get('NON_EXISTENT')).toThrow('Missing environment variable');
  });
});
