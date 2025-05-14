import { fake, TModelFieldsConfig } from '@/core';
import {
  AttributePlainEnumValueGraphql,
  AttributePlainEnumValueRest,
} from '../attribute-plain-enum-value';
import { TAttributeEnumTypeGraphql, TAttributeEnumTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#AttributeEnumType

const commonFieldsConfig = {
  name: 'enum',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeEnumTypeRest> = {
  fields: {
    ...commonFieldsConfig,
    values: fake(() => [AttributePlainEnumValueRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeEnumTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => ({
        results: [AttributePlainEnumValueGraphql.random().build()],
        total: 1,
        __typename: 'PlainEnumValueResult',
      })),
      __typename: 'EnumAttributeDefinitionType',
    },
    postBuild: (model, context) => {
      // When building a compatibility model with custom values, the values property
      // is an array of the items so we need to transform it to the GraphQL object shape
      if (context?.isCompatMode && Array.isArray(model.values)) {
        model.values = {
          results: model.values,
          total: model.values.length,
          __typename: 'PlainEnumValueResult',
        };
      }
      return model;
    },
  };
