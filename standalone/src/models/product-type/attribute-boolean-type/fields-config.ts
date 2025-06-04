import { TModelFieldsConfig } from '@/core';
import {
  TAttributeBooleanTypeGraphql,
  TAttributeBooleanTypeRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributebooleantype

const commonFieldsConfig = {
  name: 'boolean',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeBooleanTypeRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeBooleanTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'BooleanAttributeDefinitionType',
    },
  };
