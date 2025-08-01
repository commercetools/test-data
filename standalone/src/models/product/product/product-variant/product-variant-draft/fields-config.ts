import { fake, type TModelFieldsConfig } from '@/core';
import { PriceDraftGraphql, PriceDraftRest } from '@/models/commons';
import {
  AttributeDraft,
  ImageDraftGraphql,
  ImageDraftRest,
} from '@/models/product/product';
import type {
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../types';

const commonFieldsConfig = {
  assets: [],
  attributes: fake(() => [AttributeDraft.random()]),
  key: fake((f) => f.lorem.slug(2)),
  sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
};

export const restFieldsConfig: TModelFieldsConfig<TProductVariantDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    images: fake(() => [ImageDraftRest.random()]),
    prices: fake(() => [PriceDraftRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductVariantDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      images: fake(() => [ImageDraftGraphql.random()]),
      prices: fake(() => [PriceDraftGraphql.random()]),
    },
  };
