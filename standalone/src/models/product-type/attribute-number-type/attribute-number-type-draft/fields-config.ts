import { fake, TModelFieldsConfig } from '@/core';
import {
  TAttributeNumberTypeDraftGraphql,
  TAttributeNumberTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributenumbertype

export const restFieldsConfig: TModelFieldsConfig<TAttributeNumberTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'number'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeNumberTypeDraftGraphql> =
  {
    fields: {
      dummy: null,
    },
  };
