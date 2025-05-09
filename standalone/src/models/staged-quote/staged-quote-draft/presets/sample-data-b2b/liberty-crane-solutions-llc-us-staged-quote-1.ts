import { KeyReferenceDraft } from '../../../../commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '../../../../quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const libertyCraneSolutionsLlcUsQuoteRequest1QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .libertyCraneSolutionsLlcUsQuoteRequest1(1)
    .build<TQuoteRequestDraft>();

const libertyCraneSolutionsLlcUsStagedQuote1 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-staged-quote-1')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(libertyCraneSolutionsLlcUsQuoteRequest1QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(true);
};

export default libertyCraneSolutionsLlcUsStagedQuote1;
