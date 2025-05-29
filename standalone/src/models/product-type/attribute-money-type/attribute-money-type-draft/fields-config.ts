import { fake, TModelFieldsConfig } from '@/core';
import {
  TAttributeMoneyTypeDraftGraphql,
  TAttributeMoneyTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributemoneytype

export const restFieldsConfig: TModelFieldsConfig<TAttributeMoneyTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'money'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeMoneyTypeDraftGraphql> =
  {
    fields: {
      dummy: 'money',
    },
  };
