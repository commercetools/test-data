import { KeyReferenceDraft } from '@/models/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '@/models/staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const libertyCraneSolutionsLlcUsStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .libertyCraneSolutionsLlcUsStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const libertyCraneSolutionsLlcUsQuote12 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-quote-1-2')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(libertyCraneSolutionsLlcUsStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(false);
};

export default libertyCraneSolutionsLlcUsQuote12;
