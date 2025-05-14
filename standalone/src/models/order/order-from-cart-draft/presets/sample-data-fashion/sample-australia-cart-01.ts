import { CartDraft } from '../../../../cart';
import type { TCartDraft } from '../../../../cart';
import { KeyReferenceDraft } from '../../../../commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataFashion
  .sampleAustralia01()
  .build<TCartDraft>();

const sampleAustraliaCart01 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);

export default sampleAustraliaCart01;
