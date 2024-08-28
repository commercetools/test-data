import type { Quote, QuoteDraft } from '@commercetools/platform-sdk';
import type {
  TCompanyGraphql,
  TDivisionGraphql,
} from '@commercetools-test-data/business-unit';
import type {
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCustomerGraphql } from '@commercetools-test-data/customer';
import type { TCustomerGroupGraphql } from '@commercetools-test-data/customer-group';
import type { TQuoteRequestGraphql } from '@commercetools-test-data/quote-request';
import type { TStagedQuoteGraphql } from '@commercetools-test-data/staged-quote';
import type { TStateGraphql } from '@commercetools-test-data/state';

// Default
export type TQuote = Quote;

// Rest
export type TQuoteRest = Quote;
export type TQuoteDraft = QuoteDraft;

export type TQuoteGraphql = Omit<
  TQuote,
  | 'businessUnit'
  | 'customer'
  | 'customerGroup'
  | 'quoteRequest'
  | 'stagedQuote'
  | 'state'
  | 'store'
> & {
  businessUnit?: TCompanyGraphql | TDivisionGraphql;
  businessUnitRef?: TKeyReferenceGraphql;
  customer?: TCustomerGraphql;
  customerRef?: TReferenceGraphql;
  customerGroup?: TCustomerGroupGraphql;
  customerGroupRef?: TReferenceGraphql;
  quoteRequest: TQuoteRequestGraphql;
  quoteRequestRef: TReferenceGraphql;
  stagedQuote: TStagedQuoteGraphql;
  stagedQuoteRef: TReferenceGraphql;
  state?: TStateGraphql;
  stateRef?: TReferenceGraphql;
  store?: TReferenceGraphql;
  storeRef?: TKeyReferenceGraphql;
  __typename: 'Quote';
};
export type TQuoteDraftGraphql = TQuoteDraft;

export type TQuoteBuilder = TBuilder<TQuote>;
export type TQuoteDraftBuilder = TBuilder<TQuoteDraft>;
export type TCreateQuoteBuilder = () => TQuoteBuilder;
export type TCreateQuoteDraftBuilder = () => TQuoteDraftBuilder;
