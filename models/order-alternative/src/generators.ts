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
  nestedModel,
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
  createdBy: nestedModel(() => ClientLogging.random()),
  lastModifiedBy: nestedModel(() => ClientLogging.random()),
  completedAt: null,
  orderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  customerId: fake((f) => f.string.uuid()),
  customerEmail: fake((f) => f.internet.email()),
  anonymousId: fake((f) => f.string.uuid()),
  lineItems: nestedModel(() => [LineItem.random()]),
  customLineItems: nestedModel(() => []),
  totalPrice: nestedModel(() => CentPrecisionMoney.random()),
  taxedPrice: null,
  taxedShippingPrice: nestedModel(() => null),
  shippingAddress: nestedModel(() => Address.random()),
  billingAddress: nestedModel(() => Address.random()),
  shippingMode: oneOf(...Object.values(shippingMode)),
  shipping: nestedModel(() => []),
  taxMode: oneOf(...Object.values(taxMode)),
  taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
  country: fake((f) => f.location.countryCode()),
  orderState: oneOf(...Object.values(orderState)),
  shipmentState: oneOf(...Object.values(shipmentState)),
  paymentState: oneOf(...Object.values(paymentState)),
  shippingInfo: nestedModel(() => null),
  syncInfo: null,
  returnInfo: nestedModel(() => []),
  purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  discountCodes: nestedModel(() => []),
  directDiscounts: nestedModel(() => []),
  custom: nestedModel(() => null),
  paymentInfo: nestedModel(() => null),
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  shippingRateInput: nestedModel(() => null),
  origin: 'Customer',
  itemShippingAddresses: nestedModel(() => [Address.random()]),
  discountOnTotalPrice: nestedModel(() => null),
  shippingCustomFields: nestedModel(() => null),
};

export const restGenerator = Generator<TOrderRest>({
  fields: {
    ...commonFieldsInitializers,
    businessUnit: nestedModel(() =>
      Reference.presets.businessUnitReference().obj(Company.random())
    ),
    cart: nestedModel(() =>
      Reference.presets.cartReference().obj(Cart.random())
    ),
    customerGroup: nestedModel(() =>
      Reference.presets.customerGroupReference().obj(CustomerGroup.random())
    ),
    quote: nestedModel(() =>
      Reference.presets.quoteReference().obj(Quote.random())
    ),
    refusedGifts: nestedModel(() => [
      Reference.presets.cartDiscountReference().obj(CartDiscount.random()),
    ]),
    state: nestedModel(() =>
      Reference.presets.stateReference().obj(State.random())
    ),
    store: nestedModel(() =>
      Reference.presets.storeReference().obj(Store.random())
    ),
  },
});

export const graphqlGenerator = Generator<TOrderGraphql>({
  fields: {
    ...commonFieldsInitializers,
    businessUnit: nestedModel(() => Company.random()),
    businessUnitRef: nestedModel(() =>
      Reference.presets.businessUnitReference()
    ),
    cart: nestedModel(() => Cart.random()),
    cartRef: nestedModel(() => Reference.presets.cartReference()),
    customer: nestedModel(() => Customer.random()),
    customerGroup: nestedModel(() => CustomerGroup.random()),
    customerGroupRef: nestedModel(() =>
      Reference.presets.customerGroupReference()
    ),
    quote: nestedModel(() => Quote.random()),
    quoteRef: nestedModel(() => Reference.presets.quoteReference()),
    refusedGifts: nestedModel(() => [CartDiscount.random()]),
    refusedGiftsRefs: nestedModel(() => [
      Reference.presets.cartDiscountReference(),
    ]),
    state: nestedModel(() => State.random()),
    stateRef: nestedModel(() => Reference.presets.stateReference()),
    store: nestedModel(() => Store.random()),
    storeRef: nestedModel(() => Reference.presets.storeReference()),
    __typename: 'Order',
  },
});
