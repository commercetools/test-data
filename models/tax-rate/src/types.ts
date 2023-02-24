import type { TBuilder } from '@commercetools-test-data/core';
import type { TaxRate, TaxRateDraft } from '@commercetools/platform-sdk';

export type TTaxRate = TaxRate;
export type TTaxRateDraft = TaxRateDraft;

export type TTaxRateGraphql = TTaxRate & {
  __typename: 'TaxRate';
};
export type TTaxRateDraftGraphql = TTaxRateDraft & {
  __typename: 'TaxRateDraft';
};

export type TTaxRateBuilder = TBuilder<TTaxRate>;
export type TTaxRateDraftBuilder = TBuilder<TTaxRateDraft>;
export type TCreateTaxRateBuilder = () => TTaxRateBuilder;
export type TCreateTaxRateDraftBuilder = () => TTaxRateDraftBuilder;
