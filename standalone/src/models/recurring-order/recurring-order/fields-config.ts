import { fake, oneOf, sequence, type TModelFieldsConfig } from '@/core';
import { CartGraphql } from '@/models/cart/cart';
import {
  KeyReference,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import { OrderGraphql } from '@/models/order';
import { createRelatedDates } from '@/utils';
import { StandardScheduleGraphql, StandardScheduleRest } from '../index';
import { recurringOrderState } from './constants';
import type { TRecurringOrderGraphql, TRecurringOrderRest } from './types';

const [getOlderDate, getNewerDate, getFutureDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: null,
  startsAt: fake(getFutureDate),
  resumesAt: null,
  expiresAt: null,
  lastOrderAt: null,
  nextOrderAt: null,
  skipConfiguration: null,
  businessUnit: null,
  state: null,
  recurringOrderState: oneOf(...Object.values(recurringOrderState)),
  customer: null,
  customerEmail: null,
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: null,
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: null,
  store: null,
};

export const restFieldsConfig: TModelFieldsConfig<TRecurringOrderRest> = {
  fields: {
    ...commonFieldsConfig,
    cart: fake(() => ReferenceRest.presets.cartReference()),
    originOrder: fake(() => ReferenceRest.presets.orderReference()),
    schedule: fake(() => StandardScheduleRest.random()),
    recurringOrderState: oneOf(...Object.values(recurringOrderState)),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TRecurringOrderGraphql> = {
  fields: {
    ...commonFieldsConfig,
    cart: fake(() => CartGraphql.random()),
    schedule: fake(() => StandardScheduleGraphql.random()),
    originOrder: fake(() => OrderGraphql.random()),
    cartRef: null,
    customerRef: null,
    businessUnitRef: null,
    stateRef: null,
    originOrderRef: null,
    __typename: 'RecurringOrder',
  },
  postBuild: (model) => {
    const cartRef = model.cart
      ? ReferenceGraphql.presets
          .cartReference()
          .id(model.cart.id)
          .buildGraphql()
      : model.cartRef;
    const customerRef = model.customer
      ? ReferenceGraphql.presets
          .customerReference()
          .id(model.customer.id)
          .buildGraphql()
      : model.customerRef;
    const businessUnitRef = model.businessUnit
      ? KeyReference.presets
          .businessUnit()
          .key(model.businessUnit.key)
          .buildGraphql()
      : model.businessUnitRef;
    const stateRef = model.state
      ? ReferenceGraphql.presets
          .stateReference()
          .id(model.state.id)
          .buildGraphql()
      : model.stateRef;
    const originOrderRef = model.originOrder
      ? ReferenceGraphql.presets
          .orderReference()
          .id(model.originOrder.id)
          .buildGraphql()
      : model.originOrderRef;
    return {
      ...model,
      cartRef,
      customerRef,
      businessUnitRef,
      stateRef,
      originOrderRef,
    };
  },
};
