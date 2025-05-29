import { fake, TModelFieldsConfig } from '@/core';
import { TAttributeTimeTypeGraphql, TAttributeTimeTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributetimetype

const commonFieldsConfig = {
  name: fake(() => 'time'),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeTimeTypeRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeTimeTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'TimeAttributeDefinitionType',
    },
  };
