import type {
  BusinessUnit,
  Cart,
  Customer,
  CustomerGroup,
  State,
  Store,
  QuoteRequest,
  QuoteRequestDraft,
} from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TQuoteRequest = Omit<
  QuoteRequest,
  'customer' | 'customerGroup' | 'store' | 'state' | 'cart' | 'businessUnit'
> & {
  customer: Customer;
  customerGroup: CustomerGroup;
  store: Store;
  state: State;
  cart: Cart;
  businessUnit: BusinessUnit;
};
export type TQuoteRequestDraft = QuoteRequestDraft;

export type TQuoteRequestGraphql = TQuoteRequest & {
  customerRef: TReferenceGraphql | null;
  customerGroupRef: TReferenceGraphql | null;
  storeRef: TReferenceGraphql | null;
  stateRef: TReferenceGraphql | null;
  cartRef: TReferenceGraphql | null;
  businessUnitRef: TReferenceGraphql | null;
  __typename: 'QuoteRequest';
};
export type TQuoteRequestDraftGraphql = TQuoteRequestDraft;

export type TQuoteRequestBuilder = TBuilder<TQuoteRequest>;
export type TQuoteRequestDraftBuilder = TBuilder<TQuoteRequestDraft>;
export type TCreateQuoteRequestBuilder = () => TQuoteRequestBuilder;
export type TCreateQuoteRequestDraftBuilder = () => TQuoteRequestDraftBuilder;
