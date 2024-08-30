import { Company } from '@commercetools-test-data/business-unit';
import { Cart, LineItem } from '@commercetools-test-data/cart';
import { CartDiscount } from '@commercetools-test-data/cart-discount';
import {
  Address,
  CentPrecisionMoney,
  ClientLogging,
  Reference,
} from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { Customer } from '@commercetools-test-data/customer';
import { CustomerGroup } from '@commercetools-test-data/customer-group';
import { Quote } from '@commercetools-test-data/quote';
import { State } from '@commercetools-test-data/state';
import { Store } from '@commercetools-test-data/store';
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
import { TOrderGraphql, TOrderRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsInitializers = {
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.lorem.words()),
  version: sequence(),
  createdAt: fake(getOlderDate),
  lastModifiedAt: fake(getNewerDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedBy: fake(() => ClientLogging.random()),
  completedAt: null,
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  customerId: fake((f) => f.string.uuid()),
  customerEmail: fake((f) => f.internet.email()),
  anonymousId: fake((f) => f.string.uuid()),
  lineItems: fake(() => [LineItem.random()]),
  customLineItems: fake(() => []),
  totalPrice: fake(() => CentPrecisionMoney.random()),
  taxedPrice: null,
  taxedShippingPrice: fake(() => null),
  shippingAddress: fake(() => Address.random()),
  billingAddress: fake(() => Address.random()),
  shippingMode: oneOf(...Object.values(shippingMode)),
  shipping: fake(() => []),
  taxMode: oneOf(...Object.values(taxMode)),
  taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
  country: fake((f) => f.location.countryCode()),
  orderState: oneOf(...Object.values(orderState)),
  shipmentState: oneOf(...Object.values(shipmentState)),
  paymentState: oneOf(...Object.values(paymentState)),
  shippingInfo: fake(() => null),
  syncInfo: null,
  returnInfo: fake(() => []),
  purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  discountCodes: fake(() => []),
  directDiscounts: fake(() => []),
  custom: fake(() => null),
  paymentInfo: fake(() => null),
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  shippingRateInput: fake(() => null),
  origin: 'Customer',
  itemShippingAddresses: fake(() => [Address.random()]),
  discountOnTotalPrice: fake(() => null),
  shippingCustomFields: fake(() => null),
};

export const restGenerator = Generator<TOrderRest>({
  fields: {
    ...commonFieldsInitializers,
    businessUnit: fake(() =>
      Reference.presets.businessUnitReference().obj(Company.random())
    ),
    cart: fake(() => Reference.presets.cartReference().obj(Cart.random())),
    customerGroup: fake(() =>
      Reference.presets.customerGroupReference().obj(CustomerGroup.random())
    ),
    quote: fake(() => Reference.presets.quoteReference().obj(Quote.random())),
    refusedGifts: fake(() => [
      Reference.presets.cartDiscountReference().obj(CartDiscount.random()),
    ]),
    state: fake(() => Reference.presets.stateReference().obj(State.random())),
    store: fake(() => Reference.presets.storeReference().obj(Store.random())),
  },
});

export const graphqlGenerator = Generator<TOrderGraphql>({
  fields: {
    ...commonFieldsInitializers,
    businessUnit: fake(() => Company.random()),
    businessUnitRef: fake(() => Reference.presets.businessUnitReference()),
    cart: fake(() => Cart.random()),
    cartRef: fake(() => Reference.presets.cartReference()),
    customer: fake(() => Customer.random()),
    customerGroup: fake(() => CustomerGroup.random()),
    customerGroupRef: fake(() => Reference.presets.customerGroupReference()),
    quote: fake(() => Quote.random()),
    quoteRef: fake(() => Reference.presets.quoteReference()),
    refusedGifts: fake(() => [CartDiscount.random()]),
    refusedGiftsRefs: fake(() => [Reference.presets.cartDiscountReference()]),
    state: fake(() => State.random()),
    stateRef: fake(() => Reference.presets.stateReference()),
    store: fake(() => Store.random()),
    storeRef: fake(() => Reference.presets.storeReference()),
    __typename: 'Order',
  },
});
