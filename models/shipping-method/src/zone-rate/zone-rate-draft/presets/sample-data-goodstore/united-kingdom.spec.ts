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
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 10000,
              "currencyCode": "EUR",
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
              "centAmount": 10000,
              "currencyCode": "GBP",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 10000,
              "currencyCode": "EUR",
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
