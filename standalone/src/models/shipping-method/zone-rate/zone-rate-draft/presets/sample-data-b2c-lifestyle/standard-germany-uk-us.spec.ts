import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import standardGermanyAndUkAndUs from './standard-germany-uk-us';

describe('with standard eu and uk preset', () => {
  it(`should return a standard preset`, () => {
    const standardPreset = standardGermanyAndUkAndUs().build<TZoneRateDraft>();
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
        "zone": {
          "key": "germany-uk-us",
          "typeId": "zone",
        },
      }
    `);
  });

  it(`should return a standard preset when built for Graphql`, () => {
    const standardPresetGraphql =
      standardGermanyAndUkAndUs().buildGraphql<TZoneRateDraftGraphql>();
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
        "zone": {
          "key": "germany-uk-us",
          "typeId": "zone",
        },
      }
    `);
  });
});
