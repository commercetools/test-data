import { CartDraft } from '@/models/cart';
import type { TCartDraft } from '@/models/cart';
import { KeyReferenceDraft } from '@/models/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.CreditOwed)
    .shipmentState(constants.shipmentState.Shipped)
    .orderNumber('lifttech-solutions-ltd-from-cart-2');

export default lifttechSolutionsLtdCartCart2;
