import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import {
  DiscountedLineItemPortionGraphql,
  DiscountedLineItemPortionRest,
  Money,
} from '../index';
import type {
  TDiscountedLineItemPriceGraphql,
  TDiscountedLineItemPriceRest,
} from './types';

const commonFieldsConfig = {
  value: fake(() => Money.random()),
  includedDiscounts: [],
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceRest> =
  {
    fields: {
      ...commonFieldsConfig,
      includedDiscounts: fake(() => [DiscountedLineItemPortionRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      includedDiscounts: fake(() => [
        DiscountedLineItemPortionGraphql.random(),
      ]),
      __typename: 'DiscountedLineItemPrice',
    },
  };
