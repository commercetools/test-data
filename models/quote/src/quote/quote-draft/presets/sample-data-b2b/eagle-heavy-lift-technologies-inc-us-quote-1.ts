import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '../../../../staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const eagleHeavyLiftTechnologiesIncUsStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .eagleHeavyLiftTechnologiesIncUsStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const eagleHeavyLiftTechnologiesIncUsQuote1 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-quote-1')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(eagleHeavyLiftTechnologiesIncUsStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(true);
};

export default eagleHeavyLiftTechnologiesIncUsQuote1;
