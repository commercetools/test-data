import type {
  BusinessUnit,
  Customer,
  CustomerGroup,
  State,
  Store,
  QuoteRequest,
  QuoteRequestDraft,
} from '@commercetools/platform-sdk';
import { TCart } from '@commercetools-test-data/cart';
import {
  TReferenceGraphql,
  TKeyReferenceGraphql,
  TReferenceRest,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomer } from '@commercetools-test-data/customer';
import { TCustomerGroup } from '@commercetools-test-data/customer-group';
import { TState } from '@commercetools-test-data/state';

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
export type TQuoteRequestRest = Omit<
  QuoteRequest,
  'cart' | 'customer' | 'customerGroup' | 'state'
> & {
  cart?: TReferenceRest<TCart>;
  customer: TReferenceRest<TCustomer>;
  customerGroup?: TReferenceRest<TCustomerGroup>;
  state?: TReferenceRest<TState>;
};
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
