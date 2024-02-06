import type { TProductDraft } from '../../../types';
import glamArmchair from './glam-armchair';

describe(`with glamArmchair preset`, () => {
  it(`should return a glamArmchair preset`, () => {
    const glamArmchairPreset = glamArmchair().build<TProductDraft>();
    expect(glamArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
          "de-DE": "Ein goldfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die goldene Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Glamour.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus Goldsamt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Stuhl ist sowohl stilvoll als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          "en": undefined,
          "en-GB": "A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "en-US": "A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "fr": undefined,
        },
        "key": "glam-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Nur chemische Reinigung
      - Kissen inklusive",
                "en-GB": "- Dry clean only
      - Pillow included",
                "en-US": "- Dry clean only
      - Pillow included",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#FECB69",
                "en-GB": "#FECB69",
                "en-US": "#FECB69",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFD700",
                "label": {
                  "de-DE": "Gold",
                  "en-GB": "Gold",
                  "en-US": "Gold",
                },
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#FFDF7F",
                "en-GB": "#FFDF7F",
                "en-US": "#FFDF7F",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Messing",
                "en-GB": "Brass",
                "en-US": "Brass",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4400,
                "w": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Glam_Armchair-1.1.jpeg",
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
                "centAmount": 59900,
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
                "centAmount": 59900,
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
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "GARM-093",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Glam Sessel",
          "en": undefined,
          "en-GB": "Glam Armchair",
          "en-US": "Glam Armchair",
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
          "de-DE": "glam-sessel",
          "en": undefined,
          "en-GB": "glam-armchair",
          "en-US": "glam-armchair",
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

  it(`should return a glamArmchair preset when built for graphql`, () => {
    const glamArmchairPresetGraphql =
      glamArmchair().buildGraphql<TProductDraft>();
    expect(glamArmchairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein goldfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die goldene Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Glamour.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus Goldsamt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Stuhl ist sowohl stilvoll als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          },
        ],
        "key": "glam-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Dry clean only\\n- Pillow included","de-DE":"- Nur chemische Reinigung\\n- Kissen inklusive","en-US":"- Dry clean only\\n- Pillow included"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#FECB69","de-DE":"#FECB69","en-US":"#FECB69"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFD700","label":{"de-DE":"Gold","en-GB":"Gold","en-US":"Gold"}}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#FFDF7F","de-DE":"#FFDF7F","en-US":"#FFDF7F"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Brass","de-DE":"Messing","en-US":"Brass"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Glam_Armchair-1.1.jpeg",
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
                  "centAmount": 59900,
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
                  "centAmount": 59900,
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
                  "centAmount": 59900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "GARM-093",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Glam Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Glam Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Glam Sessel",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "glam-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "glam-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "glam-sessel",
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
