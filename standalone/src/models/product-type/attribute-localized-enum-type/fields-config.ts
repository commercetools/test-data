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
      values: fake(() => ({
        results: [AttributeLocalizedEnumValueGraphql.random().build()],
        total: 1,
        __typename: 'LocalizableEnumValueTypeResult',
      })),
      __typename: 'LocalizableEnumAttributeDefinitionType',
    },
    postBuild: (model, context) => {
      // When building a compatibility model with custom values, the values property
      // is an array of the items so we need to transform it to the GraphQL object shape
      if (context?.isCompatMode && Array.isArray(model.values)) {
        model.values = {
          results: model.values,
          total: model.values.length,
          __typename: 'LocalizableEnumValueTypeResult',
        };
      }
      return model;
    },
  };
