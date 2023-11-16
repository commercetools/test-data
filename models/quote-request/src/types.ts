import type {
  QuoteRequest,
  QuoteRequestDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TQuoteRequest = QuoteRequest;
export type TQuoteRequestDraft = QuoteRequestDraft;

export type TQuoteGraphql = TQuoteRequest & {
  __typename: 'QuoteRequest';
};
export type TQuoteDraftGraphql = TQuoteRequestDraft;

export type TQuoteRequestBuilder = TBuilder<TQuoteRequest>;
export type TQuoteRequestDraftBuilder = TBuilder<TQuoteRequestDraft>;
export type TCreateQuoteRequestBuilder = () => TQuoteRequestBuilder;
export type TCreateQuoteRequestDraftBuilder = () => TQuoteRequestDraftBuilder;
