import type { TShippingMethod, TShippingMethodGraphql } from '../../../types';
import usaShippingMethod from './usa';

describe('Shipping Method with USA preset', () => {
  it('should return a usaShippingMethod preset', () => {
    const usaShippingMethodPreset =
      usaShippingMethod().build<TShippingMethod>();
    expect(usaShippingMethodPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "us-delivery",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "US Delivery",
        "predicate": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "zoneRates": [
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "centAmount": 100000,
                  "currencyCode": "USD",
                },
                "price": {
                  "centAmount": 5000,
                  "currencyCode": "USD",
                },
                "tiers": undefined,
              },
            ],
            "zone": {
              "key": "usa",
              "typeId": "zone",
            },
          },
        ],
      }
    `);
  });

  it('should return a usaShippingMethod preset when built for Graphql', () => {
    const usaShippingMethodPresetGraphql =
      usaShippingMethod().buildGraphql<TShippingMethodGraphql>();
    expect(usaShippingMethodPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "us-delivery",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "US Delivery",
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
                "freeAbove": {
                  "centAmount": 100000,
                  "currencyCode": "USD",
                },
                "price": {
                  "centAmount": 5000,
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
          },
        ],
      }
    `);
  });
});
