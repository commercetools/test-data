import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TAttributeDateTimeTypeDraftGraphql,
  TAttributeDateTimeTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetimetype

export const restFieldsConfig: TModelFieldsConfig<TAttributeDateTimeTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'datetime'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDateTimeTypeDraftGraphql> =
  {
    fields: {
      dummy: 'datetime',
    },
  };
