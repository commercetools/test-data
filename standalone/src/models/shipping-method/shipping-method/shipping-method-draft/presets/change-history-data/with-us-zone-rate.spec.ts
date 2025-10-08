import {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './with-us-zone-rate';

const validateModel = (
  usShippingMethod:
    | TShippingMethodDraftGraphql
    | TShippingMethodDraftRest
    | TShippingMethodDraft
) => {
  expect(usShippingMethod).toEqual(
    expect.objectContaining({
      taxCategory: null,
      zoneRates: expect.arrayContaining([
        expect.objectContaining({
          shippingRates: expect.arrayContaining([
            expect.objectContaining({
              freeAbove: expect.objectContaining({
                currencyCode: 'USD',
              }),
              price: expect.objectContaining({
                currencyCode: 'USD',
              }),
            }),
          ]),
          zone: expect.objectContaining({
            typeId: 'zone',
            key: 'e2e-us-zone',
          }),
        }),
      ]),
      isDefault: false,
    })
  );
};

describe('ShippingMethod with `US` Zone preset', () => {
  it('[REST] should return the `US` Zone preset & `US` ShippingRate', () => {
    const usShippingMethod = restPreset().build<TShippingMethodDraftRest>();
    validateModel(usShippingMethod);
  });

  it('[GraphQL] should return the `US` Zone preset & `US` ShippingRate', () => {
    const usShippingMethod =
      graphqlPreset().build<TShippingMethodDraftGraphql>();
    validateModel(usShippingMethod);
  });

  it('[Compat] should return the `US` Zone preset & `US` ShippingRate', () => {
    const usShippingMethod = compatPreset().build<TShippingMethodDraft>();
    validateModel(usShippingMethod);
  });
});
