import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { QuoteDraft, type TQuoteDraft } from '@commercetools-test-data/quote';
import { constants } from '../../../index';
import type { TOrderFromQuoteDraftBuilder } from '../../../types';
import * as OrderFromQuoteDraft from '../../index';

const quote = QuoteDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdEsQuote1(1)
  .build<TQuoteDraft>();

const lifttechSolutionsLtdEsQuote1 = (
  versionNumber: number
): TOrderFromQuoteDraftBuilder =>
  OrderFromQuoteDraft.presets
    .empty()
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber(quote.key!)
    .orderState(constants.orderState.Cancelled)
    .paymentState(constants.paymentState.Failed)
    .shipmentState(constants.shipmentState.Pending);

export default lifttechSolutionsLtdEsQuote1;
