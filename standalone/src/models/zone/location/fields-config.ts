import { fake, type TModelFieldsConfig } from '@/core';
import type { TLocationRest, TLocationGraphql } from './types';

// Reference REST docs: https://docs.commercetools.com/api/projects/zones#location

const commonFieldsConfig = {
  country: fake((f) => f.location.countryCode()),
  state: null,
};

export const restFieldsConfig: TModelFieldsConfig<TLocationRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TLocationGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Location',
  },
};
