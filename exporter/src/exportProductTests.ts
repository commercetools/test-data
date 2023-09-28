import {
  Category,
  CategoryReference,
  LocalizedString,
  Money,
  PriceDraft,
  Product,
  ProductDraft,
  ProductTypeReference,
  ProductVariant,
  ProductVariantDraft,
  TaxCategoryReference,
} from '@commercetools/platform-sdk';
import { getCategoryById } from './ctp/categories';
import { getFolder, getLimit } from './ctp/config';
import {
  addEntry,
  buildFunctionname,
  buildVariant,
  filterLocalizedString,
  formatLocalizedString,
  localizedStringToGraphql,
  prettierMeJson,
  sortObj,
  writeFile,
} from './ctp/helpers';
import { getProducts } from './ctp/products';

const mapVariant = (variant: ProductVariant) => {
  let { id, availability, ...rest } = variant;
  let result: ProductVariantDraft = {
    ...rest,
    prices: rest.prices?.map((value) => {
      let { id, ...priceResult } = value;
      const result: PriceDraft = {
        ...priceResult,
        value: {
          centAmount: priceResult.value.centAmount,
          currencyCode: priceResult.value.currencyCode,
        },
        discounted: undefined,
      };
      return result;
    }),
    assets:
      variant.assets && variant.assets.length > 0 ? variant.assets : undefined,
  };
  return result;
};

const getProductSnapshotRest = async (product: Product) => {
  const variants = product.masterData.current.variants.map(mapVariant);
  let result: ProductDraft = {
    ...product.masterData.current,
    categories: product.masterData.current.categories.map((value) => {
      return { key: value.obj?.key!, typeId: 'category' };
    }),
    categoryOrderHints:
      product.masterData.current.categoryOrderHints &&
      Object.keys(product.masterData.current.categoryOrderHints).length > 0
        ? product.masterData.current.categoryOrderHints
        : undefined,
    productType: { key: product.productType.obj?.key, typeId: 'product-type' },
    masterVariant: mapVariant(product.masterData.current.masterVariant),
    variants: variants && variants.length > 0 ? variants : undefined,
    metaTitle: filterLocalizedString(product.masterData.current.metaTitle),
    metaDescription: filterLocalizedString(
      product.masterData.current.metaDescription
    ),
    searchKeywords: undefined,
  };

  if (
    product.masterData.current.searchKeywords &&
    Object.keys(product.masterData.current.searchKeywords).length > 0
  ) {
    const keep = Object.values(
      product.masterData.current.searchKeywords
    ).reduce((all, one) => {
      if (Array.isArray(one) && one.length > 0) {
        return true;
      }
      return all;
    }, false);
    if (keep) {
      result = {
        ...result,
        searchKeywords: product.masterData.current.searchKeywords,
      };
    }
  }
  return result;
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: string;
  /** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
  Country: string;
  /** Represents a currency. Currencies are identified by their [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes. */
  Currency: string;
  /** DateTime is a scalar value that represents an ISO8601 formatted date. */
  Date: string;
  /** DateTime is a scalar value that represents an ISO8601 formatted date and time. */
  DateTime: string;
  /** Raw JSON value */
  Json: { [key: string]: unknown };
  /** A key that references a resource. */
  KeyReferenceInput: string;
  /** Locale is a scalar value represented as a string language tag. */
  Locale: string;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: number;
  /** Search filter. It is represented as a string and has th same format as in REST API: "field:filter_criteria" */
  SearchFilter: string;
  /** Search sort */
  SearchSort: string;
  /** A set. */
  Set: unknown[];
  /** Time is a scalar value that represents an ISO8601 formatted time. */
  Time: string;
  /** YearMonth is a scalar value that represents an ISO8601 formatted year and month. */
  YearMonth: string;
};
export type TCategoryOrderHintInput = {
  orderHint: Scalars['String'];
  uuid: Scalars['String'];
};
export type TLocalizedStringItemInputType = {
  locale: Scalars['Locale'];
  value: Scalars['String'];
};
export type TAssetDimensionsInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};
export type TAssetSourceInput = {
  contentType?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<TAssetDimensionsInput>;
  key?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
};
export type TResourceIdentifierInput = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
  __typename?: string;
};
export type TAssetDraftInput = {
  description?: InputMaybe<Array<TLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']>;
  name: Array<TLocalizedStringItemInputType>;
  sources?: InputMaybe<Array<TAssetSourceInput>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<TResourceIdentifierInput>;
};
export type TProductAttributeInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};
export type TDimensionsInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};
export type TImageInput = {
  dimensions: TDimensionsInput;
  label?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};
export type TMoneyInput = {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
};
export type THighPrecisionMoneyInput = {
  centAmount?: InputMaybe<Scalars['Long']>;
  currencyCode: Scalars['Currency'];
  fractionDigits: Scalars['Int'];
  preciseAmount: Scalars['Long'];
};
export type TBaseMoneyInput = {
  centPrecision?: InputMaybe<TMoneyInput>;
  highPrecision?: InputMaybe<THighPrecisionMoneyInput>;
};
export type TProductPriceTierInput = {
  minimumQuantity: Scalars['Int'];
  value: TBaseMoneyInput;
};
export type TReferenceInput = {
  id: Scalars['String'];
  typeId: Scalars['String'];
};
export type TProductPriceDataInput = {
  channel?: InputMaybe<TResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']>;
  customerGroup?: InputMaybe<TReferenceInput>;
  key?: InputMaybe<Scalars['String']>;
  tiers?: InputMaybe<Array<TProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
  value: TBaseMoneyInput;
};
export type TProductVariantInput = {
  assets?: InputMaybe<Array<TAssetDraftInput>>;
  attributes?: InputMaybe<Array<TProductAttributeInput>>;
  images?: InputMaybe<Array<TImageInput>>;
  key?: InputMaybe<Scalars['String']>;
  prices?: InputMaybe<Array<TProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']>;
};
export enum TPriceMode {
  /** The platform looks up prices from the `prices` field of the ProductVariant inside a Product. */
  Embedded = 'Embedded',
  /** The platform looks up prices from Standalone Prices, stored separately from Products. */
  Standalone = 'Standalone',
}
export type TWhitespaceSuggestTokenizerInput = {
  dummy?: InputMaybe<Scalars['String']>;
};
export type TBaseSearchKeywordInput = {
  whitespace?: InputMaybe<TWhitespaceSuggestTokenizerInput>;
};
export type TSearchKeywordItemInput = {
  suggestTokenizer?: InputMaybe<TBaseSearchKeywordInput>;
  text: Scalars['String'];
};
export type TSearchKeywordInput = {
  keywords: Array<TSearchKeywordItemInput>;
  locale: Scalars['Locale'];
};
export type TProductDraft = {
  categories?: InputMaybe<Array<TResourceIdentifierInput>>;
  categoryOrderHints?: InputMaybe<Array<TCategoryOrderHintInput>>;
  description?: InputMaybe<Array<TLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']>;
  masterVariant?: InputMaybe<TProductVariantInput>;
  metaDescription?: InputMaybe<Array<TLocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<TLocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<TLocalizedStringItemInputType>>;
  name?: Array<TLocalizedStringItemInputType>;
  priceMode?: InputMaybe<TPriceMode>;
  productType: TResourceIdentifierInput;
  publish?: InputMaybe<Scalars['Boolean']>;
  searchKeywords?: InputMaybe<Array<TSearchKeywordInput>>;
  slug: Array<TLocalizedStringItemInputType>;
  state?: InputMaybe<TResourceIdentifierInput>;
  taxCategory?: InputMaybe<TResourceIdentifierInput>;
  variants?: InputMaybe<Array<TProductVariantInput>>;
};

const mapVariantGraphql = (variant: ProductVariant) => {
  let { id, availability, ...rest } = variant;
  let result: TProductVariantInput = {
    ...rest,
    attributes: rest.attributes?.map((value) => {
      return { name: value.name, value: JSON.stringify(value.value) };
    }),
    prices: rest.prices?.map((value) => {
      const result: TProductPriceDataInput = {
        country: value.country,
        value: {
          centPrecision: {
            centAmount: value.value.centAmount,
            currencyCode: value.value.currencyCode,
          },
        },
      };
      return result;
    }),
    images:
      variant.images && variant.images.length > 0
        ? variant.images.map((value): TImageInput => {
            return {
              url: value.url,
              dimensions: {
                height: value.dimensions.h,
                width: value.dimensions.w,
              },
            };
          })
        : undefined,
    assets:
      variant.assets && variant.assets.length > 0
        ? variant.assets.map((value): TAssetDraftInput => {
            return { name: localizedStringToGraphql(value.name)! };
          })
        : undefined,
  };
  return result;
};
const getProductSnapshotGraphQL = async (product: Product) => {
  const productData = product.masterData.current;
  const result: TProductDraft = {
    categories: productData.categories.map((value) => {
      return {
        __typename: 'Reference',
        key: value.obj?.key,
        typeId: 'category',
      };
    }),
    categoryOrderHints: undefined,
    description: localizedStringToGraphql(productData.description),
    name: localizedStringToGraphql(productData.name)!,
    slug: localizedStringToGraphql(productData.slug)!,
    key: product.key,
    masterVariant: mapVariantGraphql(productData.masterVariant),
    variants:
      productData.variants && productData.variants.length > 0
        ? productData.variants.map(mapVariantGraphql)
        : undefined,
    productType: {
      __typename: 'Reference',
      key: product.productType.obj?.key,
      typeId: 'product-type',
    },
  };
  return result;
};
const getProductSnapshot = async (product: Product) => {
  const object = {
    rest: sortObj(
      (await getProductSnapshotRest(product)) as unknown as {
        [id: string]: unknown;
      }
    ),
    graphql: sortObj(
      (await getProductSnapshotGraphQL(product)) as unknown as {
        [id: string]: unknown;
      }
    ),
  };

  return JSON.stringify(object, null, 2);
};

const products = async () => {
  const products = await getProducts(getLimit(), 0, [
    'masterData.current.categories[*]',
    'taxCategory',
    'productType',
  ]);
  console.log('Found ' + products.results.length + ' products');

  const header = "import type { TProductDraft } from '../../../types';\n";

  for (const product of products.results) {
    let content = header;
    const name = product.key || product.masterData.staged.name['en-GB'];
    const identifier = buildFunctionname(name)!;
    content += `import ${identifier} from './${name}';\n`;
    content += `import productDraft from './${name}.spec.json';\n\n`;
    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it(\`should return a ${identifier} preset\`, () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TProductDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchObject(productDraft.rest);\n`;
    content += `  });\n\n`;
    //GraphQL
    content += `  it(\`should return a ${identifier} preset when built for graphql\`, () => {\n`;
    content += `    const ${identifier}PresetGraphql = ${identifier}().buildGraphql<TProductDraft>();\n`;
    content += `    expect(${identifier}PresetGraphql).toMatchObject(productDraft.graphql);\n`;
    content += `  });\n`;
    content += `});\n`;

    await writeFile(
      await getProductSnapshot(product),
      'models/product/src/product/product-draft/presets',
      `${name}.spec`,
      'json'
    );
    await writeFile(
      content,
      'models/product/src/product/product-draft/presets',
      `${name}.spec`
    );
  }
};

products().then(() => process.exit());
