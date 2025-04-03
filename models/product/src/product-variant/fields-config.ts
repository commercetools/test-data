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
    attributesRaw: [],
    __typename: 'ProductVariant',
  },
};
