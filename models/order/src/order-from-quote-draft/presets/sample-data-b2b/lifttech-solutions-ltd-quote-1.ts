import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { QuoteDraft, type TQuoteDraft } from '@commercetools-test-data/quote';
import { constants } from '../../../index';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import * as OrderFromQuoteDraft from '../../index';

const quote = QuoteDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdQuote1(1)
  .build<TQuoteDraft>();

const lifttechSolutionsLtdQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  OrderFromQuoteDraft.presets
    .empty()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber(quote.key!)
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.CreditOwed)
    .shipmentState(constants.shipmentState.Shipped);

export default lifttechSolutionsLtdQuote1;
