import { TStandalonePriceDraft } from '../../types';
import full from './full';

describe(`with full preset`, () => {
  it(`should return a full preset with a unique currency code when built for rest`, () => {
    const standalonePriceDraft = full().buildRest<TStandalonePriceDraft>();
    const mainCurrencyCode = standalonePriceDraft.value.currencyCode;

    expect(standalonePriceDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: mainCurrencyCode,
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
              currencyCode: mainCurrencyCode,
              type: expect.any(String),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: expect.objectContaining({
          value: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: mainCurrencyCode,
          }),
        }),
        active: expect.any(Boolean),
        recurrencePolicy: null,
      })
    );
  });

  it(`should return a full preset with a unique currency code when built for graphql`, () => {
    const standalonePriceDraft = full().buildGraphql<TStandalonePriceDraft>();
    const mainCurrencyCode = standalonePriceDraft.value.currencyCode;

    expect.objectContaining({
      key: expect.any(String),
      sku: expect.any(String),
      value: expect.objectContaining({
        centPrecision: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: mainCurrencyCode,
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
            currencyCode: mainCurrencyCode,
            type: expect.any(String),
            fractionDigits: expect.any(Number),
          }),
        }),
      ]),
      discounted: null,
      staged: expect.objectContaining({
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: mainCurrencyCode,
        }),
      }),
      active: expect.any(Boolean),
      recurrencePolicy: null,
    });
  });

  it(`should return a full preset with a unique currency code when an argument is provided when built for rest`, () => {
    const standalonePriceDraft = full({
      currency: 'EUR',
    }).buildRest<TStandalonePriceDraft>();

    expect(standalonePriceDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: 'EUR',
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
              currencyCode: 'EUR',
              type: expect.any(String),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: expect.objectContaining({
          value: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'EUR',
          }),
        }),
        active: expect.any(Boolean),
        recurrencePolicy: null,
      })
    );
  });

  it(`should return a full preset with a unique currency code when an argument is provided when built for graphql`, () => {
    const standalonePriceDraft = full({
      currency: 'EUR',
    }).buildGraphql<TStandalonePriceDraft>();

    expect(standalonePriceDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: expect.objectContaining({
          centPrecision: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'EUR',
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
              currencyCode: 'EUR',
              type: expect.any(String),
              fractionDigits: expect.any(Number),
            }),
          }),
        ]),
        discounted: null,
        staged: expect.objectContaining({
          value: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'EUR',
          }),
        }),
        active: expect.any(Boolean),
        recurrencePolicy: null,
      })
    );
  });
});
