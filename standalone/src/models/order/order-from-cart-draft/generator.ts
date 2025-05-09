import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '../../../core';
import { ReferenceDraft } from '../../commons';
import { orderState, paymentState, shipmentState } from '../constants';
import { TOrderFromCartDraft } from '../types';

// https://docs.commercetools.com/api/projects/orders#orderfromcartdraft

const generator = Generator<TOrderFromCartDraft>({
  fields: {
    cart: fake(() => ReferenceDraft.random().typeId('cart')),
    version: sequence(),
    orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
    purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
    paymentState: oneOf(...Object.values(paymentState)),
    orderState: oneOf(...Object.values(orderState)),
    state: fake(() => ReferenceDraft.random().typeId('state')),
    shipmentState: oneOf(...Object.values(shipmentState)),
    custom: null,
  },
});

export default generator;
