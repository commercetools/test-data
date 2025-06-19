import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataB2B
  .eagleHeavyLiftTechnologiesIncUsCart2()
  .build<TCartDraft>();

const eagleHeavyLiftTechnologiesIncUsCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending)
    .orderNumber('eagle-heavy-lift-technologies-inc-us-from-cart-2');

export default eagleHeavyLiftTechnologiesIncUsCartCart2;
