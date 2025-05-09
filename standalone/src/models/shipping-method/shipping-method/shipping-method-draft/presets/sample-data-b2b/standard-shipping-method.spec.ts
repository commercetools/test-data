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
        "localizedDescription": {
          "de": undefined,
          "de-DE": "4-6 Wochen",
          "en": undefined,
          "en-GB": "4-6 weeks",
          "en-US": "4-6 weeks",
          "es-ES": "4-6 semanas",
          "fr": undefined,
          "fr-FR": "4-6 semaines",
          "it-IT": "4-6 settimane",
          "nl-NL": "4-6 weken",
          "pt-PT": "4-6 semanas",
        },
        "localizedName": {
          "de": undefined,
          "de-DE": "Standardversand",
          "en": undefined,
          "en-GB": "Standard shipping",
          "en-US": "Standard shipping",
          "es-ES": "Envío estándar",
          "fr": undefined,
          "fr-FR": "Expédition standard",
          "it-IT": "Spedizione standard",
          "nl-NL": "Standaard verzending",
          "pt-PT": "Envio normal",
        },
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
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "centAmount": 1000000,
                  "currencyCode": "USD",
                },
                "price": {
                  "centAmount": 10000,
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
        "localizedDescription": [
          {
            "locale": "de-DE",
            "value": "4-6 Wochen",
          },
          {
            "locale": "en-GB",
            "value": "4-6 weeks",
          },
          {
            "locale": "en-US",
            "value": "4-6 weeks",
          },
          {
            "locale": "es-ES",
            "value": "4-6 semanas",
          },
          {
            "locale": "fr-FR",
            "value": "4-6 semaines",
          },
          {
            "locale": "it-IT",
            "value": "4-6 settimane",
          },
          {
            "locale": "nl-NL",
            "value": "4-6 weken",
          },
          {
            "locale": "pt-PT",
            "value": "4-6 semanas",
          },
        ],
        "localizedName": [
          {
            "locale": "de-DE",
            "value": "Standardversand",
          },
          {
            "locale": "en-GB",
            "value": "Standard shipping",
          },
          {
            "locale": "en-US",
            "value": "Standard shipping",
          },
          {
            "locale": "es-ES",
            "value": "Envío estándar",
          },
          {
            "locale": "fr-FR",
            "value": "Expédition standard",
          },
          {
            "locale": "it-IT",
            "value": "Spedizione standard",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard verzending",
          },
          {
            "locale": "pt-PT",
            "value": "Envio normal",
          },
        ],
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
          {
            "shippingRates": [
              {
                "freeAbove": {
                  "centAmount": 1000000,
                  "currencyCode": "USD",
                },
                "price": {
                  "centAmount": 10000,
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
