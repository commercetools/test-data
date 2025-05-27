import { fake, oneOf, TModelFieldsConfig } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../types';

export const restFieldConfig: TModelFieldsConfig<TStoreDraftRest> = {
  fields: {
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedStringDraft.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES', 'en-GB')],
    countries: [fake((f) => f.location.countryCode())],
    distributionChannels: null,
    supplyChannels: null,
    productSelections: null,
    custom: null,
  },
};

export const graphqlFieldConfig: TModelFieldsConfig<TStoreDraftGraphql> = {
  fields: {
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedStringDraft.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES', 'en-GB')],
    countries: [fake((f) => f.location.countryCode())],
    distributionChannels: null,
    supplyChannels: null,
    productSelections: null,
    custom: null,
  },
};
