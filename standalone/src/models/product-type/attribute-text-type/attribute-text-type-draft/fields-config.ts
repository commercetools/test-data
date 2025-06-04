import { fake, TModelFieldsConfig } from '@/core';
import {
  TAttributeTextTypeDraftGraphql,
  TAttributeTextTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributetexttype

export const restFieldsConfig: TModelFieldsConfig<TAttributeTextTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'text'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeTextTypeDraftGraphql> =
  {
    fields: {
      dummy: 'text',
    },
  };
