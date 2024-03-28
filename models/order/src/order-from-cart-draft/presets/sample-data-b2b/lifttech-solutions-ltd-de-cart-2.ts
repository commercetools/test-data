import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdDeCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdDeCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.BalanceDue)
    .shipmentState(constants.shipmentState.Backorder)
    .orderNumber('lifttech-solutions-ltd-de-from-cart-2');

export default lifttechSolutionsLtdDeCartCart2;
