import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  StagedQuoteDraft,
  type TStagedQuoteDraft,
} from '../../../../staged-quote';
import { QuoteDraft, type TQuoteDraftBuilder } from '../../../index';

const lifttechSolutionsLtdEsStagedQuote1StagedQuote =
  StagedQuoteDraft.presets.sampleDataB2B
    .lifttechSolutionsLtdEsStagedQuote1(1)
    .build<TStagedQuoteDraft>();

const lifttechSolutionsLtdEsQuote12 = (
  stagedQuoteVersion: number
): TQuoteDraftBuilder => {
  return QuoteDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es-quote-1-2')
    .stagedQuote(
      KeyReferenceDraft.presets
        .stagedQuote()
        .key(lifttechSolutionsLtdEsStagedQuote1StagedQuote.key!)
    )
    .stagedQuoteVersion(stagedQuoteVersion)
    .stagedQuoteStateToSent(false);
};

export default lifttechSolutionsLtdEsQuote12;
