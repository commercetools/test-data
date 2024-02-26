import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@commercetools-test-data/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdFrQuoteRequest1QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdFrQuoteRequest1(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdFrStagedQuote1 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-staged-quote-1')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdFrQuoteRequest1QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(true);
};

export default lifttechSolutionsLtdFrStagedQuote1;
