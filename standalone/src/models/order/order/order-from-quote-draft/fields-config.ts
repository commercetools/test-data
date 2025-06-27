import { fake, oneOf, type TModelFieldsConfig, sequence } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { orderState, paymentState, shipmentState } from '../constants';
import {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../types';

export const commonFieldsConfig = {
  version: sequence(),
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  paymentState: oneOf(...Object.values(paymentState)),
  orderState: oneOf(...Object.values(orderState)),
  quoteStateToAccepted: fake((f) => f.datatype.boolean()),
  shipmentState: oneOf(...Object.values(shipmentState)),
};

export const restFieldsConfig: TModelFieldsConfig<TOrderFromQuoteDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    quote: fake(() => ReferenceRest.presets.quoteReference()),
    state: fake(() => ReferenceRest.presets.stateReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TOrderFromQuoteDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      custom: null,
      quote: fake(() => ReferenceGraphql.presets.quoteReference()),
      state: fake(() => ReferenceRest.presets.stateReference()),
    },
  };
