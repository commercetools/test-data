import { fake, TModelFieldsConfig } from '@/core';
import {
  AttributeBooleanTypeGraphql,
  AttributeBooleanTypeRest,
} from '../attribute-boolean-type';
import { TAttributeSetTypeGraphql, TAttributeSetTypeRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

const commonFieldsConfig = {
  name: 'set',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeSetTypeRest> = {
  fields: {
    ...commonFieldsConfig,
    elementType: fake(() => AttributeBooleanTypeRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeSetTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      elementType: fake(() => AttributeBooleanTypeGraphql.random()),
      __typename: 'SetAttributeDefinitionType',
    },
  };
