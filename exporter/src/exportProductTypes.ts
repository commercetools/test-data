import { AttributeType } from '@commercetools/platform-sdk';
import { getFolder } from './ctp/config';
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

const addAttribute = (attributeType: AttributeType) => {
  let type;
  let value;
  switch (attributeType.name) {
    case 'boolean':
      type = 'AttributeBooleanTypeDraft';
      value = "name('boolean')";
      break;
    case 'text':
      type = 'AttributeTextTypeDraft';
      value = "name('text')";
      break;
    case 'ltext':
      type = 'AttributeLocalizedTextTypeDraft';
      value = "name('ltext')";
      break;
    case 'lenum':
      type = 'AttributeLocalizedEnumTypeDraft';
      break;
    case 'reference':
      type = 'AttributeReferenceTypeDraft';
      value = "name('reference')";
      break;
    case 'set':
      type = 'AttributeLocalizedTextSetTypeDraft';
      value = "name('reference')";
      break;
    default:
      console.log('Define mapper for attribute type ' + attributeType.name);
  }
  type === undefined && console.log(attributeType);
  return (
    '        .type(\n' +
    '          ' +
    type +
    '.random().' +
    value +
    '\n' +
    '        )\n'
  );
};

const productTypes = async () => {
  const types = await getProductTypes();
  console.log('Found ' + types.length + ' product types');

  const header =
    "import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';\n" +
    'import {\n' +
    '  AttributeReferenceTypeDraft,\n' +
    '  AttributeEnumTypeDraft,\n' +
    '  AttributeBooleanTypeDraft,\n' +
    '  AttributeTextTypeDraft,\n' +
    '  AttributeLocalizedTextTypeDraft,\n' +
    "} from '@commercetools-test-data/attribute-type';\n" +
    "import { LocalizedString } from '@commercetools-test-data/commons';\n" +
    "import type { TProductTypeDraftBuilder } from '../../../types';\n" +
    "import * as ProductTypeDraft from '../../index';\n" +
    '\n';

  const productTypesMapping: Array<IndexFile> = [];

  types.forEach((type) => {
    let content = header;
    if (!type.key) {
      console.log('No key available for ' + type.name);
      return;
    }
    const functionName = buildFunctionname(type.key);
    content +=
      'const ' +
      functionName +
      ' = (): TProductTypeDraftBuilder =>\n' +
      '  ProductTypeDraft.presets\n' +
      '    .empty()\n';
    content = addEntry('key', content, type.key, '    ');
    content = addEntry('name', content, type.name, '    ');
    content = addEntry('description', content, type.description, '    ');
    content += '    .attributes([';

    type.attributes?.forEach((attribute) => {
      content +=
        '\n' +
        '      AttributeDefinitionDraft.presets\n' +
        '        .empty()\n';
      content = addEntry('name', content, attribute.name, '        ');
      content = addEntry(
        'label',
        content,
        formatLocalizedString(attribute.label),
        '        ',
        false
      );
      content = addEntry(
        'inputTip',
        content,
        formatLocalizedString(attribute.inputTip),
        '        ',
        false
      );
      content = addEntry(
        'isRequired',
        content,
        attribute.isRequired,
        '        ',
        false
      );
      content += addAttribute(attribute.type);
      content = addEntry(
        'attributeConstraint',
        content,
        attribute.attributeConstraint.toString(),
        '        '
      );
      content = addEntry(
        'isSearchable',
        content,
        attribute.isSearchable,
        '        ',
        false
      );
      content = addEntry(
        'inputHint',
        content,
        attribute.inputHint.toString(),
        '        '
      );

      content += ',\n' + '      ';
    });

    content +=
      '\n' + '    ]);\n' + '\n' + 'export default ' + functionName + ';';

    writeFile(
      content,
      'models/product-type/src/product-type-draft/presets',
      type.key
    );
    productTypesMapping.push({
      functionName: functionName,
      fileName: buildFilename(type.key),
    });
  });
  writeFile(
    buildIndexFile(productTypesMapping),
    'models/product-type/src/product-type-draft/presets',
    'index'
  );
};

productTypes().then(() => process.exit());
