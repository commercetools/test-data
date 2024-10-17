import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readModels = (dirPath) => {
  return readdirSync(dirPath)
    .map((fileName) => {
      if (['node_modules', 'dist'].includes(fileName)) {
        return null;
      }
      if (statSync(`${dirPath}/${fileName}`).isDirectory()) {
        return readModels(`${dirPath}/${fileName}`);
      } else if (fileName.endsWith('generator.ts')) {
        // return `${dirPath}/${fileName}`;
        // return dirPath;
        const directoryParts = dirPath.split('/');
        const lastPart = directoryParts.pop();
        return lastPart === 'src' ? directoryParts.pop() : lastPart;
      } else {
        return null;
      }
    })
    .flat()
    .filter(Boolean);
};

const models = readModels(__dirname);

console.log({ models });

writeFileSync('test-data_models.json', JSON.stringify(models, null, 2));
