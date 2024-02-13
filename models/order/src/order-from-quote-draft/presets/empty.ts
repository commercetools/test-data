import type { TOrderFromQuoteDraftBuilder } from '../../types';
import OrderFromQuoteDraft from '../builder';

const empty = (): TOrderFromQuoteDraftBuilder =>
  OrderFromQuoteDraft()
    .quoteStateToAccepted(undefined)
    .orderNumber(undefined)
    .paymentState(undefined)
    .shipmentState(undefined)
    .orderState(undefined)
    .state(undefined);

export default empty;
