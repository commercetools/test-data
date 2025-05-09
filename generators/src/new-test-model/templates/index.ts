import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const readTemplates = (dirPath: string): string[] => {
  return readdirSync(dirPath)
    .map((fileName) => {
      if (statSync(`${dirPath}/${fileName}`).isDirectory()) {
        return readTemplates(`${dirPath}/${fileName}`);
      } else {
        return `${dirPath}/${fileName}`;
      }
    })
    .flat();
};

const buildTemplatesConfig = (templatesDirectoryPath: string) => {
  return readTemplates(templatesDirectoryPath).map((fileName) => {
    const [, templateFilePath] = fileName.split(`${templatesDirectoryPath}/`);
    const templateContent = readFileSync(fileName, 'utf-8');
    return {
      templatePath: templateFilePath.replace('.tpl', '.ts'),
      templateContent,
    };
  });
};

export const modelTemplatesData = buildTemplatesConfig(
  join(__dirname, 'model')
);
