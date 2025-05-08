import type { TaxRate, TaxRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TTaxRate = TaxRate;
export type TTaxRateDraft = TaxRateDraft;

export type TTaxRateGraphql = TTaxRate & {
  __typename: 'TaxRate';
};
export type TTaxRateDraftGraphql = TTaxRateDraft;

export type TTaxRateBuilder = TBuilder<TTaxRate>;
export type TTaxRateDraftBuilder = TBuilder<TTaxRateDraft>;
export type TCreateTaxRateBuilder = () => TTaxRateBuilder;
export type TCreateTaxRateDraftBuilder = () => TTaxRateDraftBuilder;
