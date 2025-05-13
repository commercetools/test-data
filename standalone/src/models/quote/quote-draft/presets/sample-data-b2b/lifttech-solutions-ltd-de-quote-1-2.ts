import { KeyReferenceDraft } from '@/models/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '@/models/staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const lifttechSolutionsLtdDeStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdDeStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const lifttechSolutionsLtdDeQuote12 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-de-quote-1-2')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(lifttechSolutionsLtdDeStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(false);
};

export default lifttechSolutionsLtdDeQuote12;
