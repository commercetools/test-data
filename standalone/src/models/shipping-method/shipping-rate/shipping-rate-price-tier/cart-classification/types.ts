import { CartClassificationTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TCartClassificationPriceTier = CartClassificationTier;

export type TCartClassificationPriceTierGraphql =
  TCartClassificationPriceTier & {
    __typename: 'CartClassificationPriceTier';
  };

export type TCartClassificationPriceTierBuilder =
  TBuilder<TCartClassificationPriceTier>;
export type TCartClassificationPriceTierDraftBuilder =
  TBuilder<TCartClassificationPriceTier>;

export type TCreateCartClassificationPriceTierBuilder =
  () => TCartClassificationPriceTierBuilder;
export type TCreateCartClassificationPriceTierDraftBuilder =
  () => TCartClassificationPriceTierDraftBuilder;
