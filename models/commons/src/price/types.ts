import type { Price, PriceDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TMoneyGraphql } from '../money';

export type TPrice = Price;
export type TPriceDraft = PriceDraft;

export type TPriceGraphql = TPrice & {
  __typename: 'ProductPrice';
};
export type TPriceDraftGraphql = Omit<TPriceDraft, 'value'> & {
  value: {
    centPrecision: TMoneyGraphql;
  };
};

export type TPriceBuilder = TBuilder<Price>;
export type TPriceDraftBuilder = TBuilder<PriceDraft>;
export type TCreatePriceBuilder = () => TPriceBuilder;
export type TCreatePriceDraftBuilder = () => TPriceDraftBuilder;
