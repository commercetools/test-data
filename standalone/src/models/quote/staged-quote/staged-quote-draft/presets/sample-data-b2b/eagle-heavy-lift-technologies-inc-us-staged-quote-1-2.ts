import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@/models/quote/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const eagleHeavyLiftTechnologiesIncUsQuoteRequest12QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .eagleHeavyLiftTechnologiesIncUsQuoteRequest12(1)
    .build<TQuoteRequestDraft>();

const eagleHeavyLiftTechnologiesIncUsStagedQuote12 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-staged-quote-1-2')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(eagleHeavyLiftTechnologiesIncUsQuoteRequest12QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(false);
};

export default eagleHeavyLiftTechnologiesIncUsStagedQuote12;
