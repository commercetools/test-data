// https://docs.commercetools.com/api/projects/zones#location

import { fake, type TModelFieldsConfig } from '@/core';
import type { TLocationRest, TLocationGraphql } from './types';

/*
  Shared property configuration for the Location model. `country` is required while `state` is optional.
  Optional properties are initialised with `null` as per v2 guidelines.
*/
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
