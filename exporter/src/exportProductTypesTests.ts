import { AttributeType, ProductType } from '@commercetools/platform-sdk';
import { AttributeDefinition } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product-type';
import {
  buildFilename,
  buildFunctionname,
  filterLocalizedString,
  localizedStringToGraphql,
  prettierMeJson,
  sortObj,
  writeFile,
} from './ctp/helpers';
import { getProductTypes } from './ctp/product-types';

const getProductTypeSnapshot = (productType: ProductType) => {
  //Filter attributes that the builder does not know about
  let {
    id,
    version,
    createdAt,
    lastModifiedAt,
    lastModifiedBy,
    createdBy,
    ...rest
  } = productType;
  if ('versionModifiedAt' in rest) {
    let { versionModifiedAt, ...changed } = rest;
    rest = changed;
  }
  if ('classifier' in rest) {
    let { classifier, ...changed } = rest;
    rest = changed;
  }
  if (rest.attributes && rest.attributes.length > 0) {
    rest.attributes = rest.attributes.map((attribute) => {
      let result = { ...attribute };
      if ('displayGroup' in attribute) {
        const { displayGroup, ...rest } = attribute;
        result = rest;
      }
      if (attribute.inputTip) {
        const filtered = filterLocalizedString(attribute.inputTip);
        if (Object.keys(filtered).length > 0) {
          result = {
            ...result,
            inputTip: filtered,
          };
        } else {
          const { inputTip, ...rest } = result;
          result = rest;
        }
      }
      if (attribute.label) {
        const filtered = filterLocalizedString(attribute.label);
        if (Object.keys(filtered).length > 0) {
          result = {
            ...result,
            label: filtered,
          };
        }
      }
      return { ...result };
    });
  }
  return 'JSON.parse(`' + JSON.stringify(sortObj(rest), null, 2) + '`)';
};

const mapType = (attributeType: AttributeType) => {
  switch (attributeType.name) {
    case 'ltext':
      return {
        __typename: 'LocalizableTextAttributeDefinitionType',
        name: 'ltext',
      };
    case 'boolean':
      return {
        boolean: {
          dummy: null,
        },
      };
    case 'lenum':
      return {
        lenum: {
          values: attributeType.values.map((value) => {
            return {
              key: value.key,
              label: localizedStringToGraphql(value.label),
            };
          }),
        },
      };
    case 'set':
      switch (attributeType.elementType.name) {
        case 'reference': {
          return {
            set: {
              elementType: {
                reference: {
                  referenceTypeId: attributeType.elementType.referenceTypeId,
                },
              },
            },
          };
        }
        case 'ltext':
          return {
            set: {
              elementType: {
                __typename: 'LocalizableTextAttributeDefinitionType',
                name: 'ltext',
              },
            },
          };
        default:
          console.log(
            'missing mapper for set type ' + attributeType.elementType.name
          );
      }
      break;
    default:
      console.log('missing mapper for ' + attributeType.name);
  }
  return {};
};

const mapAttributeToGraphQL = (attributeDefinition: AttributeDefinition) => {
  return {
    attributeConstraint: attributeDefinition.attributeConstraint,
    inputHint: attributeDefinition.inputHint,
    inputTip: localizedStringToGraphql(attributeDefinition.inputTip),
    isRequired: attributeDefinition.isRequired,
    isSearchable: attributeDefinition.isSearchable,
    name: attributeDefinition.name,
    label: localizedStringToGraphql(attributeDefinition.label)!,
    type: mapType(attributeDefinition.type),
  };
};
const getProductTypeSnapshotForGraphql = async (productType: ProductType) => {
  //Filter attributes that the builder does not know about
  const result = {
    __typename: 'ProductTypeDraft',
    name: productType.name,
    description: productType.description,
    key: productType.key,
    attributeDefinitions: productType.attributes?.map(mapAttributeToGraphQL),
  };
  return (
    'JSON.parse(`' +
    (await prettierMeJson(JSON.stringify(sortObj(result)))) +
    '`)'
  );
};

const productTypes = async () => {
  const types = await getProductTypes();
  console.log('Found ' + types.length + ' product types');

  const header =
    'import type {\n' +
    'TProductTypeDraft,\n' +
    'TProductTypeDraftGraphql,\n' +
    "} from '../../../types';";

  for (const type of types) {
    let content = header;

    if (!type.key) {
      console.log('No key available for ' + type.name);
      continue;
    }
    const identifier = buildFunctionname(type.key);
    const fileName = buildFilename(type.key);

    content += `
import ${identifier} from './${fileName}';`;

    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it('should create a ${identifier} product type draft', () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TProductTypeDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchObject(\n`;
    content += getProductTypeSnapshot(type);
    content += `    );\n`;
    content += `  });\n\n`;
    content += `  it('should create a ${identifier} product type draft for graphql', () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().buildGraphql<TProductTypeDraftGraphql>();\n`;
    content += `    expect(${identifier}Preset).toMatchObject(\n`;
    content += await getProductTypeSnapshotForGraphql(type);
    content += `    );\n`;
    content += `  });\n\n`;
    content += `});\n`;
    await writeFile(
      content,
      'models/product-type/src/product-type/product-type-draft/presets',
      type.key + '.spec'
    );
  }
};

productTypes().then(() => process.exit());
