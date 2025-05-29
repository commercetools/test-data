import { fake, TModelFieldsConfig } from '@/core';
import {
  AttributeBooleanTypeDraftGraphql,
  AttributeBooleanTypeDraftRest,
} from '../../attribute-boolean-type/attribute-boolean-type-draft';
import {
  TAttributeSetTypeDraftGraphql,
  TAttributeSetTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

export const restFieldsConfig: TModelFieldsConfig<TAttributeSetTypeDraftRest> =
  {
    fields: {
      name: 'set',
      elementType: fake(() => AttributeBooleanTypeDraftRest.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeSetTypeDraftGraphql> =
  {
    fields: {
      elementType: fake(() => AttributeBooleanTypeDraftGraphql.random()),
    },
  };
