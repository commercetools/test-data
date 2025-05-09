import type { TZoneRateDraft } from '../../../types';
import northAmerica from './north-america';

describe(`with northAmerica preset`, () => {
  it(`should return a northAmerica preset`, () => {
    const northAmericaPreset = northAmerica().build<TZoneRateDraft>();
    expect(northAmericaPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "USD",
            },
            "price": {
              "centAmount": 10000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "north-america",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return a northAmerica preset when built for graphql`, () => {
    const northAmericaPresetGraphql =
      northAmerica().buildGraphql<TZoneRateDraft>();
    expect(northAmericaPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "USD",
            },
            "price": {
              "centAmount": 10000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": {
          "key": "north-america",
          "typeId": "zone",
        },
      }
    `);
  });
});
