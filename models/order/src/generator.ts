import * as Cart from '@commercetools-test-data/cart';
import { CartDiscount } from '@commercetools-test-data/cart-discount';
import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { ClientLogging, Address } from '@commercetools-test-data/commons';
import {
  Generator,
  fake,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import * as CustomerGroup from '@commercetools-test-data/customer-group';
import * as LineItem from '@commercetools-test-data/line-item';
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
    id: fake((f) => f.datatype.uuid()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
    completedAt: null,
    orderNumber: fake((f) => String(f.datatype.number({ min: 100000 }))),
    customerId: fake((f) => f.datatype.uuid()),
    customerEmail: fake((f) => f.internet.email()),
    anonymousId: fake((f) => f.datatype.uuid()),
    businessUnit: null,
    store: null,
    lineItems: fake(() => [LineItem.random()]),
    customLineItems: [],
    totalPrice: fake(() => CentPrecisionMoney.random()),
    taxedPrice: null,
    taxedShippingPrice: null,
    shippingAddress: fake(() => Address.random()),
    billingAddress: fake(() => Address.random()),
    shippingMode: oneOf(...Object.values(shippingMode)),
    shipping: [],
    taxMode: oneOf(...Object.values(taxMode)),
    taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
    taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
    customerGroup: fake(() => CustomerGroup.random()),
    country: fake((f) => f.address.countryCode()),
    orderState: oneOf(...Object.values(orderState)),
    state: null,
    shipmentState: oneOf(...Object.values(shipmentState)),
    paymentState: oneOf(...Object.values(paymentState)),
    shippingInfo: null,
    syncInfo: null,
    returnInfo: [],
    purchaseOrderNumber: fake((f) =>
      String(f.datatype.number({ min: 100000 }))
    ),
    discountCodes: [],
    // TODO: unsupported by SDK types
    // directDiscounts: [],
    refusedGifts: fake(() => [CartDiscount.random()]),
    cart: fake(() => Cart.random()),
    quote: null,
    custom: null,
    paymentInfo: null,
    locale: oneOf('en-US', 'de-DE', 'es-ES'),
    inventoryMode: oneOf(...Object.values(inventoryMode)),
    shippingRateInput: null,
    origin: null,
    itemShippingAddresses: fake(() => [Address.random()]),
  },
});

export default generator;
