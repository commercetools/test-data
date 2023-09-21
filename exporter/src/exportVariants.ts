import {
  Attribute,
  AttributeDefinition,
  LocalizedString,
  ProductType,
  ProductVariant,
} from '@commercetools/platform-sdk';
import { getLimit } from './ctp/config';
import {
  addEntry,
  buildFilename,
  buildFunctionname,
  buildIndexFile,
  buildVariant,
  IndexFile,
  writeFile,
} from './ctp/helpers';
import { getProducts } from './ctp/products';

const header =
  "import { Money, PriceDraft } from '@commercetools-test-data/commons';\n" +
  "import { AttributeDraft } from '../../../../attribute';\n" +
  "import * as Image from '../../../../image';\n" +
  "import type { TProductVariantDraftBuilder } from '../../../types';\n" +
  "import * as ProductVariantDraft from '../../index';\n" +
  '\n';

const serializeAttributeValue = (
  attribute: Attribute,
  attributeDefinition?: AttributeDefinition
) => {
  const locale = 'en-GB';

  let attributeValue = '';

  switch (attributeDefinition?.type.name) {
    case 'ltext':
      attributeValue = JSON.stringify(attribute.value);
      break;
    case 'reference':
      attributeValue = attribute.value.key;
      break;
    case 'set':
      switch (attributeDefinition.type.elementType.name) {
        case 'ltext':
          attributeValue = attribute.value
            .map((item: LocalizedString) => item[locale])
            .join(';');

          break;
        default:
          console.log(attributeDefinition.type.elementType.name);
      }
      break;
    case 'boolean':
    case 'text':
      attributeValue = "'" + attribute.value + "'";
      break;
    case 'lenum':
      attributeValue = JSON.stringify(attribute.value);
      break;
    case 'enum':
      attributeValue = JSON.stringify(attribute.value);
      break;
    default:
      console.log(attributeDefinition?.type);
  }
  return attributeValue;
};

const handleVariant = async (
  variant: ProductVariant,
  identifier: string,
  productType: ProductType
) => {
  const variantIdentifier = buildVariant(identifier, variant.id);
  let content = header;
  const functionName = buildFunctionname(variantIdentifier);
  content +=
    'const ' +
    functionName +
    ' = (): TProductVariantDraftBuilder =>\n' +
    '  ProductVariantDraft.presets\n' +
    '    .empty()\n';
  content = addEntry('sku', content, variant.sku, '    ');
  content = addEntry('key', content, variant.key, '    ');
  content += '    .prices([\n';
  variant.prices?.forEach((price) => {
    content +=
      '      PriceDraft.presets\n' +
      '        .empty()\n' +
      "        .value(Money.random().currencyCode('" +
      price.value.currencyCode +
      "').centAmount(" +
      price.value.centAmount +
      '))\n' +
      "        .country('" +
      price.country +
      "'),\n";
  });
  content += '    ])\n';
  content += '    .images([\n';
  variant.images?.forEach((image) => {
    content +=
      '      Image.ImageDraft.presets\n' +
      '        .empty()\n' +
      '        .url(\n' +
      "          '" +
      image.url +
      "'\n" +
      '        )\n' +
      '        .dimensions({ w: ' +
      image.dimensions.w +
      ', h: ' +
      image.dimensions.h +
      ' }),\n';
  });
  content += '    ])\n';
  content += '    .attributes([\n';
  variant.attributes?.forEach((attribute) => {
    const attributeType = productType.attributes?.find(
      (item) => item.name === attribute.name
    );

    const value = serializeAttributeValue(attribute, attributeType);
    content +=
      "      AttributeDraft.random().name('" +
      attribute.name +
      "').value(" +
      value +
      '),\n';
  });
  content += '    ])\n';
  content += '\nexport default ' + functionName + ';';

  await writeFile(
    content,
    'models/product/src/product-variant/product-variant-draft/presets',
    variantIdentifier
  );
  return {
    functionName: functionName,
    fileName: buildFilename(variantIdentifier),
  };
};

const products = async () => {
  const products = await getProducts(getLimit(), 0, ['productType']);
  console.log(
    'Found ' + products.results.length + ' products: Resolving Variants'
  );
  const variantMapping: Array<IndexFile> = [];

  for (const product of products.results) {
    const productType = product.productType.obj!;
    const identifier = product.key || product.masterData.staged.name['en-GB'];
    variantMapping.push(
      await handleVariant(
        product.masterData.current.masterVariant,
        identifier,
        productType
      )
    );
    for (const variant of product.masterData.current.variants) {
      variantMapping.push(
        await handleVariant(variant, identifier, productType)
      );
    }
  }
  await writeFile(
    buildIndexFile(variantMapping),
    'models/product/src/product-variant/product-variant-draft/presets',
    'index'
  );
};

products().then(() => process.exit());
