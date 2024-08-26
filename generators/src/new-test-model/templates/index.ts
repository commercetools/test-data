import { readFileSync, readdirSync } from 'node:fs';
import camelCase from 'lodash/camelCase';

const templateFiles = readdirSync(__dirname).filter((file) =>
  file.endsWith('.tpl')
);

export const templates = templateFiles.reduce<Record<string, string>>(
  (prev, fileName) => {
    const templateName = camelCase(fileName.replace('.tpl', ''));
    const templateContent = readFileSync(`${__dirname}/${fileName}`, 'utf-8');
    return { ...prev, [templateName]: templateContent };
  },
  {}
);
