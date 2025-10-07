import { CartClassificationTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingRateCartClassificationPriceTier } from '@/graphql-types';

export type TCartClassificationPriceTierRest = CartClassificationTier;
export type TCartClassificationPriceTierGraphql =
  TCtpShippingRateCartClassificationPriceTier;

export type TCreateCartClassificationPriceTierBuilder<
  TModel extends
    | TCartClassificationPriceTierRest
    | TCartClassificationPriceTierGraphql,
> = () => TBuilder<TModel>;
