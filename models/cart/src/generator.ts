import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import {
  Reference,
  Address,
  ClientLogging,
} from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import * as LineItem from '@commercetools-test-data/line-item';
import { createRelatedDates } from '@commercetools-test-data/utils';
import {
  cartState,
  inventoryMode,
  origin,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from './constants';
import { TCart } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/carts#cart

const generator = Generator<TCart>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    customerId: fake((f) => f.datatype.uuid()),
    customerEmail: fake((f) => f.internet.email()),
    customerGroup: fake(() => Reference.random().typeId('customer-group')),
    anonymousId: fake((f) => f.datatype.uuid()),
    businessUnit: fake(() => Reference.random().typeId('business-unit')),
    store: null,
    country: fake((f) => f.address.countryCode()),
    inventoryMode: oneOf(...Object.values(inventoryMode)),
    taxMode: oneOf(...Object.values(taxMode)),
    taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
    taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
    lineItems: fake(() => [LineItem.random()]),
    customLineItems: [],
    shippingAddress: fake(() => Address.random()),
    billingAddress: fake(() => Address.random()),
    custom: null,
    locale: fake((f) => f.random.locale()),
    deleteDaysAfterLastModification: null,
    shippingRateInput: null,
    origin: oneOf(...Object.values(origin)),
    shippingMode: oneOf(...Object.values(shippingMode)),
    shipping: [],
    itemShippingAddresses: fake(() => [Address.random()]),
    discountCodes: fake((f) => [f.random.word()]),
    totalPrice: fake(() => CentPrecisionMoney.random()),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    cartState: oneOf(...Object.values(cartState)),
    refusedGifts: fake(() => [Reference.random().typeId('cart-discount')]),
  },
});

export default generator;
