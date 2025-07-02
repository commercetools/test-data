import { fake, oneOf, TModelFieldsConfig } from '@/core';
import { types } from '../constants';
import { TStateDraftGraphql, TStateDraftRest } from '../types';

// Public docs: https://docs.commercetools.com/api/projects/states#statedraft

const commonFieldsConfig = {
  description: null,
  initial: null,
  key: fake((f) => f.lorem.slug(2)),
  name: null,
  roles: null,
  transitions: null,
  type: oneOf(...Object.values(types)),
};

export const restFieldsConfig: TModelFieldsConfig<TStateDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStateDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
