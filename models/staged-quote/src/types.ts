import type {
  BusinessUnit,
  Cart,
  Customer,
  StagedQuote,
  StagedQuoteDraft,
  State,
  QuoteRequest,
} from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

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
export type TStagedQuoteRest = StagedQuote;
export type TStagedQuoteDraft = StagedQuoteDraft;

export type TStagedQuoteGraphql = TStagedQuote & {
  businessUnitRef: TReferenceGraphql | null;
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
