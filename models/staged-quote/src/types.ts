import type {
  StagedQuote,
  StagedQuoteDraft,
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
import type { TQuoteRequestGraphql } from '@commercetools-test-data/quote-request';
import type { TStateGraphql } from '@commercetools-test-data/state';

// Default
export type TStagedQuote = StagedQuote;

// Rest
export type TStagedQuoteRest = StagedQuote;
export type TStagedQuoteDraft = StagedQuoteDraft;

export type TStagedQuoteGraphql = Omit<
  TStagedQuote,
  'businessUnit' | 'customer' | 'quotationCart' | 'quoteRequest' | 'state'
> & {
  businessUnit?: TCompanyGraphql | TDivisionGraphql;
  businessUnitRef?: TKeyReferenceGraphql;
  customer?: TCustomerGraphql;
  customerRef?: TReferenceGraphql;
  quotationCart: TCartGraphql;
  quotationCartRef: TReferenceGraphql;
  quoteRequest: TQuoteRequestGraphql;
  quoteRequestRef: TReferenceGraphql;
  state?: TStateGraphql;
  stateRef?: TReferenceGraphql | null;
  __typename: 'StagedQuote';
};
export type TStagedQuoteDraftGraphql = TStagedQuoteDraft;

export type TStagedQuoteBuilder = TBuilder<TStagedQuote>;
export type TStagedQuoteDraftBuilder = TBuilder<TStagedQuoteDraft>;
export type TCreateStagedQuoteBuilder = () => TStagedQuoteBuilder;
export type TCreateStagedQuoteDraftBuilder = () => TStagedQuoteDraftBuilder;
