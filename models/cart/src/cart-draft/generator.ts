import { Reference, AddressDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCartDraft } from '../types';
import {
  inventoryMode,
  origin,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from '../constants';

// https://docs.commercetools.com/api/projects/carts#cartdraft

const generator = Generator<TCartDraft>({
  fields: {
    currency: fake(() => oneOf('EUR', 'USD')),
    key: fake((f) => f.lorem.slug(2)),
    customerId: null,
    customerEmail: fake((f) => f.internet.email()),
    customerGroup: fake(() => Reference.random().typeId('customer-group')),
    anonymousId: null,
    businessUnit: fake(() => Reference.random().typeId('business-unit')),
    store: null,
    country: fake((f) => f.address.countryCode()),
    inventoryMode: fake(() =>
      oneOf(
        inventoryMode.TrackOnly,
        inventoryMode.ReserveOnOrder,
        inventoryMode.None
      )
    ),
    taxMode: fake(() =>
      oneOf(
        taxMode.Platform,
        taxMode.External,
        taxMode.ExternalAmount,
        taxMode.Disabled
      )
    ),
    taxRoundingMode: fake(() =>
      oneOf(
        taxRoundingMode.HalfEven,
        taxRoundingMode.HalfUp,
        taxRoundingMode.HalfDown
      )
    ),
    taxCalculationMode: fake(() =>
      oneOf(taxCalculationMode.LineItemLevel, taxCalculationMode.UnitPriceLevel)
    ),
    // TODO: integrate a `LineItems` model
    lineItems: [],
    customLineItems: [],
    shippingAddress: fake(() => AddressDraft.random()),
    billingAddress: fake(() => AddressDraft.random()),
    shippingMethod: fake(() => Reference.random().typeId('shipping-method')),
    externalTaxRateForShippingMethod: null,
    custom: null,
    locale: fake((f) => f.random.locale()),
    deleteDaysAfterLastModification: null,
    shippingRateInput: null,
    origin: fake(() => oneOf(origin.Customer, origin.Merchant, origin.Quote)),
    shippingMode: fake(() => oneOf(shippingMode.Single, shippingMode.Multiple)),
    customShipping: null,
    shipping: [],
    itemShippingAddresses: [],
    discountCodes: fake((f) => [f.random.word()]),
  },
});

export default generator;
