import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdEsCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdEsCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Cancelled)
    .paymentState(constants.paymentState.Failed)
    .shipmentState(constants.shipmentState.Pending)
    .orderNumber('lifttech-solutions-ltd-es-from-cart-2');

export default lifttechSolutionsLtdEsCartCart2;
