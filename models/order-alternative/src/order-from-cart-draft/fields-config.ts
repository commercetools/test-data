import { ReferenceDraft } from '@commercetools-test-data/commons';
import {
  fake,
  oneOf,
  sequence,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { orderState, paymentState, shipmentState } from '../constants';
import { TOrderFromCartDraftRest } from '../types';

const commonFieldsConfig = {
  id: null,
  cart: fake(() => ReferenceDraft.random().typeId('cart')),
  version: sequence(),
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  paymentState: oneOf(...Object.values(paymentState)),
  orderState: oneOf(...Object.values(orderState)),
  state: fake(() => ReferenceDraft.random().typeId('state')),
  shipmentState: oneOf(...Object.values(shipmentState)),
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TOrderFromCartDraftRest> = {
  fields: { ...commonFieldsConfig },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TOrderFromCartDraftRest> =
  {
    fields: { ...commonFieldsConfig },
  };
