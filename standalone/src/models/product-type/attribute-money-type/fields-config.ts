import { fake, TModelFieldsConfig } from '@/core';
import { TAttributeMoneyTypeGraphql, TAttributeMoneyTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributemoneytype

const commonFieldsConfig = {
  name: fake(() => 'money'),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeMoneyTypeRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeMoneyTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'MoneyAttributeDefinitionType',
    },
  };
