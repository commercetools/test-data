import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { LocalizedString } from '@commercetools/platform-sdk';
import { getFolder, getLocales } from './config';

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

export const formatLocalizedString = (name?: LocalizedString) => {
  const locales = getLocales();
  if (!name) {
    return undefined;
  }
  const result = locales
    .map((locale) => {
      if (!name[locale] || name[locale] === '') {
        return undefined;
      }
      return "['" + locale + "']('" + name[locale] + "')";
    })
    .filter(notEmpty)
    .join('');
  if (result.length === 0) {
    return undefined;
  }
  return 'LocalizedString.presets.empty()' + result;
};

export const buildFilename = (input: string) => {
  return input
    .toLowerCase()
    .replaceAll(' ', '-')
    .replace(/[^0-9a-z-]/g, '');
};

const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0');

export const buildVariant = (
  prefix: string,
  suffix: number,
  splitter = '-'
) => {
  return prefix + splitter + zeroPad(suffix, 2);
};

export const buildFunctionname = (input: string) => {
  return (
    input &&
    buildFilename(input)
      .split('-')
      .map((entry, index) => {
        if (index !== 0) {
          return entry.charAt(0).toUpperCase() + entry.slice(1);
        }
        return entry;
      })
      .join('')
  );
};

export const addEntry = (
  key: string,
  output: string,
  value?: string | boolean,
  offset = '',
  escapeValue = true
) => {
  let newValue = escapeValue ? `'${value}'` : value;
  value && (output += offset + '.' + key + '(' + newValue + ')\n');
  return output;
};

export const writeFile = (
  content: string,
  subdir: string,
  filename: string
) => {
  const dir = resolve(__dirname, '../../..', subdir, getFolder());
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(dir + '/' + buildFilename(filename) + '.ts', content);
};

export type IndexFile = { functionName: string; fileName: string };

export const buildIndexFile = (entries: Array<IndexFile>) => {
  let content = entries
    .sort((a, b) => {
      return a.functionName.localeCompare(b.functionName);
    })
    .map((entry) => {
      return `import ${entry.functionName} from './${entry.fileName}';`;
    })
    .join('\n');
  content += '\n' + 'const presets = {\n';
  content += entries
    .map((entry) => {
      return `  ${entry.functionName},`;
    })
    .join('\n');
  content += '};\n' + '\n' + 'export default presets;';

  return content;
};
