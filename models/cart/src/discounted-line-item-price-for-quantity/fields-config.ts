import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import {
  DiscountedLineItemPriceRest,
  DiscountedLineItemPriceGraphql,
} from '../index';
import type {
  TDiscountedLineItemPriceForQuantityGraphql,
  TDiscountedLineItemPriceForQuantityRest,
} from './types';

const commonFieldsConfig = {
  quantity: fake((f) => f.number.int()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceForQuantityRest> =
  {
    fields: {
      ...commonFieldsConfig,
      discountedPrice: fake(() => DiscountedLineItemPriceRest.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceForQuantityGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      discountedPrice: fake(() => DiscountedLineItemPriceGraphql.random()),
      __typename: 'DiscountedLineItemPriceForQuantity',
    },
  };
