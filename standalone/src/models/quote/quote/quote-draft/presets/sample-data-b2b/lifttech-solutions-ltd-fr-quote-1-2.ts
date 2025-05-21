import { KeyReferenceDraft } from '@/models/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '@/models/quote/staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const lifttechSolutionsLtdFrStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdFrStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const lifttechSolutionsLtdFrQuote12 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-quote-1-2')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(lifttechSolutionsLtdFrStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(false);
};

export default lifttechSolutionsLtdFrQuote12;
