import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { QuoteDraft, type TQuoteDraft } from '@commercetools-test-data/quote';
import { constants } from '../../../index';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import * as OrderFromQuoteDraft from '../../index';

const quote = QuoteDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdFrQuote1(1)
  .build<TQuoteDraft>();

const lifttechSolutionsLtdFrQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  OrderFromQuoteDraft.presets
    .empty()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('lifttech-solutions-ltd-fr-from-quote-1')
    .orderState(constants.orderState.Complete)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Delivered);

export default lifttechSolutionsLtdFrQuote1;
