import { KeyReferenceDraft } from '@/models/commons';
import {
  QuoteRequestDraft,
  type TQuoteRequestDraft,
} from '@/models/quote-request';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraftBuilder,
} from '../../../index';

const eagleHeavyLiftTechnologiesIncUsQuoteRequest1QuoteRequest =
  QuoteRequestDraft.presets.sampleDataB2B
    .eagleHeavyLiftTechnologiesIncUsQuoteRequest1(1)
    .build<TQuoteRequestDraft>();

const eagleHeavyLiftTechnologiesIncUsStagedQuote1 = (
  quoteRequestVersion: number
): TStagedQuoteDraftBuilder => {
  return StagedQuoteDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-staged-quote-1')
    .quoteRequest(
      KeyReferenceDraft.presets
        .quoteRequest()
        .key(eagleHeavyLiftTechnologiesIncUsQuoteRequest1QuoteRequest.key!)
    )
    .quoteRequestVersion(quoteRequestVersion)
    .quoteRequestStateToAccepted(true);
};

export default eagleHeavyLiftTechnologiesIncUsStagedQuote1;
