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
        "key": "express-shipping",
        "localizedDescription": {
          "de": undefined,
          "de-DE": "1-2 Arbeitstage",
          "en": undefined,
          "en-GB": "1-2 business days",
          "en-US": "1-2 business days",
          "fr": undefined,
        },
        "localizedName": {
          "de": undefined,
          "de-DE": "Expressversand",
          "en": undefined,
          "en-GB": "Express shipping",
          "en-US": "Express shipping",
          "fr": undefined,
        },
        "name": "Express Shipping",
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
                  "centAmount": 75000,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 75000,
                  "currencyCode": "GBP",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 75000,
                  "currencyCode": "USD",
                },
                "tiers": [],
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

  it('should return a express shipping method preset when built for Graphql', () => {
    const expressShippingPresetGraphql =
      expressShippingMethod().buildGraphql<TShippingMethodGraphql>();
    expect(expressShippingPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "express-shipping",
        "localizedDescription": [
          {
            "locale": "en-US",
            "value": "1-2 business days",
          },
          {
            "locale": "de-DE",
            "value": "1-2 Arbeitstage",
          },
          {
            "locale": "en-GB",
            "value": "1-2 business days",
          },
        ],
        "localizedName": [
          {
            "locale": "en-US",
            "value": "Express shipping",
          },
          {
            "locale": "de-DE",
            "value": "Expressversand",
          },
          {
            "locale": "en-GB",
            "value": "Express shipping",
          },
        ],
        "name": "Express Shipping",
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
                  "centAmount": 75000,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 75000,
                  "currencyCode": "GBP",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 75000,
                  "currencyCode": "USD",
                },
                "tiers": [],
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
