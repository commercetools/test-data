import { Price } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { Attribute } from '..';
import * as Image from '../image';
import type { TProductVariantGraphql, TProductVariantRest } from './types';

const commonFieldsConfig = {
  availability: null,
  assets: [],
  id: fake((f) => f.number.int()),
  images: fake(() => [Image.random()]),
  key: fake((f) => f.lorem.slug(2)),
  price: null,
  prices: fake(() => [Price.random()]),
  sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
};

export const restFieldsConfig: TModelFieldsConfig<TProductVariantRest> = {
  fields: {
    ...commonFieldsConfig,
    attributes: fake(() => [Attribute.random()]),
    isMatchingVariant: fake(() => false),
    scopedPrice: null,
    scopedPriceDiscounted: null,
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TProductVariantGraphql> = {
  fields: {
    ...commonFieldsConfig,
    attributesRaw: fake(() => [Attribute.random()]),
    __typename: 'ProductVariant',
  },
  postBuild: (model, context) => {
    // @ts-expect-error The GraphQL mode does not have a `attributes` field but we need this logic for the compatibility builder
    if (context.isCompatMode && model.attributes) {
      // @ts-expect-error The GraphQL mode does not have a `attributes` field but we need this logic for the compatibility builder
      model.attributesRaw = model.attributes.map((attribute) => ({
        ...attribute,
        __typename: 'Attribute',
      }));
      // @ts-expect-error The GraphQL mode does not have a `attributes` field but we need this logic for the compatibility builder
      delete model.attributes;
    }
    return model;
  },
};
