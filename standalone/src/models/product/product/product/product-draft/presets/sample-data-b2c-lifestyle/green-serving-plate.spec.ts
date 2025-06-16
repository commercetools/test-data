import type { TProductDraft } from '../../../types';
import greenServingPlate from './green-serving-plate';

describe(`with greenServingPlate preset`, () => {
  it(`should return a greenServingPlate preset`, () => {
    const greenServingPlatePreset = greenServingPlate().build<TProductDraft>();
    expect(greenServingPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "plates",
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
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Eine stilvolle grüne Servierplatte ist ein Teller, der entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren. Die Platte ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Servierplatte Tiefe und Textur verleiht. Die Form der Platte kann variieren. Einige gebogenen Kanten machen sie visuell zusätzlich interessant. Der Teller hat ein dekoratives Muster und eine Textur.  Eine stilvolle grüne Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist der Teller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen ihn zu einem Blickfang auf jedem Tisch, während seine Stabilität und Praktikabilität dafür sorgen, dass er sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.",
          "en": undefined,
          "en-GB": "A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.",
          "en-US": "A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.",
          "fr": undefined,
        },
        "key": "green-serving-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Teller",
                "en-GB": "- Includes 1 plate",
                "en-US": "- Includes 1 plate",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Grün",
                  "en-GB": "Green",
                  "en-US": "Green",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
              },
            },
            {
              "name": "color-code",
              "value": "#008000",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4426,
                "w": 4631,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3653,
                "w": 5705,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.2.jpeg",
            },
          ],
          "key": "greenServingPlate01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 599,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "GC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Grüne Servierplatte",
          "en": undefined,
          "en-GB": "Green Serving Plate",
          "en-US": "Green Serving Plate",
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
          "de-DE": "grne-servierplatte",
          "en": undefined,
          "en-GB": "green-serving-plate",
          "en-US": "green-serving-plate",
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

  it(`should return a greenServingPlate preset when built for graphql`, () => {
    const greenServingPlatePresetGraphql =
      greenServingPlate().buildGraphql<TProductDraft>();
    expect(greenServingPlatePresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "plates",
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
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Eine stilvolle grüne Servierplatte ist ein Teller, der entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren. Die Platte ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Servierplatte Tiefe und Textur verleiht. Die Form der Platte kann variieren. Einige gebogenen Kanten machen sie visuell zusätzlich interessant. Der Teller hat ein dekoratives Muster und eine Textur.  Eine stilvolle grüne Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist der Teller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen ihn zu einem Blickfang auf jedem Tisch, während seine Stabilität und Praktikabilität dafür sorgen, dass er sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.",
          },
          {
            "locale": "en-GB",
            "value": "A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.",
          },
          {
            "locale": "en-US",
            "value": "A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.",
          },
        ],
        "key": "green-serving-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Green","de-DE":"Grün","en-US":"Green"}",
            },
            {
              "name": "color-code",
              "value": ""#008000"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4426,
                "width": 4631,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3653,
                "width": 5705,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.2.jpeg",
            },
          ],
          "key": "greenServingPlate01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
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
              "key": "599GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
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
              "key": "599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "GC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Green Serving Plate",
          },
          {
            "locale": "en-GB",
            "value": "Green Serving Plate",
          },
          {
            "locale": "de-DE",
            "value": "Grüne Servierplatte",
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
            "value": "green-serving-plate",
          },
          {
            "locale": "en-GB",
            "value": "green-serving-plate",
          },
          {
            "locale": "de-DE",
            "value": "grne-servierplatte",
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
