import { oneOf, TModelFieldsConfig } from '@/core';
import {
  TAttributeReferenceTypeDraftGraphql,
  TAttributeReferenceTypeDraftRest,
} from '@/models/product-type/attribute-reference-type/types';
import { attributeReferenceTypeId } from '../../attribute-reference-type/constants';

// https://docs.commercetools.com/api/projects/productTypes#attributereferencetype

const commonFieldsConfig = {
  referenceTypeId: oneOf(...Object.values(attributeReferenceTypeId)),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeReferenceTypeDraftRest> =
  {
    fields: {
      name: 'reference',
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeReferenceTypeDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
