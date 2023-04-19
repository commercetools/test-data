import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const johnCart02 = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(null!)
    .cart(KeyReference.random().key('john-02-cart').typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Delayed);

export default johnCart02;
