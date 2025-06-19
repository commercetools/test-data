import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdDeCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdDeCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.BalanceDue)
    .shipmentState(constants.shipmentState.Backorder)
    .orderNumber('lifttech-solutions-ltd-de-from-cart-2');

export default lifttechSolutionsLtdDeCartCart2;
