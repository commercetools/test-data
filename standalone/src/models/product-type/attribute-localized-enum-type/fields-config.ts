import { fake, TModelFieldsConfig } from '@/core';
import {
  AttributeLocalizedEnumValueGraphql,
  AttributeLocalizedEnumValueRest,
} from '../attribute-localized-enum-value';
import {
  TAttributeLocalizedEnumTypeGraphql,
  TAttributeLocalizedEnumTypeRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumtype

const commonFieldsConfig = {
  name: fake(() => 'lenum'),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumTypeRest> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => [AttributeLocalizedEnumValueRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => [AttributeLocalizedEnumValueGraphql.random()]),
      __typename: 'LocalizableEnumAttributeDefinitionType',
    },
  };
