import { CartDraft, type TCartDraft } from '../../../../../cart';
import { KeyReferenceDraft } from '../../../../commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2B
  .eagleHeavyLiftTechnologiesIncUsCart2()
  .build<TCartDraft>();

const eagleHeavyLiftTechnologiesIncUsCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending)
    .orderNumber('eagle-heavy-lift-technologies-inc-us-from-cart-2');

export default eagleHeavyLiftTechnologiesIncUsCartCart2;
