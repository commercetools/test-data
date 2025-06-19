import { KeyReferenceDraft } from '@/models/commons';
import { QuoteDraft, type TQuoteDraft } from '@/models/quote/quote';
import * as constants from '../../../constants';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const quote = QuoteDraft.presets.sampleDataB2B
  .eagleHeavyLiftTechnologiesIncUsQuote1(1)
  .build<TQuoteDraft>();

const eagleHeavyLiftTechnologiesIncUsQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('eagle-heavy-lift-technologies-inc-us-from-quote-1')
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);

export default eagleHeavyLiftTechnologiesIncUsQuote1;
