import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '../../../../staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const lifttechSolutionsLtdStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const lifttechSolutionsLtdQuote1 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-quote-1')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(lifttechSolutionsLtdStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(true);
};

export default lifttechSolutionsLtdQuote1;
