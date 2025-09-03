import { CartScoreTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingRateCartScorePriceTier } from '@/graphql-types';

export type TCartScorePriceTierRest = CartScoreTier;
export type TCartScorePriceTierGraphql = TCtpShippingRateCartScorePriceTier;

export type TCartScorePriceTierBuilder<
  TModel extends TCartScorePriceTierRest | TCartScorePriceTierGraphql,
> = () => TBuilder<TModel>;
