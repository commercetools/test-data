import { CartScoreTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TCartScorePriceTier = CartScoreTier;

export type TCartScorePriceTierGraphql = TCartScorePriceTier & {
  __typename: 'CartScorePriceTier';
};

export type TCartScorePriceTierBuilder = TBuilder<TCartScorePriceTier>;
export type TCartScorePriceTierDraftBuilder = TBuilder<TCartScorePriceTier>;

export type TCreateCartScorePriceTierBuilder = () => TCartScorePriceTierBuilder;
export type TCreateCartScorePriceTierDraftBuilder =
  () => TCartScorePriceTierDraftBuilder;
