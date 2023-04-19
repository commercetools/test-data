import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const johnCart01 = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(null!)
    .cart(KeyReference.random().key('john-01-cart').typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);

export default johnCart01;
