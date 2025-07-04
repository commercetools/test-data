import type { TaxRate, TaxRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpTaxRate, TCtpTaxRateDraft } from '@/graphql-types';

/**
 * @deprecated use `TCtpTaxRateRest` or `TCtpTaxRateGraphql` instead
 */
export type TTaxRate = TaxRate;
/**
 * @deprecated use `TCtpTaxRateDraftRest` or `TCtpTaxRateDraftGraphql` instead
 */
export type TTaxRateDraft = TaxRateDraft;

export type TTaxRateRest = TaxRate;
export type TTaxRateDraftRest = TaxRateDraft;

export type TTaxRateGraphql = TCtpTaxRate;
export type TTaxRateDraftGraphql = TCtpTaxRateDraft;

export type TCreateTaxRateBuilder<
  TTaxRateModel extends
    | TTaxRateRest
    | TTaxRateGraphql
    | TTaxRateDraftRest
    | TTaxRateDraftGraphql,
> = () => TBuilder<TTaxRateModel>;
