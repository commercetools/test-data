import { CartValueTier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TCartValuePriceTier = CartValueTier;

export type TCartValuePriceTierGraphql = TCartValuePriceTier & {
  __typename: 'CartValuePriceTier';
};

export type TCartValuePriceTierBuilder = TBuilder<TCartValuePriceTier>;
export type TCartValuePriceTierDraftBuilder = TBuilder<TCartValuePriceTier>;

export type TCreateCartValuePriceTierBuilder = () => TCartValuePriceTierBuilder;
export type TCreateCartValuePriceTierDraftBuilder =
  () => TCartValuePriceTierDraftBuilder;
