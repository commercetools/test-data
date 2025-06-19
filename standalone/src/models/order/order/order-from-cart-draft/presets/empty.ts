import type { TOrderFromCartDraftBuilder } from '../../types';
import OrderFromCartDraft from '../builder';

const empty = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft()
    .cart(undefined)
    .orderNumber(undefined)
    .purchaseOrderNumber(undefined)
    .paymentState(undefined)
    .orderState(undefined)
    .state(undefined)
    .shipmentState(undefined)
    .custom(undefined);

export default empty;
