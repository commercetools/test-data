import { fake, type TModelFieldsConfig } from '@/core';
import { CartDiscountValueRelative } from '@/models/cart-discount';
import type { TDirectDiscountGraphql, TDirectDiscountRest } from './types';

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  value: fake(() => CartDiscountValueRelative.random()),
  target: null,
};

export const restFieldsConfig: TModelFieldsConfig<TDirectDiscountRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDirectDiscountGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'DirectDiscount',
  },
};
