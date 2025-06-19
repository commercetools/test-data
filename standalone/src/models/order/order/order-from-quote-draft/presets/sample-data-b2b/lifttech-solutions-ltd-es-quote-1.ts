import { KeyReferenceDraft } from '@/models/commons';
import { QuoteDraft, type TQuoteDraft } from '@/models/quote/quote';
import * as constants from '../../../constants';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const quote = QuoteDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdEsQuote1(1)
  .build<TQuoteDraft>();

const lifttechSolutionsLtdEsQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('lifttech-solutions-ltd-es-from-quote-1')
    .orderState(constants.orderState.Cancelled)
    .paymentState(constants.paymentState.Failed)
    .shipmentState(constants.shipmentState.Pending);

export default lifttechSolutionsLtdEsQuote1;
