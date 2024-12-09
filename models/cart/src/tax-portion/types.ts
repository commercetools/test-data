import { TaxPortion, TaxPortionDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpTaxPortion,
  TCtpTaxPortionDraft,
} from '@commercetools-test-data/graphql-types';

export type TTaxPortionRest = TaxPortion;

export type TTaxPortionGraphql = TCtpTaxPortion;

export type TTaxPortionDraftRest = TaxPortionDraft;
export type TTaxPortionDraftGraphql = TCtpTaxPortionDraft;

export type TCreateTaxPortionBuilder<
  TModel extends
    | TTaxPortionRest
    | TTaxPortionGraphql
    | TTaxPortionDraftRest
    | TTaxPortionDraftGraphql,
> = () => TBuilder<TModel>;
