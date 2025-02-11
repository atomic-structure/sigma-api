import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import * as Joi from 'joi';

export class Config {
    private static instance: Config;
    private envConfig: any; // 


    constructor(api: string, schema: Joi.ObjectSchema, instance: string = 'instance1') {
        const environment = process.env['NODE_ENV'] || 'dev';
        const envFile = path.resolve(process.cwd(), `environments/${instance}/${api}/${environment}/.env`);

        this.envConfig = {
            ...dotenv.config({ path: envFile }).parsed,
            ...process.env
        };

        this.validateConfig(schema);
    }

    static getInstance(api: string, schema: Joi.ObjectSchema): Config {
        if (!Config.instance) {
            Config.instance = new Config(api, schema);
        }
        return Config.instance;
    }

    private validateConfig(schema: Joi.ObjectSchema) {
        const { error, value } = schema.validate(this.envConfig, { allowUnknown: true });
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        this.envConfig = value;
    }

    get(key: string): string {
        if (!(key in this.envConfig)) {
            throw new Error(`Missing environment variable: ${key}`);
        }
        return this.envConfig[key];
    }
}
