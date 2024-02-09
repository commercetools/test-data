import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../../../types';
import usaAustralia from './usaAustralia';

describe('with usaAustraliaShippingMethod preset', () => {
  it('should return a usaAustralia preset', () => {
    const usaAustraliaPreset = usaAustralia().build<TShippingMethodDraft>();
    expect(usaAustraliaPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "shipping-usa-australia",
        "localizedDescription": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Shipping Method USA/Australia",
          "fr": undefined,
        },
        "localizedName": undefined,
        "name": "Sample Shipping Method USA/Australia",
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
                  "centAmount": 10000,
                  "currencyCode": "USD",
                },
                "price": {
                  "centAmount": 1299,
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
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "centAmount": 20000,
                  "currencyCode": "AUD",
                },
                "price": {
                  "centAmount": 2000,
                  "currencyCode": "AUD",
                },
                "tiers": [],
              },
            ],
            "zone": {
              "key": "australia",
              "typeId": "zone",
            },
          },
        ],
      }
    `);
  });

  it('should return a usaAustralia preset when built for graphql', () => {
    const usaAustraliaPresetGraphql =
      usaAustralia().buildGraphql<TShippingMethodDraftGraphql>();
    expect(usaAustraliaPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "shipping-usa-australia",
        "localizedDescription": [
          {
            "locale": "en-US",
            "value": "Sample Shipping Method USA/Australia",
          },
        ],
        "localizedName": undefined,
        "name": "Sample Shipping Method USA/Australia",
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
                  "centAmount": 10000,
                  "currencyCode": "USD",
                },
                "price": {
                  "centAmount": 1299,
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
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "centAmount": 20000,
                  "currencyCode": "AUD",
                },
                "price": {
                  "centAmount": 2000,
                  "currencyCode": "AUD",
                },
                "tiers": [],
              },
            ],
            "zone": {
              "key": "australia",
              "typeId": "zone",
            },
          },
        ],
      }
    `);
  });
});
