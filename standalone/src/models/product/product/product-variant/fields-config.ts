import { fake, type TModelFieldsConfig } from '@/core';
import { PriceGraphql, PriceRest } from '@/models/commons';
import { Attribute, ImageGraphql, ImageRest } from '@/models/product/product';
import type { TProductVariantGraphql, TProductVariantRest } from './types';

const commonFieldsConfig = {
  availability: null,
  assets: [],
  id: fake((f) => f.number.int()),
  key: fake((f) => f.lorem.slug(2)),
  price: null,
  sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
};

export const restFieldsConfig: TModelFieldsConfig<TProductVariantRest> = {
  fields: {
    ...commonFieldsConfig,
    attributes: fake(() => [Attribute.random()]),
    images: fake(() => [ImageRest.random()]),
    isMatchingVariant: fake(() => false),
    prices: fake(() => [PriceRest.random()]),
    scopedPrice: null,
    scopedPriceDiscounted: null,
    recurrencePrices: [],
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TProductVariantGraphql> = {
  fields: {
    ...commonFieldsConfig,
    attributesRaw: fake(() => [Attribute.random()]),
    allRecurrencePrices: null,
    images: fake(() => [ImageGraphql.random()]),
    prices: fake(() => [PriceGraphql.random()]),
    __typename: 'ProductVariant',
  },
  postBuild: (model, context) => {
    // @ts-expect-error The GraphQL mode does not have a `attributes` field but we need this logic for the compatibility builder
    if (context.isCompatMode && model.attributes) {
      // @ts-expect-error The GraphQL mode does not have a `attributes` field but we need this logic for the compatibility builder
      model.attributesRaw = model.attributes.map((attribute) => ({
        ...attribute,
        __typename: 'RawProductAttribute',
      }));
      // @ts-expect-error The GraphQL mode does not have a `attributes` field but we need this logic for the compatibility builder
      model.attributes = undefined;
    }
    return model;
  },
};
