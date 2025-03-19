import { Cart, LineItem } from '@commercetools-test-data/cart';
import { CartDiscount } from '@commercetools-test-data/cart-discount';
import {
  CentPrecisionMoney,
  ClientLogging,
  Address,
} from '@commercetools-test-data/commons';
import {
  Generator,
  fake,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import * as CustomerGroup from '@commercetools-test-data/customer-group';
import { createRelatedDates } from '@commercetools-test-data/utils';
import {
  inventoryMode,
  orderState,
  paymentState,
  shipmentState,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from './constants';
import { TOrder } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#order

const generator = Generator<TOrder>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
    customer: null,
    purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
    customerId: fake((f) => f.string.uuid()),
    customerEmail: fake((f) => f.internet.email()),
    customerGroup: fake(() => CustomerGroup.random()),
    anonymousId: fake((f) => f.string.uuid()),
    businessUnit: null,
    store: null,
    lineItems: fake(() => [LineItem.random()]),
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
    refusedGifts: fake(() => [CartDiscount.random()]),
    paymentInfo: null,
    country: fake((f) => f.location.countryCode()),
    locale: oneOf('en-US', 'de-DE', 'es-ES'),
    origin: null,
    cart: fake(() => Cart.random()),
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
  },
});

export default generator;
