import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
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
      dummy: null,
    },
  };
