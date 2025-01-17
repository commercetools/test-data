import {
  Address,
  CentPrecisionMoney,
  ClientLogging,
  Reference,
} from '@commercetools-test-data/commons';
import {
  fake,
  oneOf,
  type TModelFieldsConfig,
  sequence,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { LineItem } from '../index';
import {
  cartState,
  inventoryMode,
  origin,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from './constants';
import { TCartGraphql, TCartRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.lorem.slug(2)),
  customerId: fake((f) => f.string.uuid()),
  customerEmail: fake((f) => f.internet.email()),
  customerGroup: fake(() => Reference.random().typeId('customer-group')),
  anonymousId: fake((f) => f.string.uuid()),
  businessUnit: fake(() => Reference.random().typeId('business-unit')),
  store: null,
  country: fake((f) => f.location.countryCode()),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  taxMode: oneOf(...Object.values(taxMode)),
  taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
  lineItems: fake(() => [LineItem.random()]),
  customLineItems: [],
  totalLineItemQuantity: fake((f) => f.number.int()),
  shippingAddress: fake(() => Address.random()),
  billingAddress: fake(() => Address.random()),
  custom: null,
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  deleteDaysAfterLastModification: null,
  shippingRateInput: null,
  origin: oneOf(...Object.values(origin)),
  shippingMode: oneOf(...Object.values(shippingMode)),
  shippingInfo: null,
  shipping: [],
  itemShippingAddresses: fake(() => [Address.random()]),
  discountCodes: fake((f) => [f.lorem.word()]),
  directDiscounts: [],
  totalPrice: fake(() => CentPrecisionMoney.random()),
  taxedPrice: null,
  taxedShippingPrice: null,
  discountOnTotalPrice: null,
  shippingKey: fake((f) => f.lorem.slug(2)),
  shippingCustomFields: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  cartState: oneOf(...Object.values(cartState)),
  refusedGifts: fake(() => [Reference.random().typeId('cart-discount')]),
  paymentInfo: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCartRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCartGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Cart',
    businessUnitRef: fake(() => Reference.random().typeId('business-unit')),
    customerGroupRef: fake(() => Reference.random().typeId('customer-group')),
    refusedGiftsRefs: fake(() => [Reference.random().typeId('cart-discount')]),
    storeRef: fake(() => Reference.random().typeId('store')),
    customer: null,
    placement: null,
  },
};
