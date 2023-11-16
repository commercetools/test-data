import type { Quote, QuoteDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TQuote = Quote;
export type TQuoteDraft = QuoteDraft;

export type TQuoteGraphql = TQuote & {
  __typename: 'Quote';
};
export type TQuoteDraftGraphql = TQuoteDraft;

export type TQuoteBuilder = TBuilder<TQuote>;
export type TQuoteDraftBuilder = TBuilder<TQuoteDraft>;
export type TCreateQuoteBuilder = () => TQuoteBuilder;
export type TCreateQuoteDraftBuilder = () => TQuoteDraftBuilder;
