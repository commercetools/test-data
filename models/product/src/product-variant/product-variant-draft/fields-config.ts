import { PriceDraft } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../attribute';
import { ImageDraft } from '../../image';
import type {
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../types';

const commonFieldsConfig = {
  assets: [],
  attributes: fake(() => [AttributeDraft.random()]),
  images: fake(() => [ImageDraft.random()]),
  key: fake((f) => f.lorem.slug(2)),
  prices: fake(() => [PriceDraft.random()]),
  sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
};

export const restFieldsConfig: TModelFieldsConfig<TProductVariantDraftRest> = {
  fields: commonFieldsConfig,
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductVariantDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      staged: fake(() => true),
    },
  };
