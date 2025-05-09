import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import standardUsa from './standard-us';

describe('with standard us preset', () => {
  it(`should return a standard preset`, () => {
    const standardPreset = standardUsa().build<TZoneRateDraft>();
    expect(standardPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "USD",
            },
            "price": {
              "centAmount": 50000,
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

  it(`should return a standard preset when built for Graphql`, () => {
    const standardPresetGraphql =
      standardUsa().buildGraphql<TZoneRateDraftGraphql>();
    expect(standardPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "USD",
            },
            "price": {
              "centAmount": 50000,
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
});
