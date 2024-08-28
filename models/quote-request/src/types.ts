import type {
  QuoteRequest,
  QuoteRequestDraft,
} from '@commercetools/platform-sdk';
import type {
  TCompanyGraphql,
  TDivisionGraphql,
} from '@commercetools-test-data/business-unit';
import type { TCartGraphql } from '@commercetools-test-data/cart';
import type {
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCustomerGraphql } from '@commercetools-test-data/customer';
import type { TCustomerGroupGraphql } from '@commercetools-test-data/customer-group';
import type { TStateGraphql } from '@commercetools-test-data/state';
import type { TStoreGraphql } from '@commercetools-test-data/store';

// Default
export type TQuoteRequest = QuoteRequest;

// Rest
export type TQuoteRequestRest = QuoteRequest;
export type TQuoteRequestDraft = QuoteRequestDraft;

export type TQuoteRequestGraphql = Omit<
  TQuoteRequest,
  'cart' | 'businessUnit' | 'customer' | 'customerGroup' | 'state' | 'store'
> & {
  businessUnit?: TCompanyGraphql | TDivisionGraphql;
  businessUnitRef?: TKeyReferenceGraphql | null;
  cart?: TCartGraphql;
  cartRef?: TReferenceGraphql;
  customer: TCustomerGraphql;
  customerRef: TReferenceGraphql;
  customerGroup?: TCustomerGroupGraphql;
  customerGroupRef?: TReferenceGraphql;
  state?: TStateGraphql;
  stateRef?: TReferenceGraphql;
  store?: TStoreGraphql;
  storeRef?: TKeyReferenceGraphql;
  __typename: 'QuoteRequest';
};

export type TQuoteRequestDraftGraphql = TQuoteRequestDraft;

export type TQuoteRequestBuilder = TBuilder<TQuoteRequest>;
export type TQuoteRequestDraftBuilder = TBuilder<TQuoteRequestDraft>;
export type TCreateQuoteRequestBuilder = () => TQuoteRequestBuilder;
export type TCreateQuoteRequestDraftBuilder = () => TQuoteRequestDraftBuilder;
