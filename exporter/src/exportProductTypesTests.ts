import { ProductType } from '@commercetools/platform-sdk';
import { buildFilename, buildFunctionname, writeFile } from './ctp/helpers';
import { getProductTypes } from './ctp/product-types';

function sortObj(obj: { [id: string]: unknown }) {
  return Object.keys(obj)
    .sort()
    .reduce<{ [id: string]: unknown }>(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
}

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
      return { ...result };
    });
  }
  return 'JSON.parse(`' + JSON.stringify(sortObj(rest), null, 2) + '`)';
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
    content += `  });\n`;
    content += `});\n`;
    await writeFile(
      content,
      'models/product-type/src/product-type/product-type-draft/presets',
      type.key + '.spec'
    );
  }
};

productTypes().then(() => process.exit());
