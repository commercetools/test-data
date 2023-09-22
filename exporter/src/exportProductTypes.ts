import { AttributeType } from '@commercetools/platform-sdk';
import {
  AttributeDefinition,
  AttributeLocalizedEnumValue,
} from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product-type';
import { getFolder } from './ctp/config';
import {
  addEntry,
  buildFilename,
  buildFunctionname,
  buildIndexFile,
  formatLocalizedString,
  IndexFile,
  notEmpty,
  writeFile,
} from './ctp/helpers';
import { getProductTypes } from './ctp/product-types';

const resolveMappedType = (attributeType: AttributeType) => {
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
    // case 'ltext':
    //   type = 'AttributeLocalizedTextTypeDraft';
    //   value = "name('ltext')";
    //   break;
    case 'lenum':
      type = 'AttributeLocalizedEnumValue';
      value =
        "name('lenum').values(" + JSON.stringify(attributeType.values) + ')';
      break;
    default:
      console.log(
        'Define mapper for attribute type ' + attributeType.name,
        attributeType
      );
  }
  return { type, value };
};
const addAttribute = (attributeType: AttributeType) => {
  const { type, value } = resolveMappedType(attributeType);
  if (type === undefined) {
    return '';
  }
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

const resolveAttributeImports = (attributes?: AttributeDefinition[]) => {
  return [
    'AttributeDefinitionDraft',
    ...new Set(
      attributes
        ?.map((attribute) => {
          const { type } = resolveMappedType(attribute.type);
          return type;
        })
        .filter(notEmpty)
    ),
  ];
};

const productTypes = async () => {
  const types = await getProductTypes();
  console.log('Found ' + types.length + ' product types');

  const header =
    "import { LocalizedString } from '@commercetools-test-data/commons';\n" +
    'import {\n' +
    '  AttributeDefinitionDraft,\n' +
    '  AttributeEnumTypeDraft,\n' +
    '  AttributeBooleanTypeDraft,\n' +
    '  AttributeTextTypeDraft,\n' +
    '  AttributeLocalizedTextTypeDraft,\n' +
    "} from '../../../../index';\n" +
    "import type { TProductTypeDraftBuilder } from '../../../types';\n" +
    "import * as ProductTypeDraft from '../../index';\n" +
    '\n';

  const productTypesMapping: Array<IndexFile> = [];

  for (const type of types) {
    const attributes = resolveAttributeImports(type.attributes);
    let content =
      "import { LocalizedString } from '@commercetools-test-data/commons';\n";
    if (attributes && attributes.length > 0) {
      content += 'import {\n';
      content += attributes
        .map(
          (item) => `  ${item},
`
        )
        .join('');
      content += "} from '../../../../index';\n";
    }
    content +=
      "import type { TProductTypeDraftBuilder } from '../../../types';\n" +
      "import * as ProductTypeDraft from '../../index';\n" +
      '\n';
    if (!type.key) {
      console.log('No key available for ' + type.name);
      continue;
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
      content += '        .isRequired(' + attribute.isRequired + ')\n';
      content += addAttribute(attribute.type);
      content = addEntry(
        'attributeConstraint',
        content,
        attribute.attributeConstraint.toString(),
        '        '
      );
      content += '        .isSearchable(' + attribute.isSearchable + ')\n';
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

    await writeFile(
      content,
      'models/product-type/src/product-type/product-type-draft/presets',
      type.key
    );
    productTypesMapping.push({
      functionName: functionName,
      fileName: buildFilename(type.key),
    });
  }
  await writeFile(
    buildIndexFile(productTypesMapping),
    'models/product-type/src/product-type/product-type-draft/presets',
    'index'
  );
};

productTypes().then(() => process.exit());
