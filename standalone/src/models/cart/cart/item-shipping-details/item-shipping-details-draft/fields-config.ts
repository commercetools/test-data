import { fake, type TModelFieldsConfig } from '@/core';
import {
  ItemShippingTargetRest,
  ItemShippingTargetGraphql,
} from '../../item-shipping-target';
import type {
  TItemShippingDetailsDraftRest,
  TItemShippingDetailsDraftGraphql,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TItemShippingDetailsDraftRest> =
  {
    fields: {
      targets: fake(() => [ItemShippingTargetRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TItemShippingDetailsDraftGraphql> =
  {
    fields: {
      targets: fake(() => [ItemShippingTargetGraphql.random()]),
      itemShippingAddressTargets: null,
      shippingTargets: null,
    },
  };
