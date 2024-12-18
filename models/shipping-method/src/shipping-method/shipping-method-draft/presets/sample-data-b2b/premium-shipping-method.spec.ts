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
        "localizedDescription": {
          "de": undefined,
          "de-DE": "2-3 Wochen",
          "en": undefined,
          "en-GB": "2-3 weeks",
          "en-US": "2-3 weeks",
          "es-ES": "2-3 semanas",
          "fr": undefined,
          "fr-FR": "2-3 settimane",
          "it-IT": "2-3 semaines",
          "nl-NL": "2-3 weken",
          "pt-PT": "2-3 semanas",
        },
        "localizedName": {
          "de": undefined,
          "de-DE": "Premium-Versand",
          "en": undefined,
          "en-GB": "Premium shipping",
          "en-US": "Premium shipping",
          "es-ES": "Envío Premium",
          "fr": undefined,
          "fr-FR": "Spedizione premium",
          "it-IT": "Expédition Premium",
          "nl-NL": "Premium verzending",
          "pt-PT": "Transporte Premium",
        },
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
                "freeAbove": {
                  "centAmount": 1000000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": {
                  "centAmount": 1000000,
                  "currencyCode": "GBP",
                },
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

  it(`should return a premiumShippingMethod preset when built for graphql`, () => {
    const premiumShippingMethodPresetGraphql =
      premiumShippingMethod().buildGraphql<TShippingMethodDraft>();
    expect(premiumShippingMethodPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "isDefault": false,
        "key": "premium-shipping-method",
        "localizedDescription": [
          {
            "locale": "de-DE",
            "value": "2-3 Wochen",
          },
          {
            "locale": "en-GB",
            "value": "2-3 weeks",
          },
          {
            "locale": "en-US",
            "value": "2-3 weeks",
          },
          {
            "locale": "es-ES",
            "value": "2-3 semanas",
          },
          {
            "locale": "it-IT",
            "value": "2-3 semaines",
          },
          {
            "locale": "fr-FR",
            "value": "2-3 settimane",
          },
          {
            "locale": "nl-NL",
            "value": "2-3 weken",
          },
          {
            "locale": "pt-PT",
            "value": "2-3 semanas",
          },
        ],
        "localizedName": [
          {
            "locale": "de-DE",
            "value": "Premium-Versand",
          },
          {
            "locale": "en-GB",
            "value": "Premium shipping",
          },
          {
            "locale": "en-US",
            "value": "Premium shipping",
          },
          {
            "locale": "es-ES",
            "value": "Envío Premium",
          },
          {
            "locale": "it-IT",
            "value": "Expédition Premium",
          },
          {
            "locale": "fr-FR",
            "value": "Spedizione premium",
          },
          {
            "locale": "nl-NL",
            "value": "Premium verzending",
          },
          {
            "locale": "pt-PT",
            "value": "Transporte Premium",
          },
        ],
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
                "freeAbove": {
                  "centAmount": 1000000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": {
                  "centAmount": 1000000,
                  "currencyCode": "GBP",
                },
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
