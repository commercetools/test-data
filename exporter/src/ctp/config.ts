import { config } from 'dotenv';

config();
config({ path: `.env.local`, override: true });

export const enum Prefix {
  API = 'CTP',
}

export const readConfig = (prefix: string) => {
  return {
    clientId: process.env[prefix + '_CLIENT_ID'] || '',
    clientSecret: process.env[prefix + '_CLIENT_SECRET'] || '',
    projectKey: process.env[prefix + '_PROJECT_KEY'] || '',
    oauthHost: process.env[prefix + '_AUTH_URL'] || '',
    host: process.env[prefix + '_API_URL'] || '',
    username: process.env[prefix + '_CUSTOMER_EMAIL'] || '',
    password: process.env[prefix + '_CUSTOMER_PASSWORD'] || '',
  };
};

export type Config = {
  clientId: string;
  clientSecret: string;
  projectKey: string;
  oauthHost: string;
  host: string;
  username?: string;
  password?: string;
};

export const getLocales = (): Array<string> => {
  return JSON.parse(process.env['LOCALES'] || 'false');
};

export const getFolder = (): string => {
  return process.env['FOLDER'] || '';
};

export const getLimit = (): number => {
  return Number(process.env['LIMIT']) || 200;
};
