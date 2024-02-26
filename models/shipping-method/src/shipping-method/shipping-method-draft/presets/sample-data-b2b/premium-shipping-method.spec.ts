import type { TShippingMethodDraft } from '../../../types';
import premiumShippingMethod from './premium-shipping-method';

describe(`with premiumShippingMethod preset`, () => {
  it(`should return a premiumShippingMethod preset`, () => {
    const premiumShippingMethodPreset =
      premiumShippingMethod().build<TShippingMethodDraft>();
    expect(premiumShippingMethodPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "premium-shipping-method",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Premium shipping method",
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
        ],
      }
    `);
  });

  it(`should return a premiumShippingMethod preset when built for graphql`, () => {
    const premiumShippingMethodPresetGraphql =
      premiumShippingMethod().buildGraphql<TShippingMethodDraft>();
    expect(premiumShippingMethodPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "premium-shipping-method",
        "localizedDescription": undefined,
        "localizedName": undefined,
        "name": "Premium shipping method",
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
        ],
      }
    `);
  });
});
