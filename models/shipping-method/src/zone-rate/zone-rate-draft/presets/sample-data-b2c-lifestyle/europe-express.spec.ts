import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import europeExpress from './europe-express';

describe('with europeExpress preset', () => {
  it(`should return a europeExpress preset`, () => {
    const europeExpressPreset = europeExpress().build<TZoneRateDraft>();
    expect(europeExpressPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 50000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 50000,
              "currencyCode": "GBP",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return a europeExpress preset when built for Graphql`, () => {
    const europeExpressPresetGraphql =
      europeExpress().buildGraphql<TZoneRateDraftGraphql>();
    expect(europeExpressPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 50000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 50000,
              "currencyCode": "GBP",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });
});
