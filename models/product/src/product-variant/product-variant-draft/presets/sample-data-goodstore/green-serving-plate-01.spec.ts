import type { TProductVariantDraft } from '../../../types';
import greenServingPlate01 from './green-serving-plate-01';

describe(`with greenServingPlate01 preset`, () => {
  it(`should return a greenServingPlate01 preset`, () => {
    const greenServingPlate01Preset =
      greenServingPlate01().build<TProductVariantDraft>();
    expect(greenServingPlate01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": {
              "de-DE": "Eine stilvolle grüne Servierplatte ist ein Teller, der entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren. Die Platte ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Servierplatte Tiefe und Textur verleiht. Die Form der Platte kann variieren. Einige gebogenen Kanten machen sie visuell zusätzlich interessant. Der Teller hat ein dekoratives Muster und eine Textur.  Eine stilvolle grüne Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist der Teller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen ihn zu einem Blickfang auf jedem Tisch, während seine Stabilität und Praktikabilität dafür sorgen, dass er sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.",
              "en-GB": "A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.",
              "en-US": "A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Teller",
              "en-GB": "- Includes 1 plate",
              "en-US": "- Includes 1 plate",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#00FF00",
              "label": {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4426,
              "w": 4631,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_448085484-pW171SGO.jpeg",
          },
          {
            "dimensions": {
              "h": 3653,
              "w": 5705,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_487645978-EEFXxufp.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });

  it(`should return a greenServingPlate01 preset when built for graphql`, () => {
    const greenServingPlate01PresetGraphql =
      greenServingPlate01().buildGraphql<TProductVariantDraft>();
    expect(greenServingPlate01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": "{"de-DE":"Eine stilvolle grüne Servierplatte ist ein Teller, der entworfen wurde, um Speisen mit einem zusätzlichen Hauch von Eleganz und Raffinesse zu servieren. Die Platte ist in einem stilvollen Grünton gefärbt, der von einem sanften Pastellgrün bis zu einem lebhaften Limettengrün variieren kann. Die Farbe wird durch eine glänzende oder matte Oberfläche ergänzt, die der Servierplatte Tiefe und Textur verleiht. Die Form der Platte kann variieren. Einige gebogenen Kanten machen sie visuell zusätzlich interessant. Der Teller hat ein dekoratives Muster und eine Textur.  Eine stilvolle grüne Servierplatte ist ideal zum Servieren einer Vielzahl von Speisen, einschließlich Vorspeisen, Hauptgerichten und Desserts. Insgesamt ist der Teller eine schöne und funktionale Wahl zum Servieren von Speisen. Sein einzigartiges Design und seine Farbe machen ihn zu einem Blickfang auf jedem Tisch, während seine Stabilität und Praktikabilität dafür sorgen, dass er sowohl für das tägliche Essen als auch für besondere Anlässe verwendet werden kann.","en-GB":"A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions.","en-US":"A stylish green serving plate is a dish designed to serve food with an added touch of elegance and sophistication.   The plate is colored in a stylish green shade, which can vary from a soft pastel green to a vibrant lime green. The color is complemented by a glossy or matte finish, adding depth and texture to the plate.  The shape of the plate can vary, with some curved edges for added visual interest. The plate has a decorative pattern and texture.  A stylish green serving plate is ideal for serving a variety of foods, including appetizers, entrees, and desserts. Overall, a stylish green serving plate is a beautiful and functional choice for serving food. Its unique design and color make it a statement piece on any table, while its durability and practicality ensure it can be used for everyday dining as well as special occasions."}",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4426,
              "width": 4631,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_448085484-pW171SGO.jpeg",
          },
          {
            "dimensions": {
              "height": 3653,
              "width": 5705,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_487645978-EEFXxufp.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
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
            "key": undefined,
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
            "key": undefined,
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
      }
    `);
  });
});
