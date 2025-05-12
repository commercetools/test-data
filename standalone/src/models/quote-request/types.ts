import type {
  BusinessUnit,
  Customer,
  CustomerGroup,
  State,
  Store,
  QuoteRequest,
  QuoteRequestDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';
import {
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '../commons';

// Default
export type TQuoteRequest = Omit<
  QuoteRequest,
  'customer' | 'customerGroup' | 'store' | 'state' | 'businessUnit'
> & {
  customer: Customer;
  customerGroup: CustomerGroup;
  store: Store;
  state: State;
  businessUnit: BusinessUnit;
};

// Rest
export type TQuoteRequestRest = QuoteRequest;
export type TQuoteRequestDraft = QuoteRequestDraft;

export type TQuoteRequestGraphql = TQuoteRequest & {
  customerRef: TReferenceGraphql | null;
  customerGroupRef: TReferenceGraphql | null;
  storeRef: TKeyReferenceGraphql | null;
  stateRef: TReferenceGraphql | null;
  cartRef: TReferenceGraphql | null;
  businessUnitRef: TKeyReferenceGraphql | null;
  __typename: 'QuoteRequest';
};
export type TQuoteRequestDraftGraphql = TQuoteRequestDraft;

export type TQuoteRequestBuilder = TBuilder<TQuoteRequest>;
export type TQuoteRequestDraftBuilder = TBuilder<TQuoteRequestDraft>;
export type TCreateQuoteRequestBuilder = () => TQuoteRequestBuilder;
export type TCreateQuoteRequestDraftBuilder = () => TQuoteRequestDraftBuilder;
