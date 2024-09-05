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
  oneOf,
  sequence,
  TModelFieldsConfig,
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

const commonFieldsConfig = {
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
  country: fake((f) => f.location.countryCode()),
  orderState: oneOf(...Object.values(orderState)),
  shipmentState: oneOf(...Object.values(shipmentState)),
  paymentState: oneOf(...Object.values(paymentState)),
  shippingInfo: null,
  syncInfo: null,
  returnInfo: [],
  purchaseOrderNumber: fake((f) => String(f.number.int({ min: 100000 }))),
  discountCodes: [],
  directDiscounts: [],
  custom: null,
  paymentInfo: null,
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  shippingRateInput: null,
  origin: 'Customer',
  itemShippingAddresses: fake(() => [Address.random()]),
  discountOnTotalPrice: null,
  shippingCustomFields: null,
  shippingKey: null,
  lastMessageSequenceNumber: null,
};

export const restFieldsConfig: TModelFieldsConfig<TOrderRest> = {
  fields: {
    ...commonFieldsConfig,
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
};

export const graphqlFieldsConfig: TModelFieldsConfig<TOrderGraphql> = {
  fields: {
    ...commonFieldsConfig,
    businessUnit: fake(() => Company.random()),
    businessUnitRef: fake(() => Reference.presets.businessUnitReference()),
    cart: fake(() => Cart.random()),
    cartRef: null,
    customer: fake(() => Customer.random()),
    customerGroup: fake(() => CustomerGroup.random()),
    customerGroupRef: null,
    quote: fake(() => Quote.random()),
    quoteRef: null,
    refusedGifts: fake(() => [CartDiscount.random()]),
    refusedGiftsRefs: [],
    state: fake(() => State.random()),
    stateRef: null,
    store: fake(() => Store.random()),
    storeRef: null,
    __typename: 'Order',
  },
  postBuild: (fields) => {
    return {
      businessUnitRef: fields.businessUnit
        ? Reference.presets
            .businessUnitReference()
            .id(fields.businessUnit.id)
            .buildGraphql()
        : undefined,
      cartRef: fields.cart
        ? Reference.presets.cartReference().id(fields.cart.id).buildGraphql()
        : undefined,
      customerGroupRef: fields.customerGroup
        ? Reference.presets
            .customerGroupReference()
            .id(fields.customerGroup.id)
            .buildGraphql()
        : undefined,
      quoteRef: fields.quote
        ? Reference.presets.quoteReference().id(fields.quote.id).buildGraphql()
        : undefined,
      refusedGiftsRefs: fields.refusedGifts.map((ref) =>
        Reference.presets.cartDiscountReference().id(ref.id).buildGraphql()
      ),
      stateRef: fields.state
        ? Reference.presets.stateReference().id(fields.state.id).buildGraphql()
        : undefined,
      storeRef: fields.store
        ? Reference.presets.storeReference().id(fields.store.id).buildGraphql()
        : undefined,
    };
  },
};
