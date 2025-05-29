import { oneOf, TModelFieldsConfig } from '@/core';
import { attributeReferenceTypeId } from './constants';
import {
  TAttributeReferenceTypeGraphql,
  TAttributeReferenceTypeRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributereferencetype

const commonFieldsConfig = {
  name: 'reference',
  referenceTypeId: oneOf(...Object.values(attributeReferenceTypeId)),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeReferenceTypeRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeReferenceTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ReferenceAttributeDefinitionType',
    },
  };
