import { TCartDraftGraphql, TCartDraftRest } from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-custom-line-item';

const cartExpectation = (cart: TCartDraftRest | TCartDraftGraphql) => {
  expect(cart).toMatchObject({
    customLineItems: expect.arrayContaining([
      expect.objectContaining({
        money: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: 'USD',
        }),
        quantity: expect.any(Number),
      }),
    ]),
    currency: 'USD',
    country: 'US',
    locale: 'en-US',
    shippingAddress: {
      country: 'US',
      state: null,
    },
    customerId: undefined,
    customerEmail: undefined,
    customerGroup: undefined,
    anonymousId: undefined,
    businessUnit: undefined,
    store: undefined,
    lineItems: undefined,
    taxMode: undefined,
    externalTaxRateForShippingMethod: undefined,
    taxRoundingMode: undefined,
    taxCalculationMode: undefined,
    inventoryMode: undefined,
    billingAddress: undefined,
    shippingMethod: undefined,
    shippingRateInput: undefined,
    shippingMode: undefined,
    customShipping: undefined,
    shipping: undefined,
    itemShippingAddresses: undefined,
    discountCodes: undefined,
    origin: undefined,
    deleteDaysAfterLastModification: undefined,
    custom: undefined,
  });
};

describe('With Custom Line Item preset', () => {
  it('[REST] should set all specified fields correctly', () => {
    const cartDraft = restPreset().build();
    cartExpectation(cartDraft);
  });
  it('[Graphql] should set all specified fields correctly', () => {
    const cartDraft = graphqlPreset().build();
    cartExpectation(cartDraft);
  });
  it('[Compat - REST] should set all specified fields correctly', () => {
    const cartDraft = compatPreset().buildRest();
    cartExpectation(cartDraft);
  });
  it('[Compat - Graphql] should set all specified fields correctly', () => {
    const cartDraft = compatPreset().buildGraphql();
    cartExpectation(cartDraft);
  });
});
