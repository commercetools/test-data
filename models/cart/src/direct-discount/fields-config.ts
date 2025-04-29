import { CartDiscountValueRelative } from '@commercetools-test-data/cart-discount';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
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
