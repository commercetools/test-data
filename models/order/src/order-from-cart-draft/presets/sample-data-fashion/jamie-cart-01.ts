import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const jamieCart01 = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(null!)
    .cart(KeyReference.random().key('jamie-01-cart').typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Shipped);

export default jamieCart01;
