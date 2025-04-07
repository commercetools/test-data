import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '@commercetools-test-data/staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const eagleHeavyLiftTechnologiesIncUsStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .eagleHeavyLiftTechnologiesIncUsStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const eagleHeavyLiftTechnologiesIncUsQuote12 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-quote-1-2')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(eagleHeavyLiftTechnologiesIncUsStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(false);
};

export default eagleHeavyLiftTechnologiesIncUsQuote12;
