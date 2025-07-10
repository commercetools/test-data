import { fake, TModelFieldsConfig } from '@/core';
import { ReferenceDraftRest } from '@/models/commons';
import {
  TAttributeNestedTypeDraftGraphql,
  TAttributeNestedTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributenestedtype

export const restFieldsConfig: TModelFieldsConfig<TAttributeNestedTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'nested'),
      typeReference: fake(() =>
        ReferenceDraftRest.presets.productTypeReference()
      ),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeNestedTypeDraftGraphql> =
  {
    fields: {
      dummy: 'nested',
    },
  };
