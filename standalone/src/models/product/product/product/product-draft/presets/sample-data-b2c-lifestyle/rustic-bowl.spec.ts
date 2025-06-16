import type { TProductDraft } from '../../../types';
import rusticBowl from './rustic-bowl';

describe(`with rusticBowl preset`, () => {
  it(`should return a rusticBowl preset`, () => {
    const rusticBowlPreset = rusticBowl().build<TProductDraft>();
    expect(rusticBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Diese quadratische Holzschale bietet vielfältige Einsatzmöglichkeiten - vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Sie fügt sich ideal in jede ungezwungene oder rustikale Speiseumgebungen ein und verleiht jedem Tisch einen Hauch von Wärme und natürlicher Schönheit. Die quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Ihre natürliche Schönheit und Langlebigkeit bietet verschiedene Einsatzmöglichkeiten in der Küche und als Servierobjekt bei unterschiedlichen Anlässen.",
          "en": undefined,
          "en-GB": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
          "en-US": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
          "fr": undefined,
        },
        "key": "rustic-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Schüssel",
                "en-GB": "- Includes 1 bowl",
                "en-US": "- Includes 1 bowl",
              },
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Braun",
                  "en-GB": "Brown",
                  "en-US": "Brown",
                },
              ],
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            },
            {
              "name": "finish-code",
              "value": "#a52a2a",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3280,
                "w": 5105,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Bowl-1.1.jpeg",
            },
          ],
          "key": "rusticBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rustikale Schale",
          "en": undefined,
          "en-GB": "Rustic Bowl",
          "en-US": "Rustic Bowl",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "rustikale-schale",
          "en": undefined,
          "en-GB": "rustic-bowl",
          "en-US": "rustic-bowl",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a rusticBowl preset when built for graphql`, () => {
    const rusticBowlPresetGraphql = rusticBowl().buildGraphql<TProductDraft>();
    expect(rusticBowlPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
          },
          {
            "locale": "en-US",
            "value": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
          },
          {
            "locale": "de-DE",
            "value": "Diese quadratische Holzschale bietet vielfältige Einsatzmöglichkeiten - vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Sie fügt sich ideal in jede ungezwungene oder rustikale Speiseumgebungen ein und verleiht jedem Tisch einen Hauch von Wärme und natürlicher Schönheit. Die quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Ihre natürliche Schönheit und Langlebigkeit bietet verschiedene Einsatzmöglichkeiten in der Küche und als Servierobjekt bei unterschiedlichen Anlässen.",
          },
        ],
        "key": "rustic-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 bowl","en-US":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel"}",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Brown","de-DE":"Braun","en-US":"Brown"}",
            },
            {
              "name": "finish-code",
              "value": ""#a52a2a"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3280,
                "width": 5105,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Bowl-1.1.jpeg",
            },
          ],
          "key": "rusticBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 199,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 199,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 199,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Rustic Bowl",
          },
          {
            "locale": "en-GB",
            "value": "Rustic Bowl",
          },
          {
            "locale": "de-DE",
            "value": "Rustikale Schale",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "rustic-bowl",
          },
          {
            "locale": "en-GB",
            "value": "rustic-bowl",
          },
          {
            "locale": "de-DE",
            "value": "rustikale-schale",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
