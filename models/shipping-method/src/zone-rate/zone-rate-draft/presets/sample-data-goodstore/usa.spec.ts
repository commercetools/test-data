import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import usa from './usa';

describe('with usa preset', () => {
  it('should return a usa preset', () => {
    const usaPreset = usa().build<TZoneRateDraft>();
    expect(usaPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 100000,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "price": {
              "centAmount": 5000,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": undefined,
          },
        ],
        "zone": {
          "key": "usa",
          "typeId": "zone",
        },
      }
    `);
  });

  it('should return a usa preset when built for graphql', () => {
    const usaPresetGraphql = usa().buildGraphql<TZoneRateDraftGraphql>();
    expect(usaPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "__typename": "Money",
              "centAmount": 100000,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "price": {
              "__typename": "Money",
              "centAmount": 5000,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
            "tiers": undefined,
          },
        ],
        "zone": {
          "__typename": "Reference",
          "key": "usa",
          "typeId": "zone",
        },
      }
    `);
  });
});
