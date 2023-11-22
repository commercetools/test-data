import type {
  BusinessUnit,
  Customer,
  CustomerGroup,
  Quote,
  QuoteDraft,
  QuoteRequest,
  StagedQuote,
  State,
  Store,
} from '@commercetools/platform-sdk';
import {
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

// Default
export type TQuote = Omit<
  Quote,
  | 'businessUnit'
  | 'customer'
  | 'customerGroup'
  | 'quoteRequest'
  | 'stagedQuote'
  | 'state'
  | 'store'
> & {
  businessUnit: BusinessUnit;
  customer: Customer;
  customerGroup: CustomerGroup;
  quoteRequest: QuoteRequest;
  stagedQuote: StagedQuote;
  state: State;
  store: Store;
};

// Rest
export type TQuoteRest = Quote;
export type TQuoteDraft = QuoteDraft;

export type TQuoteGraphql = TQuote & {
  businessUnitRef: TKeyReferenceGraphql | null;
  customerRef: TReferenceGraphql | null;
  customerGroupRef: TReferenceGraphql | null;
  quoteReqestRef: TReferenceGraphql;
  stagedQuoteRef: TReferenceGraphql;
  stateRef: TReferenceGraphql | null;
  storeRef: TKeyReferenceGraphql | null;
  __typename: 'Quote';
};
export type TQuoteDraftGraphql = TQuoteDraft;

export type TQuoteBuilder = TBuilder<TQuote>;
export type TQuoteDraftBuilder = TBuilder<TQuoteDraft>;
export type TCreateQuoteBuilder = () => TQuoteBuilder;
export type TCreateQuoteDraftBuilder = () => TQuoteDraftBuilder;
