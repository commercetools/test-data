import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdEsCart2()
  .build<TCartDraft>();

const lifttechSolutionsLtdEsCartCart2 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Cancelled)
    .paymentState(constants.paymentState.Failed)
    .shipmentState(constants.shipmentState.Pending);

export default lifttechSolutionsLtdEsCartCart2;