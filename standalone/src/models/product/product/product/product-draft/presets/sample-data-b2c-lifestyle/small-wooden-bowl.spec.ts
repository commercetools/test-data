import type { TProductDraft } from '../../../types';
import smallWoodenBowl from './small-wooden-bowl';

describe(`with smallWoodenBowl preset`, () => {
  it(`should return a smallWoodenBowl preset`, () => {
    const smallWoodenBowlPreset = smallWoodenBowl().build<TProductDraft>();
    expect(smallWoodenBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Diese Holzschale ist so konzipiert, dass sie kleinere Snacks oder andere Gegenstände fassen kann. Sie eignet sich ideal zum Servieren kleiner Portionen wie Nüsse, Bonbons, Dips oder Saucen.  Sie kann aber auch als Dekorationsartikel verwendet werden, da ihr natürliches Material und die einzigartige Textur jeder Umgebung Wärme und Charakter verleihen. Die Schale kann eigenständig oder als Teil eines größeren Sets ihre Wirkung entfalten. Sie kann zudem mit anderen Holz-Accessoires gestylt werden, um einen zusammenhängenden Look zu schaffen.  Die Schale ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen oder mit einem feuchten Tuch abgewischt werden. Sie sollte vor Gebrauch gründlich trocknen, um ein Verziehen oder Reißen zu vermeiden.  Eine kleine runde Holzschale ist ein vielseitiges und funktionales Geschirr- oder Dekorations-Element, das jeder Umgebung einen Hauch von natürlicher Wärme und Charakter verleiht. Die Schlichtheit und Haltbarkeit machen sie zur perfekten Ergänzung in vielen Küchen und Esszimmern.",
          "en": undefined,
          "en-GB": "This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.",
          "en-US": "This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.",
          "fr": undefined,
        },
        "key": "small-wooden-bowl",
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
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Braun",
                  "en-GB": "Brown",
                  "en-US": "Brown",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Sattel braun",
                "en-GB": "Saddle Brown",
                "en-US": "Saddle Brown",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#8b4513",
                "en-GB": "#8b4513",
                "en-US": "#8b4513",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 3241,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3456,
                "w": 5184,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 4096,
                "w": 6144,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.4.jpeg",
            },
            {
              "dimensions": {
                "h": 5133,
                "w": 7696,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.2.jpeg",
            },
          ],
          "key": "smallWoodenBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SWB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kleine Holzschale",
          "en": undefined,
          "en-GB": "Small Wooden Bowl",
          "en-US": "Small Wooden Bowl",
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
          "de-DE": "kleine-holzschale",
          "en": undefined,
          "en-GB": "small-wooden-bowl",
          "en-US": "small-wooden-bowl",
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

  it(`should return a smallWoodenBowl preset when built for graphql`, () => {
    const smallWoodenBowlPresetGraphql =
      smallWoodenBowl().buildGraphql<TProductDraft>();
    expect(smallWoodenBowlPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.",
          },
          {
            "locale": "en-US",
            "value": "This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.",
          },
          {
            "locale": "de-DE",
            "value": "Diese Holzschale ist so konzipiert, dass sie kleinere Snacks oder andere Gegenstände fassen kann. Sie eignet sich ideal zum Servieren kleiner Portionen wie Nüsse, Bonbons, Dips oder Saucen.  Sie kann aber auch als Dekorationsartikel verwendet werden, da ihr natürliches Material und die einzigartige Textur jeder Umgebung Wärme und Charakter verleihen. Die Schale kann eigenständig oder als Teil eines größeren Sets ihre Wirkung entfalten. Sie kann zudem mit anderen Holz-Accessoires gestylt werden, um einen zusammenhängenden Look zu schaffen.  Die Schale ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen oder mit einem feuchten Tuch abgewischt werden. Sie sollte vor Gebrauch gründlich trocknen, um ein Verziehen oder Reißen zu vermeiden.  Eine kleine runde Holzschale ist ein vielseitiges und funktionales Geschirr- oder Dekorations-Element, das jeder Umgebung einen Hauch von natürlicher Wärme und Charakter verleiht. Die Schlichtheit und Haltbarkeit machen sie zur perfekten Ergänzung in vielen Küchen und Esszimmern.",
          },
        ],
        "key": "small-wooden-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 bowl","en-US":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#8b4513","en-GB":"#8b4513","de-DE":"#8b4513"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 3241,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3456,
                "width": 5184,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 4096,
                "width": 6144,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.4.jpeg",
            },
            {
              "dimensions": {
                "height": 5133,
                "width": 7696,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.2.jpeg",
            },
          ],
          "key": "smallWoodenBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 399,
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
              "key": "399GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 399,
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
              "key": "399USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 399,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SWB-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Small Wooden Bowl",
          },
          {
            "locale": "en-GB",
            "value": "Small Wooden Bowl",
          },
          {
            "locale": "de-DE",
            "value": "Kleine Holzschale",
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
            "value": "small-wooden-bowl",
          },
          {
            "locale": "en-GB",
            "value": "small-wooden-bowl",
          },
          {
            "locale": "de-DE",
            "value": "kleine-holzschale",
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
