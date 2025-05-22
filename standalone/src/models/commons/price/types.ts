import type { Price, PriceDraft, Reference } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpProductPrice, TCtpProductPriceDataInput } from '@/graphql-types';

export type TPrice = Price & {
  // @TODO: remove this once the recurrencePolicyRef is available in the SDK
  recurrencePolicyRef: Reference | null;
};
export type TPriceDraft = PriceDraft & {
  // @TODO: remove this once the recurrencePolicyRef is available in the SDK
  recurrencePolicyRef: Reference | null;
};

export type TPriceGraphql = TCtpProductPrice;
export type TPriceDraftGraphql = TCtpProductPriceDataInput;

export type TPriceBuilder = TBuilder<Price>;
export type TPriceDraftBuilder = TBuilder<PriceDraft>;
export type TCreatePriceBuilder = () => TPriceBuilder;
export type TCreatePriceDraftBuilder = () => TPriceDraftBuilder;
