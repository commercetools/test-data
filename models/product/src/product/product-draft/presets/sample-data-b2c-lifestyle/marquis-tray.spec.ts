import type { TProductDraft } from '../../../types';
import marquisTray from './marquis-tray';

describe(`with marquisTray preset`, () => {
  it(`should return a marquisTray preset`, () => {
    const marquisTrayPreset = marquisTray().build<TProductDraft>();
    expect(marquisTrayPreset).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "cheese-trays",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieses Serviertablett aus Holz ist ideal zum Servieren einer Vielzahl von Speisen und Getränken, einschließlich Vorspeisen, Hauptgerichten, Cocktails und Kaffee. Es kann sowohl in ungezwungener als auch in formeller Umgebung verwendet werden und ist eine beliebte Wahl für Mahlzeiten im Freien, Picknicks und Grillabende.  Serviertabletts aus Holz sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können mit einem feuchten Tuch abgewischt oder mit Wasser und Seife gewaschen werden.  Insgesamt ist ein Serviertablett aus Holz eine funktionale und stilvolle Wahl zum Servieren von Speisen und Getränken. Sein natürliches Material und seine einzigartige Textur verleihen jedem Essbereich Wärme und Charakter, während seine Vielseitigkeit und Praktikabilität es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern machen.",
          "en": undefined,
          "en-GB": "This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.",
          "en-US": "This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.",
          "fr": undefined,
        },
        "key": "marquis-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Tablett",
                "en-GB": "- Includes 1 tray",
                "en-US": "- Includes 1 tray",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Goldene Rute:#DAA520",
                "en-GB": "Golden Rod:#DAA520",
                "en-US": "Golden Rod:#DAA520",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4784,
                "w": 5056,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Marquis_Tray-1.1.jpeg",
            },
          ],
          "key": "marquisTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399EUR",
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
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MWT-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Marquis Tablett",
          "en": undefined,
          "en-GB": "Marquis Tray",
          "en-US": "Marquis Tray",
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
          "de-DE": "marquis-tablett",
          "en": undefined,
          "en-GB": "marquis-tray",
          "en-US": "marquis-tray",
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

  it(`should return a marquisTray preset when built for graphql`, () => {
    const marquisTrayPresetGraphql =
      marquisTray().buildGraphql<TProductDraft>();
    expect(marquisTrayPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "cheese-trays",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.",
          },
          {
            "locale": "en-US",
            "value": "This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.",
          },
          {
            "locale": "de-DE",
            "value": "Dieses Serviertablett aus Holz ist ideal zum Servieren einer Vielzahl von Speisen und Getränken, einschließlich Vorspeisen, Hauptgerichten, Cocktails und Kaffee. Es kann sowohl in ungezwungener als auch in formeller Umgebung verwendet werden und ist eine beliebte Wahl für Mahlzeiten im Freien, Picknicks und Grillabende.  Serviertabletts aus Holz sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können mit einem feuchten Tuch abgewischt oder mit Wasser und Seife gewaschen werden.  Insgesamt ist ein Serviertablett aus Holz eine funktionale und stilvolle Wahl zum Servieren von Speisen und Getränken. Sein natürliches Material und seine einzigartige Textur verleihen jedem Essbereich Wärme und Charakter, während seine Vielseitigkeit und Praktikabilität es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern machen.",
          },
        ],
        "key": "marquis-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 tray","de-DE":"- Enthält 1 Tablett","en-US":"- Includes 1 tray"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Golden Rod:#DAA520","de-DE":"Goldene Rute:#DAA520","en-US":"Golden Rod:#DAA520"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4784,
                "width": 5056,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Marquis_Tray-1.1.jpeg",
            },
          ],
          "key": "marquisTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399EUR",
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
          "sku": "MWT-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Marquis Tray",
          },
          {
            "locale": "en-GB",
            "value": "Marquis Tray",
          },
          {
            "locale": "de-DE",
            "value": "Marquis Tablett",
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
            "value": "marquis-tray",
          },
          {
            "locale": "en-GB",
            "value": "marquis-tray",
          },
          {
            "locale": "de-DE",
            "value": "marquis-tablett",
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
