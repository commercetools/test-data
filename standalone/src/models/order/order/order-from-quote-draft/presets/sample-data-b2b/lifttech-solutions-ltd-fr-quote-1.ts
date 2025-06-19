import { KeyReferenceDraft } from '@/models/commons';
import { QuoteDraft, type TQuoteDraft } from '@/models/quote/quote';
import * as constants from '../../../constants';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const quote = QuoteDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdFrQuote1(1)
  .build<TQuoteDraft>();

const lifttechSolutionsLtdFrQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('lifttech-solutions-ltd-fr-from-quote-1')
    .orderState(constants.orderState.Complete)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Delivered);

export default lifttechSolutionsLtdFrQuote1;
