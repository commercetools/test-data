import { fake, oneOf, type TModelFieldsConfig, sequence } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { orderState, paymentState, shipmentState } from '../constants';
import { TOrderFromCartDraftGraphql, TOrderFromCartDraftRest } from '../types';

export const commonFieldsConfig = {
  id: null,
  version: sequence(),
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  paymentState: oneOf(...Object.values(paymentState)),
  orderState: oneOf(...Object.values(orderState)),
  shipmentState: oneOf(...Object.values(shipmentState)),
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TOrderFromCartDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    cart: fake(() => ReferenceRest.presets.cartReference()),
    state: fake(() => ReferenceRest.presets.stateReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TOrderFromCartDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      cart: fake(() => ReferenceGraphql.presets.cartReference()),
      state: fake(() => ReferenceRest.presets.stateReference()),
    },
  };
