import { fake, oneOf, type TModelFieldsConfig, sequence } from '@/core';
import { Company } from '@/models/business-unit';
import { CartGraphql, LineItemGraphql, LineItemRest } from '@/models/cart/cart';
import { CartDiscount } from '@/models/cart/cart-discount';
import {
  CentPrecisionMoney,
  ClientLogging,
  Address,
  KeyReference,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import * as CustomerGroup from '@/models/customer/customer-group';
import { createRelatedDates } from '@/utils';
import {
  inventoryMode,
  orderOrigin,
  orderState,
  paymentState,
  shipmentState,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from './constants';
import { TOrderRest, TOrderGraphql } from './types';

// Reference docs: https://docs.commercetools.com/api/projects/orders#order

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  customerId: fake((f) => f.string.uuid()),
  customerEmail: fake((f) => f.internet.email()),
  anonymousId: fake((f) => f.string.uuid()),
  store: null,
  customLineItems: [],
  totalPrice: fake(() => CentPrecisionMoney.random()),
  taxedPrice: null,
  taxedShippingPrice: null,
  discountOnTotalPrice: null,
  taxMode: oneOf(...Object.values(taxMode)),
  taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  billingAddress: fake(() => Address.random()),
  shippingAddress: fake(() => Address.random()),
  shippingMode: oneOf(...Object.values(shippingMode)),
  shippingKey: fake((f) => f.lorem.word()),
  shippingInfo: null,
  shippingRateInput: null,
  shippingCustomFields: null,
  shipping: [],
  itemShippingAddresses: fake(() => [Address.random()]),
  discountCodes: [],
  directDiscounts: [],
  paymentInfo: null,
  country: fake((f) => f.location.countryCode()),
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  origin: orderOrigin.Customer,
  quote: null,
  orderState: oneOf(...Object.values(orderState)),
  shipmentState: oneOf(...Object.values(shipmentState)),
  paymentState: oneOf(...Object.values(paymentState)),
  state: null,
  syncInfo: [],
  returnInfo: [],
  completedAt: null,
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  discountTypeCombination: null,
  lastMessageSequenceNumber: fake((f) => f.number.int()),
  recurringOrder: null,
};

export const restFieldsConfig: TModelFieldsConfig<TOrderRest> = {
  fields: {
    ...commonFieldsConfig,
    businessUnit: fake(() => KeyReference.presets.businessUnit()),
    cart: fake(() => ReferenceRest.presets.cartReference()),
    customerGroup: fake(() => ReferenceRest.presets.customerGroupReference()),
    lineItems: fake(() => [LineItemRest.random()]),
    refusedGifts: fake(() => [ReferenceRest.presets.cartDiscountReference()]),
    priceRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TOrderGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Order',
    businessUnit: fake(() => Company.random()),
    businessUnitRef: null,
    cart: fake(() => CartGraphql.random()),
    cartRef: null,
    customer: fake(() => Customer.random()),
    customerGroup: fake(() => CustomerGroup.random()),
    customerGroupRef: null,
    lineItems: fake(() => [LineItemGraphql.random()]),
    recurringOrderRef: null,
    refusedGifts: fake(() => [CartDiscount.random()]),
    refusedGiftsRefs: null,
    storeRef: null,
    placement: null,
    quoteRef: null,
    stateRef: null,
  },
  postBuild: (model) => {
    const businessUnitRef = model.businessUnit
      ? KeyReference.presets
          .businessUnit()
          .key(model.businessUnit.key)
          .buildGraphql()
      : null;
    const cartRef = model.cart
      ? ReferenceGraphql.presets
          .cartReference()
          .id(model.cart.id)
          .buildGraphql()
      : null;
    const customerGroupRef = model.customerGroup
      ? ReferenceGraphql.presets
          .customerGroupReference()
          .id(model.customerGroup.id)
          .buildGraphql()
      : null;
    const quoteRef = model.quote
      ? ReferenceGraphql.presets
          .quoteReference()
          .id(model.quote.id)
          .buildGraphql()
      : null;
    const recurringOrderRef = model.recurringOrder
      ? ReferenceGraphql.random()
          .typeId('recurring-order')
          .id(model.recurringOrder.id)
          .buildGraphql()
      : null;
    const refusedGiftsRefs = model.refusedGifts.map((refusedGift) =>
      ReferenceGraphql.presets
        .cartDiscountReference()
        .id(refusedGift.id)
        .buildGraphql()
    );
    const stateRef = model.state
      ? ReferenceGraphql.presets
          .stateReference()
          .id(model.state.id)
          .buildGraphql()
      : null;
    const storeRef = model.store
      ? KeyReference.presets.store().key(model.store.key).buildGraphql()
      : null;

    return {
      ...model,
      businessUnitRef,
      cartRef,
      customerGroupRef,
      quoteRef,
      recurringOrderRef,
      refusedGiftsRefs,
      stateRef,
      storeRef,
    };
  },
};
