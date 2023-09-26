import type { TShippingMethod, TShippingMethodGraphql } from '../../../types';
import usaShippingMethod from './usa';

describe('Shipping Method with USA preset', () => {
  it('should return a usaShippingMethod preset', () => {
    const usaShippingMethodPreset =
      usaShippingMethod().build<TShippingMethod>();
    expect(usaShippingMethodPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "us-delivery",
        "localizedDescription": {
          "de": undefined,
          "de-DE": "US Shipping",
          "en": undefined,
          "en-GB": "US Shipping",
          "en-US": "US Shipping",
          "fr": undefined,
        },
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
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "price": {
                  "centAmount": 5000,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
        "isDefault": true,
        "key": "us-delivery",
        "localizedDescription": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "US Shipping",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "US Shipping",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "US Shipping",
          },
        ],
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
                  "__typename": "Money",
                  "centAmount": 100000,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
                "price": {
                  "__typename": "Money",
                  "centAmount": 5000,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
