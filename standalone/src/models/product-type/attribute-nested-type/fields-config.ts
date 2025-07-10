import { fake, TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { TAttributeNestedTypeGraphql, TAttributeNestedTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributenestedtype

const commonFieldsConfig = {
  name: 'nested',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeNestedTypeRest> = {
  fields: {
    ...commonFieldsConfig,
    typeReference: fake(() => ReferenceRest.presets.productTypeReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeNestedTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      typeRef: fake(() => ReferenceGraphql.presets.productTypeReference()),
      __typename: 'NestedAttributeDefinitionType',
    },
  };
