import type { TProductDraft } from '../../../types';
import modernCeramicPlate from './modern-ceramic-plate';

describe(`with modernCeramicPlate preset`, () => {
  it(`should return a modernCeramicPlate preset`, () => {
    const modernCeramicPlatePreset =
      modernCeramicPlate().build<TProductDraft>();
    expect(modernCeramicPlatePreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein Keramikteller ist ein klassischer und vielseitiger Teller, der zum Servieren einer Vielzahl von Speisen verwendet wird. Der Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen der Speisen zu verhindern. Keramische Essteller eignen sich ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in zwanglosem als auch in formellem Rahmen verwendet werden und sind sowohl in Restaurants als auch in Privathaushalten eine beliebte Wahl.  Keramische Essteller sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gereinigt werden. Insgesamt ist ein Keramikteller eine klassische und funktionelle Wahl für das Servieren von Speisen. Seine Schlichtheit und Langlebigkeit machen ihn zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht ihn für eine Reihe von Essanlässen geeignet.",
          "en": undefined,
          "en-GB": "A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.",
          "en-US": "A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.",
          "fr": undefined,
        },
        "key": "modern-ceramic-plate",
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
              "name": "color",
              "value": {
                "de-DE": "#FFF",
                "en-GB": "#FFF",
                "en-US": "#FFF",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFF",
                "label": {
                  "de-DE": "Weiss",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4576,
                "w": 5088,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Ceramic_Plate-1.1.jpeg",
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
              "key": undefined,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MCP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Moderne Keramikplatte",
          "en": undefined,
          "en-GB": "Modern Ceramic Plate",
          "en-US": "Modern Ceramic Plate",
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
          "de-DE": "moderne-keramikplatte",
          "en": undefined,
          "en-GB": "modern-ceramic-plate",
          "en-US": "modern-ceramic-plate",
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

  it(`should return a modernCeramicPlate preset when built for graphql`, () => {
    const modernCeramicPlatePresetGraphql =
      modernCeramicPlate().buildGraphql<TProductDraft>();
    expect(modernCeramicPlatePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "plates",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "serveware",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "cheese-trays",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein Keramikteller ist ein klassischer und vielseitiger Teller, der zum Servieren einer Vielzahl von Speisen verwendet wird. Der Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen der Speisen zu verhindern. Keramische Essteller eignen sich ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in zwanglosem als auch in formellem Rahmen verwendet werden und sind sowohl in Restaurants als auch in Privathaushalten eine beliebte Wahl.  Keramische Essteller sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gereinigt werden. Insgesamt ist ein Keramikteller eine klassische und funktionelle Wahl für das Servieren von Speisen. Seine Schlichtheit und Langlebigkeit machen ihn zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht ihn für eine Reihe von Essanlässen geeignet.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.",
          },
        ],
        "key": "modern-ceramic-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4576,
                "width": 5088,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Ceramic_Plate-1.1.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
          "sku": "MCP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Modern Ceramic Plate",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Moderne Keramikplatte",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Modern Ceramic Plate",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "modern-ceramic-plate",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "moderne-keramikplatte",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "modern-ceramic-plate",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
