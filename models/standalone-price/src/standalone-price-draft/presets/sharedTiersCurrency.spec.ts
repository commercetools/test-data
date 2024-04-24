import { TStandalonePriceDraft } from '../../types';
import sharedTiersCurrency from './sharedTiersCurrency';

describe(`with sharedTiersCurrency preset`, () => {
  it(`should return a sharedTiersCurrency preset in the selected currency code`, () => {
    ['EUR', 'USD'].forEach((currencyCode) => {
      const standalonePriceDraft =
        sharedTiersCurrency(currencyCode).build<TStandalonePriceDraft>();

      expect(standalonePriceDraft).toEqual(
        expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          value: expect.objectContaining({
            currencyCode,
            centAmount: expect.any(Number),
          }),
          country: expect.any(String),
          customerGroup: expect.objectContaining({
            typeId: expect.any(String),
            key: expect.any(String),
          }),
          channel: expect.objectContaining({
            typeId: expect.any(String),
            key: expect.any(String),
          }),
          validFrom: expect.any(String),
          validUntil: expect.any(String),
          tiers: expect.arrayContaining([
            expect.objectContaining({
              minimumQuantity: expect.any(Number),
              value: expect.objectContaining({
                currencyCode,
                centAmount: expect.any(Number),
              }),
            }),
          ]),
          discounted: null,
          staged: null,
          active: expect.any(Boolean),
        })
      );
    });
  });

  it(`should return a sharedTiersCurrency preset in the selected currency code when built for GraphQl`, () => {
    ['EUR', 'USD'].forEach((currencyCode) => {
      const standalonePriceDraft =
        sharedTiersCurrency(currencyCode).buildGraphql<TStandalonePriceDraft>();

      expect(standalonePriceDraft).toEqual(
        expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          value: expect.objectContaining({
            centPrecision: expect.objectContaining({
              centAmount: expect.any(Number),
              currencyCode,
            }),
          }),
          country: expect.any(String),
          customerGroup: expect.objectContaining({
            typeId: 'customer-group',
            key: expect.any(String),
          }),
          channel: expect.objectContaining({
            typeId: 'channel',
            key: expect.any(String),
          }),
          validFrom: expect.any(String),
          validUntil: expect.any(String),
          tiers: expect.arrayContaining([
            expect.objectContaining({
              minimumQuantity: expect.any(Number),
              value: expect.objectContaining({
                centAmount: expect.any(Number),
                currencyCode,
              }),
            }),
          ]),
          discounted: null,
          staged: null,
          active: expect.any(Boolean),
        })
      );
    });
  });
});
