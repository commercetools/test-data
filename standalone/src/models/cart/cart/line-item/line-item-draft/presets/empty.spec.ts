import type { TLineItemDraftRest, TLineItemGraphql } from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const validateCommonFields = (model: TLineItemDraftRest | TLineItemGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: undefined,
      productId: undefined,
      variantId: undefined,
      sku: undefined,
      quantity: undefined,
      addedAt: undefined,
      distributionChannel: undefined,
      supplyChannel: undefined,
      externalPrice: undefined,
      externalTotalPrice: undefined,
      externalTaxRate: undefined,
      inventoryMode: undefined,
      shippingDetails: undefined,
      custom: undefined,
    })
  );
};

describe('Line item Draft with empty fields', () => {
  it('[REST] should set all specified fields to undefined', () => {
    validateCommonFields(restPreset().buildRest());
  });

  it('[GraphQL] should set all specified fields to undefined', () => {
    validateCommonFields(graphqlPreset().buildGraphql());
  });

  it('[Compat - DEFAULT] should set all specified fields to undefined', () => {
    validateCommonFields(compatPreset().build());
  });

  it('[Compat - REST] should set all specified fields to undefined', () => {
    validateCommonFields(compatPreset().buildRest());
  });

  it('[Compat - GraphQL] should set all specified fields to undefined', () => {
    validateCommonFields(compatPreset().buildGraphql());
  });
});
