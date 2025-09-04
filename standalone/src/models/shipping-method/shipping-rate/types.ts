import { ShippingRate } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingRate } from '@/graphql-types';

export type TShippingRateRest = ShippingRate;
export type TShippingRateGraphql = TCtpShippingRate;

export type TShippingRateBuilder<
  TModel extends TShippingRateRest | TShippingRateGraphql,
> = () => TBuilder<TModel>;
