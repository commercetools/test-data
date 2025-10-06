import { CartValueTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingRateCartValuePriceTier } from '@/graphql-types';

export type TCartValuePriceTierRest = CartValueTier;
export type TCartValuePriceTierGraphql = TCtpShippingRateCartValuePriceTier;

export type TCreateCartValuePriceTierBuilder<
  TModel extends TCartValuePriceTierRest | TCartValuePriceTierGraphql,
> = () => TBuilder<TModel>;
