import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdFrCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdFrCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Complete)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Delivered)
    .orderNumber('lifttech-solutions-ltd-fr-from-cart-2');

export default lifttechSolutionsLtdFrCartCart2;
