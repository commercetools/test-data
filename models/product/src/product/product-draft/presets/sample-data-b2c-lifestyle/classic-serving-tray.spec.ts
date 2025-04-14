import type { TProductDraft } from '../../../types';
import classicServingTray from './classic-serving-tray';

describe(`with classicServingTray preset`, () => {
  it(`should return a classicServingTray preset`, () => {
    const classicServingTrayPreset =
      classicServingTray().build<TProductDraft>();
    expect(classicServingTrayPreset).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieses klassische Serviertablett ist ein vielseitiger und funktionaler Artikel. Das Tablett ist rechteckig, mit erhöhten Kanten und Griffen auf beiden Seiten, wodurch es leicht zu tragen und zu transportieren ist.  Dieses klassische Serviertablett zeichnet sich durch ein einfaches und zeitloses Design mit klaren Linien und einer minimalistischen Ästhetik aus. Es kann für eine Vielzahl von Zwecken verwendet werden, z. B. zum Transport von Getränken und Häppchen, zum Servieren des Frühstücks am Bett oder zum Präsentieren von Dekorationsgegenständen.  Zur Reinigung wird empfohlen, es mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm von Hand zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die Oberfläche des Tabletts beschädigen können. Zusammengefasst handelt es sich um ein klassisches Serviertablett mit praktischen und stilvollen Elementen, welches jeder Umgebung einen Hauch von Raffinesse verleiht. Sein zeitloses Design und seine Vielseitigkeit machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.",
          "en": undefined,
          "en-GB": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
          "en-US": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
          "fr": undefined,
        },
        "key": "classic-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Aus lebensmittelechtem Kunststoff",
                "en-GB": "- Made of food-grade plastic",
                "en-US": "- Made of food-grade plastic",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 4000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4160,
                "w": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.2.jpeg",
            },
          ],
          "key": "classicServingTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CST-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Klassisches Serviertablett",
          "en": undefined,
          "en-GB": "Classic Serving Tray",
          "en-US": "Classic Serving Tray",
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
          "de-DE": "klassisches-serviertablett",
          "en": undefined,
          "en-GB": "classic-serving-tray",
          "en-US": "classic-serving-tray",
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

  it(`should return a classicServingTray preset when built for graphql`, () => {
    const classicServingTrayPresetGraphql =
      classicServingTray().buildGraphql<TProductDraft>();
    expect(classicServingTrayPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
          },
          {
            "locale": "en-US",
            "value": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
          },
          {
            "locale": "de-DE",
            "value": "Dieses klassische Serviertablett ist ein vielseitiger und funktionaler Artikel. Das Tablett ist rechteckig, mit erhöhten Kanten und Griffen auf beiden Seiten, wodurch es leicht zu tragen und zu transportieren ist.  Dieses klassische Serviertablett zeichnet sich durch ein einfaches und zeitloses Design mit klaren Linien und einer minimalistischen Ästhetik aus. Es kann für eine Vielzahl von Zwecken verwendet werden, z. B. zum Transport von Getränken und Häppchen, zum Servieren des Frühstücks am Bett oder zum Präsentieren von Dekorationsgegenständen.  Zur Reinigung wird empfohlen, es mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm von Hand zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die Oberfläche des Tabletts beschädigen können. Zusammengefasst handelt es sich um ein klassisches Serviertablett mit praktischen und stilvollen Elementen, welches jeder Umgebung einen Hauch von Raffinesse verleiht. Sein zeitloses Design und seine Vielseitigkeit machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.",
          },
        ],
        "key": "classic-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Made of food-grade plastic","de-DE":"- Aus lebensmittelechtem Kunststoff","en-US":"- Made of food-grade plastic"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 4000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4160,
                "width": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Serving_Tray-1.2.jpeg",
            },
          ],
          "key": "classicServingTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
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
              "key": "299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
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
              "key": "299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CST-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Classic Serving Tray",
          },
          {
            "locale": "en-GB",
            "value": "Classic Serving Tray",
          },
          {
            "locale": "de-DE",
            "value": "Klassisches Serviertablett",
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
            "value": "classic-serving-tray",
          },
          {
            "locale": "en-GB",
            "value": "classic-serving-tray",
          },
          {
            "locale": "de-DE",
            "value": "klassisches-serviertablett",
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
