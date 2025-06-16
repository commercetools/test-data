import type { TProductDraft } from '../../../types';
import classicCoffeeCup from './classic-coffee-cup';

describe(`with classicCoffeeCup preset`, () => {
  it(`should return a classicCoffeeCup preset`, () => {
    const classicCoffeeCupPreset = classicCoffeeCup().build<TProductDraft>();
    expect(classicCoffeeCupPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Die Classic Coffee Cup ist ein klassisches Trinkgefäß, das zum Servieren von Kaffee in formellen Umgebungen verwendet werden kann. Die Tasse besteht aus Keramik oder Porzellan und hat eine zylindrische Form mit einem Henkel an einer Seite. Es kann schlicht im Design sein und hat eine Kapazität von etwa 6 bis 8 Unzen.  Die Untertasse ist ein kleiner Teller, der rund ist und dazu dient, die Kaffeetasse zu halten, wenn sie nicht verwendet wird. Es besteht aus dem gleichen Material wie die Tasse. Die Untertasse hat einen Rand oder Rand, der leicht erhöht ist, um ein Verschütten zu verhindern.  Beim Servieren von Kaffee in einer Tasse mit Untertasse ist es üblich, auch einen kleinen Löffel zum Umrühren des Kaffees und zum Hinzufügen von Zucker oder Sahne bereitzustellen. Insgesamt ist eine Kaffeetasse mit Untertasse eine klassische und elegante Art, eine Tasse Kaffee zu genießen, und wird oft mit Raffinesse und Raffinesse in Verbindung gebracht.",
          "en": undefined,
          "en-GB": "The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.",
          "en-US": "The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.",
          "fr": undefined,
        },
        "key": "classic-coffee-cup",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Inklusive passender Untertasse
      - Das Set enthält 4 Tassen und Untertassen",
                "en-GB": "- Includes a matching saucer
      - Set includes 4 cups and saucers",
                "en-US": "- Includes a matching saucer
      - Set includes 4 cups and saucers",
              },
            },
            {
              "name": "search-color",
              "value": "white",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color-code",
              "value": "#FFFFFF",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 4153,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.2.jpeg",
            },
          ],
          "key": "classicCoffeeCup01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "6999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 6999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "6999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 6999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "6999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 6999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CCC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Klassische Kaffeetasse",
          "en": undefined,
          "en-GB": "Classic Coffee Cup",
          "en-US": "Classic Coffee Cup",
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
          "de-DE": "klassische-kaffeetasse",
          "en": undefined,
          "en-GB": "classic-coffee-cup",
          "en-US": "classic-coffee-cup",
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

  it(`should return a classicCoffeeCup preset when built for graphql`, () => {
    const classicCoffeeCupPresetGraphql =
      classicCoffeeCup().buildGraphql<TProductDraft>();
    expect(classicCoffeeCupPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.",
          },
          {
            "locale": "en-US",
            "value": "The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.",
          },
          {
            "locale": "de-DE",
            "value": "Die Classic Coffee Cup ist ein klassisches Trinkgefäß, das zum Servieren von Kaffee in formellen Umgebungen verwendet werden kann. Die Tasse besteht aus Keramik oder Porzellan und hat eine zylindrische Form mit einem Henkel an einer Seite. Es kann schlicht im Design sein und hat eine Kapazität von etwa 6 bis 8 Unzen.  Die Untertasse ist ein kleiner Teller, der rund ist und dazu dient, die Kaffeetasse zu halten, wenn sie nicht verwendet wird. Es besteht aus dem gleichen Material wie die Tasse. Die Untertasse hat einen Rand oder Rand, der leicht erhöht ist, um ein Verschütten zu verhindern.  Beim Servieren von Kaffee in einer Tasse mit Untertasse ist es üblich, auch einen kleinen Löffel zum Umrühren des Kaffees und zum Hinzufügen von Zucker oder Sahne bereitzustellen. Insgesamt ist eine Kaffeetasse mit Untertasse eine klassische und elegante Art, eine Tasse Kaffee zu genießen, und wird oft mit Raffinesse und Raffinesse in Verbindung gebracht.",
          },
        ],
        "key": "classic-coffee-cup",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes a matching saucer\\n- Set includes 4 cups and saucers","de-DE":"- Inklusive passender Untertasse\\n- Das Set enthält 4 Tassen und Untertassen","en-US":"- Includes a matching saucer\\n- Set includes 4 cups and saucers"}",
            },
            {
              "name": "search-color",
              "value": ""white"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
            },
            {
              "name": "color-code",
              "value": ""#FFFFFF"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 4153,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.2.jpeg",
            },
          ],
          "key": "classicCoffeeCup01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "6999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 6999,
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
              "key": "6999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 6999,
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
              "key": "6999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 6999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CCC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Classic Coffee Cup",
          },
          {
            "locale": "en-GB",
            "value": "Classic Coffee Cup",
          },
          {
            "locale": "de-DE",
            "value": "Klassische Kaffeetasse",
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
            "value": "classic-coffee-cup",
          },
          {
            "locale": "en-GB",
            "value": "classic-coffee-cup",
          },
          {
            "locale": "de-DE",
            "value": "klassische-kaffeetasse",
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
