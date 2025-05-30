import { fake, TModelFieldsConfig } from '@/core';
import {
  TAttributeTimeTypeDraftGraphql,
  TAttributeTimeTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributetimetype

export const restFieldsConfig: TModelFieldsConfig<TAttributeTimeTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'time'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeTimeTypeDraftGraphql> =
  {
    fields: {
      dummy: 'time',
    },
  };
