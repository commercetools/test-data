import { TStandalonePriceDraft } from '../../types';
import withTiers from './full';

describe(`with full preset`, () => {
  it(`should return a full preset in the selected currency code`, () => {
    const standalonePriceDraft = withTiers().build<TStandalonePriceDraft>();
    expect(standalonePriceDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: standalonePriceDraft.value.currencyCode,
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
              centAmount: expect.any(Number),
              currencyCode: standalonePriceDraft.value.currencyCode,
              type: expect.any(String),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: standalonePriceDraft.value.currencyCode,
        }),
        active: expect.any(Boolean),
      })
    );
  });

  it(`should return a full preset in the selected currency code when built for graphql`, () => {
    const standalonePriceDraft =
      withTiers().buildGraphql<TStandalonePriceDraft>();
    expect.objectContaining({
      key: expect.any(String),
      sku: expect.any(String),
      value: expect.objectContaining({
        centPrecision: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: standalonePriceDraft.value.currencyCode,
        }),
      }),
      country: expect.any(String), // Check for a valid country code
      customerGroup: expect.objectContaining({
        typeId: expect.any(String),
        key: expect.any(String),
      }),
      channel: expect.objectContaining({
        typeId: expect.any(String),
        key: expect.any(String),
      }),
      validFrom: expect.any(String), // Expected date in string format
      validUntil: expect.any(String), // Expected date in string format
      tiers: expect.arrayContaining([
        expect.objectContaining({
          minimumQuantity: expect.any(Number),
          value: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: standalonePriceDraft.value.currencyCode, // Expected currency code
            type: expect.any(String), // Expected type
            fractionDigits: expect.any(Number), // Expected number of fraction digits
          }),
        }),
      ]),
      discounted: null, // Expected to be null
      staged: expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: standalonePriceDraft.value.currencyCode, // Expected currency code
        }),
      }),
      active: expect.any(Boolean), // Expected a boolean
    });
  });
});
