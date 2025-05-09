import { KeyReferenceDraft } from '../../../../commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '../../../../quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const libertyCraneSolutionsLlcUsQuoteRequest12QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .libertyCraneSolutionsLlcUsQuoteRequest12(1)
    .build<TQuoteRequestDraft>();

const libertyCraneSolutionsLlcUsStagedQuote12 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-staged-quote-1-2')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(libertyCraneSolutionsLlcUsQuoteRequest12QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(false);
};

export default libertyCraneSolutionsLlcUsStagedQuote12;
