import type { TShippingMethodDraft } from '../../../types';
import standardShippingMethod from './standard-shipping-method';

describe(`with standardShippingMethod preset`, () => {
  it(`should return a standardShippingMethod preset`, () => {
    const standardShippingMethodPreset =
      standardShippingMethod().build<TShippingMethodDraft>();
    expect(standardShippingMethodPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "standard-shipping-method",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Standard shipping method",
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
                  "centAmount": 500,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 500,
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
          {
            "shippingRates": [
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 500,
                  "currencyCode": "USD",
                },
                "tiers": [],
              },
            ],
            "zone": {
              "key": "north-america",
              "typeId": "zone",
            },
          },
        ],
      }
    `);
  });

  it(`should return a standardShippingMethod preset when built for graphql`, () => {
    const standardShippingMethodPresetGraphql =
      standardShippingMethod().buildGraphql<TShippingMethodDraft>();
    expect(standardShippingMethodPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "standard-shipping-method",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Standard shipping method",
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
                  "centAmount": 500,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 500,
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
          {
            "shippingRates": [
              {
                "freeAbove": undefined,
                "price": {
                  "centAmount": 500,
                  "currencyCode": "USD",
                },
                "tiers": [],
              },
            ],
            "zone": {
              "key": "north-america",
              "typeId": "zone",
            },
          },
        ],
      }
    `);
  });
});
