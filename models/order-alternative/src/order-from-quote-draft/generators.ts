import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { orderState, paymentState, shipmentState } from '../constants';
import {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../types';

const commonFieldsInitializers = {
  quote: fake(() => KeyReferenceDraft.random().typeId('quote')),
  version: fake((f) => f.number.int()),
  quoteStateToAccepted: fake((f) => f.datatype.boolean()),
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  paymentState: oneOf(...Object.values(paymentState)),
  shipmentState: oneOf(...Object.values(shipmentState)),
  orderState: oneOf(...Object.values(orderState)),
  state: fake(() => KeyReferenceDraft.random().typeId('state')),
};

export const restGenerator = Generator<TOrderFromQuoteDraftRest>({
  fields: commonFieldsInitializers,
});

export const graphqlGenerator = Generator<TOrderFromQuoteDraftGraphql>({
  fields: commonFieldsInitializers,
});
