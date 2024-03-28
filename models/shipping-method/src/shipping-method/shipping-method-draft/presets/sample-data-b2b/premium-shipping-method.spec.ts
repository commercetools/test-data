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
          "de-DE": "Premium -Versandmethode",
          "en": undefined,
          "en-GB": "Premium shipping method",
          "en-US": "Premium shipping method",
          "es-ES": "Método de envío premium",
          "fr": undefined,
          "fr-FR": "Méthode d'expédition premium",
          "it-IT": "Metodo di spedizione premium",
          "nl-NL": "Premium verzendmethode",
          "pt-PT": "Método de envio premium",
        },
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
                "freeAbove": {
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 1000,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": {
                  "centAmount": 10000,
                  "currencyCode": "GBP",
                },
                "price": {
                  "centAmount": 1000,
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
            "value": "Premium -Versandmethode",
          },
          {
            "locale": "en-GB",
            "value": "Premium shipping method",
          },
          {
            "locale": "it-IT",
            "value": "Metodo di spedizione premium",
          },
          {
            "locale": "nl-NL",
            "value": "Premium verzendmethode",
          },
          {
            "locale": "fr-FR",
            "value": "Méthode d'expédition premium",
          },
          {
            "locale": "es-ES",
            "value": "Método de envío premium",
          },
          {
            "locale": "pt-PT",
            "value": "Método de envio premium",
          },
          {
            "locale": "en-US",
            "value": "Premium shipping method",
          },
        ],
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
                "freeAbove": {
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                },
                "price": {
                  "centAmount": 1000,
                  "currencyCode": "EUR",
                },
                "tiers": [],
              },
              {
                "freeAbove": {
                  "centAmount": 10000,
                  "currencyCode": "GBP",
                },
                "price": {
                  "centAmount": 1000,
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
