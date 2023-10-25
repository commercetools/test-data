import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import turnerVelvetArmchair from './turner-velvet-armchair';

describe(`with turnerVelvetArmchair preset`, () => {
  it(`should return a turnerVelvetArmchair preset`, () => {
    const turnerVelvetArmchairPreset =
      turnerVelvetArmchair().build<TProductDraft>();
    expect(turnerVelvetArmchairPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Das Samt-Sitzmöbel mit Beinen aus Ebenholz ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die dunkelblaue Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen modernen Touch.  Die Ebenholzbeine des Sessels sind robust und langlebig und bilden eine solide Grundlage für den Sitzbereich. Die Ebenholzfarbe des Gestells verleiht dem Gesamtbild des Stuhls die gewünschte Raffinesse. Die Kombination aus Samt und Ebenholz schafft einen interessanten Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Sessel hat eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Sessel ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          "en": undefined,
          "en-GB": "A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "en-US": "A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "fr": undefined,
        },
        "key": "turner-velvet-armchair",
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
              "name": "colorlabel",
              "value": {
                "de-DE": "Königsblau",
                "en-GB": "Royal Blue",
                "en-US": "Royal Blue",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#0000FF",
                "label": {
                  "de-DE": "Blau",
                  "en-GB": "Blue",
                  "en-US": "Blue",
                },
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#405A76",
                "en-GB": "#405A76",
                "en-US": "#405A76",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Turner_Velvet_Armchair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Turner_Velvet_Armchair-1.2.jpeg",
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
                "centAmount": 39900,
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
                "centAmount": 39900,
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
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "TARM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Samtsessel >Turner<",
          "en": undefined,
          "en-GB": "Turner Velvet Armchair",
          "en-US": "Turner Velvet Armchair",
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
          "de-DE": "turner-samtsessel",
          "en": undefined,
          "en-GB": "turner-velvet-armchair",
          "en-US": "turner-velvet-armchair",
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

  it(`should return a turnerVelvetArmchair preset when built for graphql`, () => {
    const turnerVelvetArmchairPresetGraphql =
      turnerVelvetArmchair().buildGraphql<TProductDraftGraphql>();
    expect(turnerVelvetArmchairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Das Samt-Sitzmöbel mit Beinen aus Ebenholz ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die dunkelblaue Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen modernen Touch.  Die Ebenholzbeine des Sessels sind robust und langlebig und bilden eine solide Grundlage für den Sitzbereich. Die Ebenholzfarbe des Gestells verleiht dem Gesamtbild des Stuhls die gewünschte Raffinesse. Die Kombination aus Samt und Ebenholz schafft einen interessanten Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Sessel hat eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Sessel ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          },
        ],
        "key": "turner-velvet-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Royal Blue","de-DE":"Königsblau","en-US":"Royal Blue"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#405A76","de-DE":"#405A76","en-US":"#405A76"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Turner_Velvet_Armchair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Turner_Velvet_Armchair-1.2.jpeg",
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
                  "centAmount": 39900,
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
                  "centAmount": 39900,
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
                  "centAmount": 39900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "TARM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Turner Velvet Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Turner Velvet Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Samtsessel >Turner<",
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
            "locale": "en-US",
            "value": "turner-velvet-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "turner-velvet-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "turner-samtsessel",
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
