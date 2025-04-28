import { Money } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
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
      value: fake(() => Money.random()),
      includedDiscounts: fake(() => [DiscountedLineItemPortionRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedLineItemPriceGraphql> =
  {
    fields: {
      value: fake(() => Money.random()),
      includedDiscounts: fake(() => [
        DiscountedLineItemPortionGraphql.random(),
      ]),
      __typename: 'DiscountedLineItemPrice',
    },
  };
