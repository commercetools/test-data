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
              "centAmount": 10000,
              "currencyCode": "USD",
            },
            "price": {
              "centAmount": 1299,
              "currencyCode": "USD",
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
              "centAmount": 10000,
              "currencyCode": "USD",
            },
            "price": {
              "centAmount": 1299,
              "currencyCode": "USD",
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
