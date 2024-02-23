import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@commercetools-test-data/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdDeQuoteRequest12QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdDeQuoteRequest12(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdDeStagedQuote12 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-de-staged-quote-1-2')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdDeQuoteRequest12QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(false);
};

export default lifttechSolutionsLtdDeStagedQuote12;
