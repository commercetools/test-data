import { fake, TModelFieldsConfig } from '@/core';
import { TCategoryDraftGraphql, TCategoryDraftRest } from '../types';

// https://docs.commercetools.com/api/projects/categories#categorydraft

const commonFields = {
  assets: null,
  custom: null,
  description: null,
  externalId: fake((f) => f.string.uuid()),
  key: fake((f) => f.lorem.slug(3)),
  metaDescription: null,
  metaKeywords: null,
  metaTitle: null,
  name: null,
  orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
  parent: null,
  slug: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCategoryDraftRest> = {
  fields: {
    ...commonFields,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCategoryDraftGraphql> = {
  fields: {
    ...commonFields,
  },
};
