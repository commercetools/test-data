import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import travelCoffeeMug from './travel-coffee-mug';

describe(`with travelCoffeeMug preset`, () => {
  it(`should return a travelCoffeeMug preset`, () => {
    const travelCoffeeMugPreset = travelCoffeeMug().build<TProductDraft>();
    expect(travelCoffeeMugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
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
          "de-DE": "Diese praktische Reisetasse ist für unterwegs konzipiert. Der Becher hat ein Fassungsvermögen von etwa 12 bis 20 Unzen und ist so konzipiert, dass er Getränke über einen längeren Zeitraum heiß oder kalt hält. Dies wird durch die Verwendung einer Isolierschicht erreicht, die dazu beiträgt, die Temperatur des Getränks im Inneren des Bechers aufrechtzuerhalten.  Die Reisetasse hat eine Vielzahl von Funktionen, darunter einen auslaufsicheren Deckel, der sicher befestigt werden kann, um ein Auslaufen oder Verschütten zu verhindern, und einen Henkel, der das Halten auch beim Gehen oder Fahren erleichtert.  Dieser Reisekaffeebecher ist auf den Gebrauch in Kombination mit Standard-Getränkehaltern in Autos angepasst.  Die Reisetasse ist ein praktisches Trinkgefäß und der ideale Begleiter für all diejenigen, die unterwegs auf ein heißes oder kaltes Getränk nicht verzichten möchten. Seine robuste Konstruktion und sein isoliertes Design machen sie zu einer beliebten Wahl für Pendler, Reisende und Outdoor-Enthusiasten.",
          "en": undefined,
          "en-GB": "The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.",
          "en-US": "The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.",
          "fr": undefined,
        },
        "key": "travel-coffee-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Isoliert
      - Sowohl für kalte als auch heiße Getränke geeignet",
                "en-GB": "- Insulated 
      - Suitable for both cold and hot drinks",
                "en-US": "- Insulated 
      - Suitable for both cold and hot drinks",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Weiß:#FFFFFF",
                "en-GB": "White:#FFFFFF",
                "en-US": "White:#FFFFFF",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Silber:#C0C0C0",
                "en-GB": "Silver:#C0C0C0",
                "en-US": "Silver:#C0C0C0",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 4000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Travel_Coffee_Mug-1.1.jpeg",
            },
          ],
          "key": "travelCoffeeMug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "TCM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Reise-Kaffeetasse",
          "en": undefined,
          "en-GB": "Travel Coffee Mug",
          "en-US": "Travel Coffee Mug",
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
          "de-DE": "reise-kaffeetasse",
          "en": undefined,
          "en-GB": "travel-coffee-mug",
          "en-US": "travel-coffee-mug",
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

  it(`should return a travelCoffeeMug preset when built for graphql`, () => {
    const travelCoffeeMugPresetGraphql =
      travelCoffeeMug().buildGraphql<TProductDraftGraphql>();
    expect(travelCoffeeMugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
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
            "locale": "en-US",
            "value": "The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.",
          },
          {
            "locale": "de-DE",
            "value": "Diese praktische Reisetasse ist für unterwegs konzipiert. Der Becher hat ein Fassungsvermögen von etwa 12 bis 20 Unzen und ist so konzipiert, dass er Getränke über einen längeren Zeitraum heiß oder kalt hält. Dies wird durch die Verwendung einer Isolierschicht erreicht, die dazu beiträgt, die Temperatur des Getränks im Inneren des Bechers aufrechtzuerhalten.  Die Reisetasse hat eine Vielzahl von Funktionen, darunter einen auslaufsicheren Deckel, der sicher befestigt werden kann, um ein Auslaufen oder Verschütten zu verhindern, und einen Henkel, der das Halten auch beim Gehen oder Fahren erleichtert.  Dieser Reisekaffeebecher ist auf den Gebrauch in Kombination mit Standard-Getränkehaltern in Autos angepasst.  Die Reisetasse ist ein praktisches Trinkgefäß und der ideale Begleiter für all diejenigen, die unterwegs auf ein heißes oder kaltes Getränk nicht verzichten möchten. Seine robuste Konstruktion und sein isoliertes Design machen sie zu einer beliebten Wahl für Pendler, Reisende und Outdoor-Enthusiasten.",
          },
          {
            "locale": "en-GB",
            "value": "The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.",
          },
        ],
        "key": "travel-coffee-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Insulated \\n- Suitable for both cold and hot drinks","en-US":"- Insulated \\n- Suitable for both cold and hot drinks","de-DE":"- Isoliert\\n- Sowohl für kalte als auch heiße Getränke geeignet"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"Silver:#C0C0C0","en-GB":"Silver:#C0C0C0","de-DE":"Silber:#C0C0C0"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 4000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Travel_Coffee_Mug-1.1.jpeg",
            },
          ],
          "key": "travelCoffeeMug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
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
              "key": "499GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
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
              "key": "499USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "TCM-03",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Travel Coffee Mug",
          },
          {
            "locale": "en-GB",
            "value": "Travel Coffee Mug",
          },
          {
            "locale": "de-DE",
            "value": "Reise-Kaffeetasse",
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
            "value": "travel-coffee-mug",
          },
          {
            "locale": "en-GB",
            "value": "travel-coffee-mug",
          },
          {
            "locale": "de-DE",
            "value": "reise-kaffeetasse",
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
