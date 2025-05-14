import { TModelFieldsConfig } from '@/core';
import { TAttributeDateTypeGraphql, TAttributeDateTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetype

const commonFieldsConfig = {
  name: 'date',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeDateTypeRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDateTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'DateAttributeDefinitionType',
    },
  };
