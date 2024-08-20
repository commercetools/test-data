import type {
  BusinessUnit,
  Cart,
  Customer,
  StagedQuote,
  StagedQuoteDraft,
  State,
  QuoteRequest,
} from '@commercetools/platform-sdk';
import { TCart } from '@commercetools-test-data/cart';
import {
  TReferenceGraphql,
  TKeyReferenceGraphql,
  TReferenceRest,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomer } from '@commercetools-test-data/customer';
import { TQuoteRequestRest } from '@commercetools-test-data/quote-request';
import { TState } from '@commercetools-test-data/state';

// Default
export type TStagedQuote = Omit<
  StagedQuote,
  'businessUnit' | 'customer' | 'quotationCart' | 'quoteRequest' | 'state'
> & {
  businessUnit: BusinessUnit;
  customer: Customer;
  quotationCart: Cart;
  quoteRequest: QuoteRequest;
  state: State;
};

// Rest
export type TStagedQuoteRest = Omit<
  StagedQuote,
  'customer' | 'quoteRequest' | 'quoteRequest' | 'quotationCart' | 'state'
> & {
  customer?: TReferenceRest<TCustomer>;
  quotationCart: TReferenceRest<TCart>;
  quoteRequest: TReferenceRest<TQuoteRequestRest>;
  state?: TReferenceRest<TState>;
};
export type TStagedQuoteDraft = StagedQuoteDraft;

export type TStagedQuoteGraphql = TStagedQuote & {
  businessUnitRef: TKeyReferenceGraphql | null;
  customerRef: TReferenceGraphql | null;
  quotationCartRef: TReferenceGraphql;
  quoteRequestRef: TReferenceGraphql;
  stateRef: TReferenceGraphql | null;
  __typename: 'StagedQuote';
};
export type TStagedQuoteDraftGraphql = TStagedQuoteDraft;

export type TStagedQuoteBuilder = TBuilder<TStagedQuote>;
export type TStagedQuoteDraftBuilder = TBuilder<TStagedQuoteDraft>;
export type TCreateStagedQuoteBuilder = () => TStagedQuoteBuilder;
export type TCreateStagedQuoteDraftBuilder = () => TStagedQuoteDraftBuilder;
