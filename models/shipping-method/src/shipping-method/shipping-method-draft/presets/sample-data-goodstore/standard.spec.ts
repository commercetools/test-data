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
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Standard Delivery",
        "predicate": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "zoneRates": [
          {
            "shippingRates": [
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
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Standard Delivery",
        "predicate": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "zoneRates": [
          {
            "shippingRates": [
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
