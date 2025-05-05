import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import {
  TAttributeLocalizableTextTypeGraphql,
  TAttributeLocalizableTextTypeRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizabletexttype

const commonFieldsConfig = {
  name: fake(() => 'ltext'),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizableTextTypeRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizableTextTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'LocalizableTextAttributeDefinitionType',
    },
  };
