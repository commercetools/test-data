import { KeyReferenceDraft } from '@/models/commons';
import { QuoteDraft, type TQuoteDraft } from '@/models/quote/quote';
import { constants } from '../../../index';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import * as OrderFromQuoteDraft from '../../index';

const quote = QuoteDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdDeQuote1(1)
  .build<TQuoteDraft>();

const lifttechSolutionsLtdDeQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  OrderFromQuoteDraft.presets
    .empty()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('lifttech-solutions-ltd-de-from-quote-1')
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.BalanceDue)
    .shipmentState(constants.shipmentState.Backorder);

export default lifttechSolutionsLtdDeQuote1;
