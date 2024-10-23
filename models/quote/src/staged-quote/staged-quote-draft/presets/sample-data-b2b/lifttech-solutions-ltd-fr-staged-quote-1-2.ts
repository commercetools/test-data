import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '../../../../quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const lifttechSolutionsLtdFrQuoteRequest12QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdFrQuoteRequest12(1)
    .build<TQuoteRequestDraft>();

const lifttechSolutionsLtdFrStagedQuote12 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-staged-quote-1-2')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(lifttechSolutionsLtdFrQuoteRequest12QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(false);
};

export default lifttechSolutionsLtdFrStagedQuote12;
