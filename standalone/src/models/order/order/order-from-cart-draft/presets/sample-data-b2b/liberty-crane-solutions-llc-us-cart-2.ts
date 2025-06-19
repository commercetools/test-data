import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsCart2()
  .build<TCartDraft>();

const libertyCraneSolutionsLlcUsCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Ready)
    .orderNumber('liberty-crane-solutions-llc-us-from-cart-2');

export default libertyCraneSolutionsLlcUsCartCart2;
