import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@/models/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdEsQuoteRequest12QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdEsQuoteRequest12(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdEsStagedQuote12 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es-staged-quote-1-2')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdEsQuoteRequest12QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(false);
};

export default lifttechSolutionsLtdEsStagedQuote12;
