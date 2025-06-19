import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.CreditOwed)
    .shipmentState(constants.shipmentState.Shipped)
    .orderNumber('lifttech-solutions-ltd-from-cart-2');

export default lifttechSolutionsLtdCartCart2;
