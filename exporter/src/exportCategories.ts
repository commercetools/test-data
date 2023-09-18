import { AttributeType } from '@commercetools/platform-sdk';
import { getCategories, getCategoryById } from './ctp/categories';
import { getFolder, getLimit } from './ctp/config';
import {
  addEntry,
  buildFilename,
  buildFunctionname,
  buildIndexFile,
  formatLocalizedString,
  IndexFile,
  writeFile,
} from './ctp/helpers';
import { getProductTypes } from './ctp/product-types';

const categories = async () => {
  const { results } = await getCategories(getLimit());
  console.log('Found ' + results.length + ' categories');

  const header =
    'import {\n' +
    '  LocalizedString,\n' +
    '  KeyReference,\n' +
    "} from '@commercetools-test-data/commons';\n" +
    "import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';\n" +
    "import empty from '../empty';\n" +
    '\n';

  const categoryMapping: Array<IndexFile> = [];

  for (const category of results) {
    let content = header;
    let parentFunctionName;
    if (category.parent) {
      const parent = await getCategoryById(category.parent.id);
      const parentIdentifier = parent.key || parent.name['en-GB'];
      parentFunctionName = buildFunctionname(parentIdentifier);

      content +=
        'import ' +
        parentFunctionName +
        " from './" +
        buildFilename(parentIdentifier) +
        "';\n" +
        '\n' +
        'const ' +
        parentFunctionName +
        'Draft = ' +
        parentFunctionName +
        '().build<TCategoryDraft>();\n\n';
    }

    const identifier = category.key || category.name['en-GB'];
    const functionName = buildFunctionname(identifier);
    content +=
      'const ' +
      functionName +
      ' = (): TCategoryDraftBuilder =>\n' +
      '  empty()\n';
    content = addEntry(
      'name',
      content,
      formatLocalizedString(category.name),
      '    ',
      false
    );
    content = addEntry(
      'slug',
      content,
      formatLocalizedString(category.slug),
      '    ',
      false
    );
    content = addEntry(
      'description',
      content,
      formatLocalizedString(category.description),
      '    ',
      false
    );
    content = addEntry('key', content, category.key, '    ');
    content = addEntry('key', content, category.orderHint, '    ');
    if (parentFunctionName) {
      content = addEntry(
        'parent',
        content,
        'KeyReference.presets.category().key(' +
          parentFunctionName +
          'Draft.key!)',
        '    ',
        false
      );
    }

    content += '\n' + '\n' + 'export default ' + functionName + ';';

    writeFile(
      content,
      'models/category/src/category-draft/presets',
      identifier
    );
    categoryMapping.push({
      functionName: functionName,
      fileName: buildFilename(identifier),
    });
  }
  writeFile(
    buildIndexFile(categoryMapping),
    'models/category/src/category-draft/presets',
    'index'
  );
};

categories().then(() => process.exit());
