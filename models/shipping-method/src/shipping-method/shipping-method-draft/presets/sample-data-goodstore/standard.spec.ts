import type { TShippingMethod, TShippingMethodGraphql } from '../../../types';
import standardShippingMethod from './standard';

describe('Shipping Method with standard preset', () => {
  it('should return a standard shipping method preset', () => {
    const standardShippingPreset =
      standardShippingMethod().build<TShippingMethod>();
    expect(standardShippingPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "standard-delivery",
        "localizedDescription": {
          "de": undefined,
          "de-DE": "4",
          "en": undefined,
          "en-GB": "4",
          "en-US": "4",
          "fr": undefined,
        },
        "localizedName": undefined,
        "name": "Standard Delivery",
        "predicate": undefined,
        "taxCategory": {
          "key": "EU",
          "typeId": "tax-category",
        },
        "zoneRates": [
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "centAmount": 0,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "price": {
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "tiers": [],
              },
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
            ],
            "zone": {
              "key": "europe",
              "typeId": "zone",
            },
          },
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
          },
        ],
      }
    `);
  });

  it('should return a standard shipping method preset when built for Graphql', () => {
    const standardShippingPresetGraphql =
      standardShippingMethod().buildGraphql<TShippingMethodGraphql>();
    expect(standardShippingPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "standard-delivery",
        "localizedDescription": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "4",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "4",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "4",
          },
        ],
        "localizedName": undefined,
        "name": "Standard Delivery",
        "predicate": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "EU",
          "typeId": "tax-category",
        },
        "zoneRates": [
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "__typename": "Money",
                  "centAmount": 0,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "price": {
                  "__typename": "Money",
                  "centAmount": 10000,
                  "currencyCode": "EUR",
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
                  "currencyCode": "GBP",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "tiers": [],
              },
            ],
            "zone": {
              "__typename": "Reference",
              "key": "europe",
              "typeId": "zone",
            },
          },
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
          },
        ],
      }
    `);
  });
});
