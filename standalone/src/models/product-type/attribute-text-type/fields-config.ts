import { fake, TModelFieldsConfig } from '@/core';
import { TAttributeTextTypeGraphql, TAttributeTextTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributetexttype

const commonFieldsConfig = {
  name: fake(() => 'text'),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeTextTypeRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeTextTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'TextAttributeDefinitionType',
    },
  };
