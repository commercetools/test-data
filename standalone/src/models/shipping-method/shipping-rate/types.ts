import { ShippingRate } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingRate } from '@/graphql-types';

/**
 * @deprecated use `TShippingRateRest` or `TShippingRateGraphql` instead
 */
export type TShippingRate = ShippingRate;

export type TShippingRateRest = ShippingRate;

export type TShippingRateGraphql = TCtpShippingRate;

export type TShippingRateBuilder<
  TModel extends TShippingRateRest | TShippingRateGraphql,
> = () => TBuilder<TModel>;
