import { ReferenceDraft } from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { orderState, paymentState, shipmentState } from '../constants';
import { TOrderFromCartDraftRest } from '../types';

export const restGenerator = Generator<TOrderFromCartDraftRest>({
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

export const graphqlGenerator = restGenerator;
