import { Reference } from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { orderState, paymentState, shipmentState } from '../constants';
import { TOrderFromQuoteDraft } from '../types';

// https://docs.commercetools.com/api/projects/orders#orderfromquotedraft

const generator = Generator<TOrderFromQuoteDraft>({
  fields: {
    version: sequence(),
    quote: fake(() => Reference.random().typeId('quote')),
    quoteStateToAccepted: fake(() => false),
    orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
    paymentState: oneOf(...Object.values(paymentState)),
    shipmentState: oneOf(...Object.values(shipmentState)),
    orderState: oneOf(...Object.values(orderState)),
    state: fake(() => Reference.random().typeId('state')),
  },
});

export default generator;
