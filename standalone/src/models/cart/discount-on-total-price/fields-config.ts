import { fake, type TModelFieldsConfig } from '../../../core';
import { Money } from '../../commons';
import {
  DiscountedTotalPricePortionRest,
  DiscountedTotalPricePortionGraphql,
} from '../index';
import type {
  TDiscountOnTotalPriceGraphql,
  TDiscountOnTotalPriceRest,
} from './types';

const commonFieldsConfig = {
  discountedAmount: fake(() => Money.random()),
  discountedNetAmount: null,
  discountedGrossAmount: null,
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountOnTotalPriceRest> = {
  fields: {
    ...commonFieldsConfig,
    includedDiscounts: fake(() => [DiscountedTotalPricePortionRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountOnTotalPriceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      includedDiscounts: fake(() => [
        DiscountedTotalPricePortionGraphql.random(),
      ]),
      __typename: 'DiscountOnTotalPrice',
    },
  };
