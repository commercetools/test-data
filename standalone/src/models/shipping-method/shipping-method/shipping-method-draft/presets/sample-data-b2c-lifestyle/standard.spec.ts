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
        "key": "standard-shipping",
        "localizedDescription": {
          "de": undefined,
          "de-DE": "3-5 Arbeitstage",
          "en": undefined,
          "en-GB": "3-5 business days",
          "en-US": "3-5 business days",
          "fr": undefined,
        },
        "localizedName": {
          "de": undefined,
          "de-DE": "Standardversand",
          "en": undefined,
          "en-GB": "Standard Shipping",
          "en-US": "Standard Shipping",
          "fr": undefined,
        },
        "name": "Standard Shipping",
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
        "key": "standard-shipping",
        "localizedDescription": [
          {
            "locale": "en-US",
            "value": "3-5 business days",
          },
          {
            "locale": "de-DE",
            "value": "3-5 Arbeitstage",
          },
          {
            "locale": "en-GB",
            "value": "3-5 business days",
          },
        ],
        "localizedName": [
          {
            "locale": "en-US",
            "value": "Standard Shipping",
          },
          {
            "locale": "de-DE",
            "value": "Standardversand",
          },
          {
            "locale": "en-GB",
            "value": "Standard Shipping",
          },
        ],
        "name": "Standard Shipping",
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
          },
        ],
      }
    `);
  });
});
