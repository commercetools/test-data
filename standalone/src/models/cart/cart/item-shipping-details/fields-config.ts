import { fake, type TModelFieldsConfig } from '@/core';
import {
  ItemShippingTargetRest,
  ItemShippingTargetGraphql,
} from '../item-shipping-target';
import type {
  TItemShippingDetailsRest,
  TItemShippingDetailsGraphql,
} from './types';

const commonFieldsConfig = {
  valid: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TItemShippingDetailsRest> = {
  fields: {
    ...commonFieldsConfig,
    targets: fake(() => [ItemShippingTargetRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TItemShippingDetailsGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      targets: fake(() => [ItemShippingTargetGraphql.random()]),
      __typename: 'ItemShippingDetails',
    },
  };
