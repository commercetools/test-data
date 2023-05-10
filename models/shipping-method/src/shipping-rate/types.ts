import { ShippingRate, ShippingRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TShippingRate = ShippingRate;
export type TShippingRateDraft = ShippingRateDraft;

export type TShippingRateGraphql = TShippingRate & {
  __typename: 'ShippingRate';
};
export type TShippingRateDraftGraphql = TShippingRateDraft & {
  __typename: 'ShippingRateInput';
};

export type TShippingRateBuilder = TBuilder<TShippingRate>;
export type TShippingRateDraftBuilder = TBuilder<TShippingRateDraft>;

export type TCreateShippingRateBuilder = () => TShippingRateBuilder;
export type TCreateShippingRateDraftBuilder = () => TShippingRateDraftBuilder;
