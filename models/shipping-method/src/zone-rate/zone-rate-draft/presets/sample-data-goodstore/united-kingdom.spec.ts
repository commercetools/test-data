import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import unitedKingdom from './united-kingdom';

describe('with unitedKingdom preset', () => {
  it(`should return a unitedKingdom preset`, () => {
    const unitedKingdomPreset = unitedKingdom().build<TZoneRateDraft>();
    expect(unitedKingdomPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 10000,
              "currencyCode": "GBP",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 10000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "unitedkingdom",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return a unitedKingdom preset when built for Graphql`, () => {
    const unitedKingdomPresetGraphql =
      unitedKingdom().buildGraphql<TZoneRateDraftGraphql>();
    expect(unitedKingdomPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "__typename": "Money",
              "centAmount": 10000,
              "currencyCode": "GBP",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "__typename": "Money",
              "centAmount": 10000,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "__typename": "Reference",
          "key": "unitedkingdom",
          "typeId": "zone",
        },
      }
    `);
  });
});
