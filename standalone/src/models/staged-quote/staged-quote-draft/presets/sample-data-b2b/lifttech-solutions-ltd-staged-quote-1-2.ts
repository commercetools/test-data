import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@/models/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdQuoteRequest12QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdQuoteRequest12(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdStagedQuote12 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-staged-quote-1-2')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdQuoteRequest12QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(false);
};

export default lifttechSolutionsLtdStagedQuote12;
