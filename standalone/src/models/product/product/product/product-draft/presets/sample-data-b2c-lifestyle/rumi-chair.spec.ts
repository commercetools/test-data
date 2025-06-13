import type { TProductDraft } from '../../../types';
import rumiChair from './rumi-chair';

describe(`with rumiChair preset`, () => {
  it(`should return a rumiChair preset`, () => {
    const rumiChairPreset = rumiChair().build<TProductDraft>();
    expect(rumiChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein malvenfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die lila Farbe des Samtstoffs ist sanft und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Weiblichkeit.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus fliederfarbenem Samt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement Piece in jedem Raum. Die Rückenlehne des Stuhls ist hoch und geschwungen im Design, sodass sie Rücken und Schultern zu stützt. Der Stuhl ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          "en": undefined,
          "en-GB": "A lilac velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The lilac color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the lilac velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "en-US": "A lilac velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The lilac color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the lilac velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "fr": undefined,
        },
        "key": "rumi-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Nur chemische Reinigung",
                "en-GB": "- Dry clean only",
                "en-US": "- Dry clean only",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Rosa",
                  "en-GB": "Pink",
                  "en-US": "Pink",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Gold",
                  "en-GB": "Gold",
                  "en-US": "Gold",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Lavendel",
                "en-GB": "Lavender Blush",
                "en-US": "Lavender Blush",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#fff0f5",
                "en-GB": "#fff0f5",
                "en-US": "#fff0f5",
              },
            },
            {
              "name": "finish-code",
              "value": {
                "de-DE": "#FFD700",
                "en-GB": "#FFD700",
                "en-US": "#FFD700",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3200,
                "w": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rumi_Chair-1.1.jpeg",
            },
          ],
          "key": "rumiChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "12999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 12999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "12999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 12999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "15000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 15000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RAM-094",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Stuhl >Rumi<",
          "en": undefined,
          "en-GB": "Rumi Chair",
          "en-US": "Rumi Chair",
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
          "de-DE": "rumi-stuhl",
          "en": undefined,
          "en-GB": "rumi-chair",
          "en-US": "rumi-chair",
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

  it(`should return a rumiChair preset when built for graphql`, () => {
    const rumiChairPresetGraphql = rumiChair().buildGraphql<TProductDraft>();
    expect(rumiChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A lilac velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The lilac color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the lilac velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          },
          {
            "locale": "en-US",
            "value": "A lilac velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The lilac color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the lilac velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          },
          {
            "locale": "de-DE",
            "value": "Ein malvenfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die lila Farbe des Samtstoffs ist sanft und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Weiblichkeit.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus fliederfarbenem Samt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement Piece in jedem Raum. Die Rückenlehne des Stuhls ist hoch und geschwungen im Design, sodass sie Rücken und Schultern zu stützt. Der Stuhl ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          },
        ],
        "key": "rumi-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Pink","en-GB":"Pink","de-DE":"Rosa"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Lavender Blush","de-DE":"Lavendel","en-US":"Lavender Blush"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#fff0f5","en-GB":"#fff0f5","de-DE":"#fff0f5"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"#FFD700","en-GB":"#FFD700","de-DE":"#FFD700"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3200,
                "width": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rumi_Chair-1.1.jpeg",
            },
          ],
          "key": "rumiChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "12999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 12999,
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
              "key": "12999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 12999,
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
              "key": "15000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 15000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RAM-094",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Rumi Chair",
          },
          {
            "locale": "en-GB",
            "value": "Rumi Chair",
          },
          {
            "locale": "de-DE",
            "value": "Stuhl >Rumi<",
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
            "value": "rumi-chair",
          },
          {
            "locale": "en-GB",
            "value": "rumi-chair",
          },
          {
            "locale": "de-DE",
            "value": "rumi-stuhl",
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
