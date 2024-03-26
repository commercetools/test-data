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
          "de-DE": "Standardversandmethode",
          "en": undefined,
          "en-GB": "Standard shipping method",
          "en-US": "Standard shipping method",
          "es-ES": "Método de envío estándar",
          "fr": undefined,
          "fr-FR": "Méthode d'expédition standard",
          "it-IT": "Metodo di spedizione standard",
          "nl-NL": "Standaard verzendmethode",
          "pt-PT": "Método de envio padrão",
        },
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
                "freeAbove": {
                  "centAmount": 5000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 500,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": {
                  "centAmount": 5000,
                  "currencyCode": "GBP",
                },
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
                "freeAbove": {
                  "centAmount": 5000,
                  "currencyCode": "USD",
                },
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
        "localizedDescription": [
          {
            "locale": "de-DE",
            "value": "Standardversandmethode",
          },
          {
            "locale": "en-GB",
            "value": "Standard shipping method",
          },
          {
            "locale": "it-IT",
            "value": "Metodo di spedizione standard",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard verzendmethode",
          },
          {
            "locale": "fr-FR",
            "value": "Méthode d'expédition standard",
          },
          {
            "locale": "es-ES",
            "value": "Método de envío estándar",
          },
          {
            "locale": "pt-PT",
            "value": "Método de envio padrão",
          },
          {
            "locale": "en-US",
            "value": "Standard shipping method",
          },
        ],
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
                "freeAbove": {
                  "centAmount": 5000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 500,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": {
                  "centAmount": 5000,
                  "currencyCode": "GBP",
                },
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
                "freeAbove": {
                  "centAmount": 5000,
                  "currencyCode": "USD",
                },
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
