import type { TShippingMethod, TShippingMethodGraphql } from '../../../types';
import expressShippingMethod from './express';

describe('Shipping Method with express preset', () => {
  it('should return a express shipping method preset', () => {
    const expressShippingPreset =
      expressShippingMethod().build<TShippingMethod>();
    expect(expressShippingPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "express-delivery",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Express Delivery",
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
                  "centAmount": 50000,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 50000,
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
        ],
      }
    `);
  });

  it('should return a express shipping method preset when built for Graphql', () => {
    const expressShippingPresetGraphql =
      expressShippingMethod().buildGraphql<TShippingMethodGraphql>();
    expect(expressShippingPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "express-delivery",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Express Delivery",
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
                  "centAmount": 50000,
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
                  "centAmount": 50000,
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
        ],
      }
    `);
  });
});
