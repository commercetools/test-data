import { TCartDraftGraphql, TCartDraftRest } from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const cartExpectation = (cart: TCartDraftRest | TCartDraftGraphql) => {
  expect(cart).toMatchObject({
    key: undefined,
    customerId: undefined,
    customerEmail: undefined,
    customerGroup: undefined,
    anonymousId: undefined,
    businessUnit: undefined,
    store: undefined,
    lineItems: undefined,
    customLineItems: undefined,
    taxMode: undefined,
    externalTaxRateForShippingMethod: undefined,
    taxRoundingMode: undefined,
    taxCalculationMode: undefined,
    inventoryMode: undefined,
    billingAddress: undefined,
    shippingAddress: undefined,
    shippingMethod: undefined,
    shippingRateInput: undefined,
    shippingMode: undefined,
    customShipping: undefined,
    shipping: undefined,
    itemShippingAddresses: undefined,
    discountCodes: undefined,
    country: undefined,
    locale: undefined,
    origin: undefined,
    deleteDaysAfterLastModification: undefined,
    custom: undefined,
  });
};

describe('Empty preset', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const emptyCartDraft = restPreset().build();
    cartExpectation(emptyCartDraft);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const emptyCartDraft = graphqlPreset().build();
    cartExpectation(emptyCartDraft);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const emptyCartDraft = compatPreset().buildRest();
    cartExpectation(emptyCartDraft);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const emptyCartDraft = compatPreset().buildGraphql();
    cartExpectation(emptyCartDraft);
  });
});
