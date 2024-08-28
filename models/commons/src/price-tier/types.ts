import type { PriceTier, PriceTierDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TPriceTier = PriceTier;
export type TPriceTierDraft = PriceTierDraft;

export type TPriceTierGraphql = TPriceTier & {
  __typename: 'ProductPriceTier';
};
export type TPriceTierDraftGraphql = TPriceTierDraft;

export type TPriceTierBuilder = TBuilder<TPriceTier>;
export type TPriceTierDraftBuilder = TBuilder<TPriceTierDraft>;
export type TCreatePriceTierBuilder = () => TPriceTierBuilder;
export type TCreatePriceTierDraftBuilder = () => TPriceTierDraftBuilder;
