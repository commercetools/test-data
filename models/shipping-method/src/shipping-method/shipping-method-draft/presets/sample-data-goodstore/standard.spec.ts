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
        "localizedName": {
          "de": undefined,
          "de-DE": "Standard Delivery",
          "en": undefined,
          "en-GB": "Standard Delivery",
          "en-US": "Standard Delivery",
          "fr": undefined,
        },
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
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 10000,
                  "currencyCode": "GBP",
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

  it('should return a standard shipping method preset when built for Graphql', () => {
    const standardShippingPresetGraphql =
      standardShippingMethod().buildGraphql<TShippingMethodGraphql>();
    expect(standardShippingPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "standard-delivery",
        "localizedDescription": undefined,
        "localizedName": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Standard Delivery",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Standard Delivery",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Standard Delivery",
          },
        ],
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
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 10000,
                  "currencyCode": "GBP",
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
});
