import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '../../../../staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const lifttechSolutionsLtdFrStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdFrStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const lifttechSolutionsLtdFrQuote1 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-quote-1')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(lifttechSolutionsLtdFrStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(true);
};

export default lifttechSolutionsLtdFrQuote1;
