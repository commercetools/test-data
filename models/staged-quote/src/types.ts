import type {
  StagedQuote,
  StagedQuoteDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TStagedQuote = StagedQuote;
export type TStagedQuoteDraft = StagedQuoteDraft;

export type TStagedQuoteGraphql = TStagedQuote & {
  __typename: 'StagedQuote';
};
export type TStagedQuoteDraftGraphql = TStagedQuoteDraft;

export type TStagedQuoteBuilder = TBuilder<TStagedQuote>;
export type TStagedQuoteDraftBuilder = TBuilder<TStagedQuoteDraft>;
export type TCreateStagedQuoteBuilder = () => TStagedQuoteBuilder;
export type TCreateStagedQuoteDraftBuilder = () => TStagedQuoteDraftBuilder;
