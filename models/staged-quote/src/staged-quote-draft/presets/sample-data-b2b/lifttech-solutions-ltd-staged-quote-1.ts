import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@commercetools-test-data/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdQuoteRequest1QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdQuoteRequest1(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdStagedQuote1 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-staged-quote-1')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdQuoteRequest1QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(true);
};

export default lifttechSolutionsLtdStagedQuote1;
