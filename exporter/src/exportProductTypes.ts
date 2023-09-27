import { AttributeType } from '@commercetools/platform-sdk';
import { AttributeDefinition } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product-type';
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
  let additionalImports: Array<string> = [];
  switch (attributeType.name) {
    case 'boolean':
      type = 'AttributeBooleanTypeDraft';
      break;
    case 'text':
      type = 'AttributeTextTypeDraft';
      value = "name('text')";
      break;
    case 'ltext':
      type = 'AttributeLocalizableTextType';
      break;
    case 'lenum':
      type = 'AttributeLocalizedEnumTypeDraft';
      additionalImports.push('AttributeLocalizedEnumValueDraft');
      value =
        'values([' +
        attributeType.values.map((entry) => {
          return (
            "AttributeLocalizedEnumValueDraft.random().key('" +
            entry.key +
            "').label(" +
            formatLocalizedString(entry.label) +
            ')'
          );
        }) +
        '])';
      break;
    case 'set':
      type = 'AttributeSetTypeDraft';
      value = 'elementType(';
      switch (attributeType.elementType.name) {
        case 'reference':
          additionalImports.push('AttributeReferenceTypeDraft');
          value +=
            'AttributeReferenceTypeDraft.random().referenceTypeId(attributeReferenceTypeId.';
          switch (attributeType.elementType.referenceTypeId) {
            case 'product':
              value += 'Product';
              break;
            default:
              console.log(
                'Define mapper for attribute set reference type ' +
                  attributeType.elementType.referenceTypeId
              );
          }
          value += ')';
          break;
        case 'ltext':
          additionalImports.push('AttributeLocalizableTextType');
          value += 'AttributeLocalizableTextType.random()';
          break;
        default:
          console.log(
            'Define mapper for attribute set type ' +
              attributeType.elementType.name,
            attributeType
          );
      }
      value += ')';

      break;
    default:
      console.log(
        'Define mapper for attribute type ' + attributeType.name,
        attributeType
      );
  }
  return { type, value, additionalImports };
};
const addAttribute = (attributeType: AttributeType) => {
  const { type, value } = resolveMappedType(attributeType);
  if (type === undefined) {
    return '';
  }
  return `.type(${type}.random()${
    value !== undefined && value.length > 0 ? '.' + value : ''
  })`;
};

const resolveAttributeImports = (attributes?: AttributeDefinition[]) => {
  const result: Array<string> = [
    'AttributeDefinitionDraft',
    ...new Set(
      attributes
        ?.map((attribute) => {
          const { type, additionalImports } = resolveMappedType(attribute.type);
          if (additionalImports) {
            return [type, ...additionalImports];
          }
          return type;
        })
        .flat()
        .filter(notEmpty)
    ),
  ];
  // if (result.indexOf('AttributeLocalizedEnumTypeDraft') >= 0) {
  //   result.push('AttributeLocalizedEnumValueDraft');
  // }
  return result.sort((a, b) => a.localeCompare(b));
};

const productTypes = async () => {
  const types = await getProductTypes();
  console.log('Found ' + types.length + ' product types');

  const productTypesMapping: Array<IndexFile> = [];

  for (const type of types) {
    const attributes = resolveAttributeImports(type.attributes);
    let content =
      "import { LocalizedString } from '@commercetools-test-data/commons';" +
      'import { attributeConstraints,' +
      '  inputHints,' +
      "} from '../../../../attribute-definition/constants';";
    if (attributes.indexOf('AttributeReferenceTypeDraft') >= 0) {
      content +=
        "import { attributeReferenceTypeId } from '../../../../attribute-reference-type/constants';";
    }
    if (attributes && attributes.length > 0) {
      content += 'import {';
      content += attributes
        .map(
          (item) => `  ${item},
`
        )
        .join('');
      content += "} from '../../../../index';";
    }
    content +=
      "import type { TProductTypeDraftBuilder } from '../../../types';" +
      "import * as ProductTypeDraft from '../../index';\n\n";
    if (!type.key) {
      console.log('No key available for ' + type.name);
      continue;
    }
    const functionName = buildFunctionname(type.key);
    content +=
      'const ' +
      functionName +
      ' = (): TProductTypeDraftBuilder =>' +
      '  ProductTypeDraft.presets' +
      '    .empty()';
    content = addEntry('key', content, type.key, '    ');
    content = addEntry('name', content, type.name, '    ');
    content = addEntry('description', content, type.description, '    ');
    content += '    .attributes([';

    type.attributes?.forEach((attribute) => {
      content += 'AttributeDefinitionDraft.presets.empty()';
      content = addEntry('name', content, attribute.name, '        ');
      content += addAttribute(attribute.type);
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
      content += '        .isRequired(' + attribute.isRequired + ')';
      content = addEntry(
        'attributeConstraint',
        content,
        'attributeConstraints.' + attribute.attributeConstraint.toString(),
        '',
        false
      );
      content += '        .isSearchable(' + attribute.isSearchable + ')';
      content = addEntry(
        'inputHint',
        content,
        'inputHints.' + attribute.inputHint,
        '',
        false
      );

      content += ',\n\n';
    });

    content += '' + ']);\n\nexport default ' + functionName + ';';

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
