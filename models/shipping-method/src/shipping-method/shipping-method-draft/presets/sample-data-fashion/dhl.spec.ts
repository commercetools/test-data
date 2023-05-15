import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../../../types';
import dhlShippingMethod from './dhl';

describe('with dhlShippingMethod preset', () => {
  it('should return a dhlShippingMethod preset', () => {
    const dhlShippingMethodPreset =
      dhlShippingMethod().build<TShippingMethodDraft>();
    expect(dhlShippingMethodPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "dhl",
        "localizedDescription": {
          "de": undefined,
          "en": undefined,
          "en-US": "DHL",
          "fr": undefined,
        },
        "localizedName": undefined,
        "name": "DHL",
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

  it('should return a dhlShippingMethod preset when built for graphql', () => {
    const dhlShippingMethodPresetGraphql =
      dhlShippingMethod().buildGraphql<TShippingMethodDraftGraphql>();
    expect(dhlShippingMethodPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": true,
        "key": "dhl",
        "localizedDescription": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "DHL",
          },
        ],
        "localizedName": undefined,
        "name": "DHL",
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
