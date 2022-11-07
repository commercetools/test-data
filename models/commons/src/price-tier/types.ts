import type { PriceTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPriceTier = PriceTier;

export type TPriceTierGraphql = PriceTier & {
  __typename: 'ProductPriceTier';
};

export type TPriceTierBuilder = TBuilder<TPriceTier>;
export type TCreatePriceTierBuilder = () => TBuilder<TPriceTier>;
