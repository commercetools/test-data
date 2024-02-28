import { ReferenceDraft, AddressDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import * as LineItem from '../../line-item';
import {
  inventoryMode,
  origin,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from '../constants';
import { TCartDraft } from '../types';

// https://docs.commercetools.com/api/projects/carts#cartdraft

const generator = Generator<TCartDraft>({
  fields: {
    currency: oneOf('EUR', 'USD'),
    key: fake((f) => f.lorem.slug(2)),
    customerId: fake((f) => f.string.uuid()),
    customerEmail: fake((f) => f.internet.email()),
    customerGroup: fake(() => ReferenceDraft.random().typeId('customer-group')),
    anonymousId: fake((f) => f.string.uuid()),
    businessUnit: fake(() => ReferenceDraft.random().typeId('business-unit')),
    store: null,
    country: fake((f) => f.location.countryCode()),
    inventoryMode: oneOf(...Object.values(inventoryMode)),
    taxMode: oneOf(...Object.values(taxMode)),
    taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
    taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
    lineItems: fake(() => [LineItem.LineItemDraft.random()]),
    customLineItems: [],
    shippingAddress: fake(() => AddressDraft.random()),
    billingAddress: fake(() => AddressDraft.random()),
    shippingMethod: fake(() =>
      ReferenceDraft.random().typeId('shipping-method')
    ),
    externalTaxRateForShippingMethod: null,
    custom: null,
    locale: oneOf('en-US', 'es-ES'),
    deleteDaysAfterLastModification: null,
    shippingRateInput: null,
    origin: oneOf(...Object.values(origin)),
    shippingMode: oneOf(...Object.values(shippingMode)),
    customShipping: [],
    shipping: [],
    itemShippingAddresses: [],
    discountCodes: fake((f) => [f.lorem.word()]),
  },
});

export default generator;
