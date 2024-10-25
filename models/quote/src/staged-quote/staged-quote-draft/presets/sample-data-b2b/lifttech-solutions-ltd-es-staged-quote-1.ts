import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '../../../../quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdEsQuoteRequest1QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdEsQuoteRequest1(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdEsStagedQuote1 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es-staged-quote-1')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdEsQuoteRequest1QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(true);
};

export default lifttechSolutionsLtdEsStagedQuote1;
