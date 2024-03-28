import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdFrCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdFrCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Complete)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Delivered)
    .orderNumber('lifttech-solutions-ltd-fr-from-cart-2');

export default lifttechSolutionsLtdFrCartCart2;
