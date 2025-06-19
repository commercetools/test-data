import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TItemShippingTargetRest,
  TItemShippingTargetGraphql,
} from './types';

const commonFieldsConfig = {
  addressKey: fake((f) => f.lorem.slug(2)),
  quantity: fake((f) => f.number.int({ min: 1 })),
  shippingMethodKey: null,
};

export const restFieldsConfig: TModelFieldsConfig<TItemShippingTargetRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TItemShippingTargetGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ItemShippingTarget',
    },
  };
