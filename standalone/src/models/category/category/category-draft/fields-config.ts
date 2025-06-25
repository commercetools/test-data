import { fake, TModelFieldsConfig } from '@/core';
import { LocalizedString, LocalizedStringDraft } from '@/models/commons';
import { TCategoryDraftGraphql, TCategoryDraftRest } from '../types';

// https://docs.commercetools.com/api/projects/categories#categorydraft

const commonFields = {
  assets: null,
  custom: null,
  description: null,
  externalId: null,
  key: null,
  metaDescription: null,
  metaKeywords: null,
  metaTitle: null,
  orderHint: null,
  parent: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCategoryDraftRest> = {
  fields: {
    ...commonFields,
    name: fake(() => LocalizedString.random()),
    slug: fake((f) => LocalizedString.presets.ofSlugs()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCategoryDraftGraphql> = {
  fields: {
    ...commonFields,
    name: fake(() => LocalizedStringDraft.random()),
    slug: fake((f) => LocalizedStringDraft.presets.ofSlugs()),
  },
};
