import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import type { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2CLifestyle
  .sebastianFranklin01()
  .build<TCartDraft>();

const sebastianFranklinCart01 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);

export default sebastianFranklinCart01;
