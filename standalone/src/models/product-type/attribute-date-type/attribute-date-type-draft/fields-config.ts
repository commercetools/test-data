import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TAttributeDateTypeDraftGraphql,
  TAttributeDateTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetype

export const restFieldsConfig: TModelFieldsConfig<TAttributeDateTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'date'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDateTypeDraftGraphql> =
  {
    fields: {
      dummy: 'date',
    },
  };
