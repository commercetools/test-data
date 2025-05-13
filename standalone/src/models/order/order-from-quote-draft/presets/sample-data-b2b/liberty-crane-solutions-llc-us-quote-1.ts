import { KeyReferenceDraft } from '@/models/commons';
import { QuoteDraft, type TQuoteDraft } from '@/models/quote';
import { constants } from '../../../index';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import * as OrderFromQuoteDraft from '../../index';

const quote = QuoteDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsQuote1(1)
  .build<TQuoteDraft>();

const libertyCraneSolutionsLlcUsQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  OrderFromQuoteDraft.presets
    .empty()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('liberty-crane-solutions-llc-us-from-quote-1')
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Ready);

export default libertyCraneSolutionsLlcUsQuote1;
