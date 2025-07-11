import { fake, oneOf, TModelFieldsConfig } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../types';

// https://docs.commercetools.com/api/projects/stores#storedraft

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug()),
  name: fake(() => LocalizedStringDraft.random()),
  languages: [oneOf('en-US', 'de-DE', 'es-ES', 'en-GB')],
  countries: [fake((f) => f.location.countryCode())],
  distributionChannels: null,
  supplyChannels: null,
  productSelections: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TStoreDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStoreDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
