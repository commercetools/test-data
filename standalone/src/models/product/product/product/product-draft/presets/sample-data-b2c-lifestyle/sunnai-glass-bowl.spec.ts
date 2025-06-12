import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import sunnaiGlassBowl from './sunnai-glass-bowl';

describe(`with sunnaiGlassBowl preset`, () => {
  it(`should return a sunnaiGlassBowl preset`, () => {
    const sunnaiGlassBowlPreset = sunnaiGlassBowl().build<TProductDraft>();

    expect(sunnaiGlassBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bakeware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Diese Glasschalen eignen sich ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.

      Das Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.

      Die Glasschale ist eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Ihre Transparenz und Schlichtheit machen sie zu einem vielseitigen und zeitlosen Begleiter, der für eine Vielzahl von Anlässen verwendet werden kann.
      ",
          "en": undefined,
          "en-GB": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

      The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

      Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.",
          "en-US": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

      The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

      Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.",
          "fr": undefined,
        },
        "key": "sunnai-glass-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": [
                {
                  "en-GB": "Round",
                },
              ],
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Transparent",
                  "en-GB": "Transparent",
                  "en-US": "Transparent",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Glas",
                  "en-GB": "Glass",
                  "en-US": "Glass",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Transparent",
                "en-GB": "Transparent",
                "en-US": "Transparent",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Glas",
                "en-GB": "Glass",
                "en-US": "Glass",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "transparent",
                "en-GB": "transparent",
                "en-US": "transparent",
              },
            },
            {
              "name": "finish-code",
              "value": {
                "de-DE": "transparent",
                "en-GB": "transparent",
                "en-US": "transparent",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3739,
                "w": 5381,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg",
            },
          ],
          "key": "sunnaiGlassBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "799EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 799,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "799GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 799,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "799USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 799,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SGB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Glasschale >Sunnai<",
          "en": undefined,
          "en-GB": "Sunnai Glass Bowl",
          "en-US": "Sunnai Glass Bowl",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "product-sets",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "sunnai-glaskugel",
          "en": undefined,
          "en-GB": "sunnai-glass-bowl",
          "en-US": "sunnai-glass-bowl",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "type",
                "value": [
                  {
                    "en-GB": "Deep",
                  },
                ],
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Transparent",
                    "en-GB": "Transparent",
                    "en-US": "Transparent",
                  },
                ],
              },
              {
                "name": "search-finish",
                "value": [
                  {
                    "de-DE": "Glas",
                    "en-GB": "Glass",
                    "en-US": "Glass",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Transparent",
                  "en-GB": "Transparent",
                  "en-US": "Transparent",
                },
              },
              {
                "name": "finish-label",
                "value": {
                  "de-DE": "Glas",
                  "en-GB": "Glass",
                  "en-US": "Glass",
                },
              },
              {
                "name": "color-code",
                "value": {
                  "de-DE": "transparent",
                  "en-GB": "transparent",
                  "en-US": "transparent",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "transparent",
                  "en-GB": "transparent",
                  "en-US": "transparent",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3288,
                  "w": 4944,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-2.1.jpeg",
              },
            ],
            "key": "sunnaiGlassBowl02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 899,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 899,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 899,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "SGB-02",
          },
        ],
      }
    `);
  });

  it(`should return a sunnaiGlassBowl preset when built for graphql`, () => {
    const sunnaiGlassBowlPresetGraphql =
      sunnaiGlassBowl().buildGraphql<TProductDraftGraphql>();

    expect(sunnaiGlassBowlPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bakeware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

      The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

      Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.",
          },
          {
            "locale": "en-GB",
            "value": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

      The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

      Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.",
          },
          {
            "locale": "de-DE",
            "value": "Diese Glasschalen eignen sich ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.

      Das Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.

      Die Glasschale ist eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Ihre Transparenz und Schlichtheit machen sie zu einem vielseitigen und zeitlosen Begleiter, der für eine Vielzahl von Anlässen verwendet werden kann.
      ",
          },
        ],
        "key": "sunnai-glass-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": "[{"en-GB":"Round"}]",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Transparent","en-GB":"Transparent","de-DE":"Transparent"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Glass","en-GB":"Glass","de-DE":"Glas"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3739,
                "width": 5381,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg",
            },
          ],
          "key": "sunnaiGlassBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "799EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 799,
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
              "key": "799GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 799,
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
              "key": "799USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 799,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SGB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sunnai Glass Bowl",
          },
          {
            "locale": "en-GB",
            "value": "Sunnai Glass Bowl",
          },
          {
            "locale": "de-DE",
            "value": "Glasschale >Sunnai<",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "product-sets",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sunnai-glass-bowl",
          },
          {
            "locale": "en-GB",
            "value": "sunnai-glass-bowl",
          },
          {
            "locale": "de-DE",
            "value": "sunnai-glaskugel",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "type",
                "value": "[{"en-GB":"Deep"}]",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Transparent","en-GB":"Transparent","de-DE":"Transparent"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Glass","en-GB":"Glass","de-DE":"Glas"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3288,
                  "width": 4944,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-2.1.jpeg",
              },
            ],
            "key": "sunnaiGlassBowl02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 899,
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
                "key": "899GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 899,
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
                "key": "899USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 899,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "SGB-02",
          },
        ],
      }
    `);
  });
});
