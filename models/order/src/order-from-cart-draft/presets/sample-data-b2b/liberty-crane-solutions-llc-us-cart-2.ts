import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import type { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUsCart2()
  .build<TCartDraft>();

const libertyCraneSolutionsLlcUsCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Ready)
    .orderNumber('liberty-crane-solutions-llc-us-from-cart-2');

export default libertyCraneSolutionsLlcUsCartCart2;
