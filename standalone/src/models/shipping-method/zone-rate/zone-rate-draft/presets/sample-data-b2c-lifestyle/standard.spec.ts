import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import standard from './standard';

describe('with standard preset', () => {
  it(`should return a standard preset`, () => {
    const standardPreset = standard().build<TZoneRateDraft>();
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
        "zone": [
          {
            "key": "europe",
            "typeId": "zone",
          },
          {
            "key": "usa",
            "typeId": "zone",
          },
        ],
      }
    `);
  });

  it(`should return a standard preset when built for Graphql`, () => {
    const standardPresetGraphql =
      standard().buildGraphql<TZoneRateDraftGraphql>();
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
        "zone": [
          {
            "key": "europe",
            "typeId": "zone",
          },
          {
            "key": "usa",
            "typeId": "zone",
          },
        ],
      }
    `);
  });
});
