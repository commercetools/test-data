import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TAttributeBooleanTypeDraftGraphql,
  TAttributeBooleanTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributebooleantype

export const restFieldsConfig: TModelFieldsConfig<TAttributeBooleanTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'boolean'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeBooleanTypeDraftGraphql> =
  {
    fields: {
      dummy: null,
    },
  };
