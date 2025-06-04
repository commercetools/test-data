import { fake, TModelFieldsConfig } from '@/core';
import { TAttributeNumberTypeGraphql, TAttributeNumberTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributenumbertype

const commonFieldsConfig = {
  name: fake(() => 'number'),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeNumberTypeRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeNumberTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'NumberAttributeDefinitionType',
    },
  };
