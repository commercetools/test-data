import { CartDraft } from '../../../../../cart';
import type { TCartDraft } from '../../../../../cart';
import { KeyReferenceDraft } from '../../../../commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataB2CLifestyle
  .jenniferJones01()
  .build<TCartDraft>();

const jenniferJonesCart01 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Pending);

export default jenniferJonesCart01;
