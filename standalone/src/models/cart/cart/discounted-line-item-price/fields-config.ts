import { fake, type TModelFieldsConfig } from '@/core';
import { MoneyGraphql, MoneyRest } from '@/models/commons';
import {
  DiscountedLineItemPortionRest,
  DiscountedLineItemPortionGraphql,
} from '../index';
import type {
  TDiscountedLineItemPriceGraphql,
  TDiscountedLineItemPriceRest,
} from './types';

export const restFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceRest> =
  {
    fields: {
      value: fake(() => MoneyRest.random()),
      includedDiscounts: fake(() => [DiscountedLineItemPortionRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceGraphql> =
  {
    fields: {
      value: fake(() => MoneyGraphql.random()),
      includedDiscounts: fake(() => [
        DiscountedLineItemPortionGraphql.random(),
      ]),
      __typename: 'DiscountedLineItemPrice',
    },
  };
