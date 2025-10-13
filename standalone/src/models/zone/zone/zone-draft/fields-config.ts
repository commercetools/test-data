import { fake, TModelFieldsConfig } from '@/core';
import { TZoneDraftGraphql, TZoneDraftRest } from '../types';

// Reference: https://docs.commercetools.com/api/projects/zones#zonedraft

const commonFieldsConfig = {
  name: fake((f) => f.lorem.words(2)),
  key: null,
  description: null,
  locations: [],
};

export const restFieldsConfig: TModelFieldsConfig<TZoneDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TZoneDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
