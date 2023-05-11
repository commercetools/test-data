import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../../../types';
import ups from './ups';

describe('with upsShippingMethod preset', () => {
  it('should return a ups preset', () => {
    const upsPreset = ups().build<TShippingMethodDraft>();
    expect(upsPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "ups",
        "localizedDescription": {
          "de": undefined,
          "en": undefined,
          "en-US": "UPS",
          "fr": undefined,
        },
        "localizedName": undefined,
        "name": "UPS",
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

  it('should return a ups preset when built for graphql', () => {
    const upsPresetGraphql = ups().buildGraphql<TShippingMethodDraftGraphql>();
    expect(upsPresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ShippingMethodDraft",
        "custom": undefined,
        "isDefault": false,
        "key": "ups",
        "localizedDescription": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "UPS",
          },
        ],
        "localizedName": undefined,
        "name": "UPS",
        "predicate": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "zoneRates": [
          {
            "__typename": "ZoneRateDraft",
            "shippingRates": [
              {
                "__typename": "ShippingRateDraft",
                "freeAbove": {
                  "__typename": "BaseMoneyInput",
                  "centAmount": 10000,
                  "currencyCode": "USD",
                },
                "price": {
                  "__typename": "BaseMoneyInput",
                  "centAmount": 1299,
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
          {
            "__typename": "ZoneRateDraft",
            "shippingRates": [
              {
                "__typename": "ShippingRateDraft",
                "freeAbove": {
                  "__typename": "BaseMoneyInput",
                  "centAmount": 20000,
                  "currencyCode": "AUD",
                },
                "price": {
                  "__typename": "BaseMoneyInput",
                  "centAmount": 2000,
                  "currencyCode": "AUD",
                },
                "tiers": [],
              },
            ],
            "zone": {
              "__typename": "Reference",
              "key": "australia",
              "typeId": "zone",
            },
          },
        ],
      }
    `);
  });
});
