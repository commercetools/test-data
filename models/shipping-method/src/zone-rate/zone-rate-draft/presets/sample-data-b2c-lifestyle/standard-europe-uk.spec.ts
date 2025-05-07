import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import standardEuropeUk from './standard-europe-uk';

describe('with standard eu and uk preset', () => {
  it(`should return a standard preset`, () => {
    const standardPreset = standardEuropeUk().build<TZoneRateDraft>();
    expect(standardPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 50000,
              "currencyCode": "EUR",
            },
            "tiers": undefined,
          },
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "GBP",
            },
            "price": {
              "centAmount": 50000,
              "currencyCode": "GBP",
            },
            "tiers": undefined,
          },
        ],
        "zone": {
          "key": "europe",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return a standard preset when built for Graphql`, () => {
    const standardPresetGraphql =
      standardEuropeUk().buildGraphql<TZoneRateDraftGraphql>();
    expect(standardPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "EUR",
            },
            "price": {
              "centAmount": 50000,
              "currencyCode": "EUR",
            },
            "tiers": undefined,
          },
          {
            "freeAbove": {
              "centAmount": 1000000,
              "currencyCode": "GBP",
            },
            "price": {
              "centAmount": 50000,
              "currencyCode": "GBP",
            },
            "tiers": undefined,
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
