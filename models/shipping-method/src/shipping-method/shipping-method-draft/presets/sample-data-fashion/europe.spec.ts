import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../../../types';
import europeShippingMethod from './europe';

describe('with europeShippingMethod preset', () => {
  it('should return a europeShippingMethod preset', () => {
    const europeShippingMethodPreset =
      europeShippingMethod().build<TShippingMethodDraft>();
    expect(europeShippingMethodPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "shipping-europe",
        "localizedDescription": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Shipping Method Europe",
          "fr": undefined,
        },
        "localizedName": undefined,
        "name": "Sample Shipping Method Europe",
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
                  "centAmount": 15000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 1299,
                  "currencyCode": "EUR",
                },
                "tiers": undefined,
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

  it('should return a europeShippingMethod preset when built for graphql', () => {
    const europeShippingMethodPresetGraphql =
      europeShippingMethod().buildGraphql<TShippingMethodDraftGraphql>();
    expect(europeShippingMethodPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "shipping-europe",
        "localizedDescription": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Shipping Method Europe",
          },
        ],
        "localizedName": undefined,
        "name": "Sample Shipping Method Europe",
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
                  "centAmount": 15000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 1299,
                  "currencyCode": "EUR",
                },
                "tiers": undefined,
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
