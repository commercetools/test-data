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
  TReferenceRest,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomer } from '@commercetools-test-data/customer';
import { TCustomerGroup } from '@commercetools-test-data/customer-group';
import { TQuoteRequestRest } from '@commercetools-test-data/quote-request';
import { TStagedQuoteRest } from '@commercetools-test-data/staged-quote';
import { TState } from '@commercetools-test-data/state';

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
export type TQuoteRest = Omit<
  Quote,
  'customer' | 'customerGroup' | 'quoteRequest' | 'stagedQuote' | 'state'
> & {
  customer?: TReferenceRest<TCustomer>;
  customerGroup?: TReferenceRest<TCustomerGroup>;
  quoteRequest: TReferenceRest<TQuoteRequestRest>;
  stagedQuote: TReferenceRest<TStagedQuoteRest>;
  state?: TReferenceRest<TState>;
};
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
