import type { TProductDraft } from '../../../types';
import rattanLoungeChair from './rattan-lounge-chair';

describe(`with rattanLoungeChair preset`, () => {
  it(`should return a rattanLoungeChair preset`, () => {
    const rattanLoungeChairPreset = rattanLoungeChair().build<TProductDraft>();
    expect(rattanLoungeChairPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Der Loungesessel aus Rattan bietet eine bequeme Sitzgelegenheit zum Entspannen. Das Webmuster aus Rattanfasern bildet die Sitzfläche und Rückenlehne, die von einem stabilen Rattangestell gehalten werden. Die Polsterung aus weichem Baumwollstoff sorgt für zusätzlichen Sitzkomfort. Die Kissen sind abnehmbar, was die Reinigung oder einen Austausch erleichtert.  Das Design des Rattan-Loungesessels ist vom tropischen Ambiente des Bohemian-Looks inspiriert und zeigt sich in erdigen Tönen. Das komplexe Webmuster mit seinen geometrischen Formen bildet ein optisches Highlight. Das für die Konstruktion des Sitzmöbels verwendete Rattanmaterial ist langlebig, verschleißfest und leicht. Der Sessel kann somit flexibel in jeden Innen- oder Außenbereich integriert werden. Seine natürlichen Materialien und sein einzigartiges Design schaffen eine entspannte und einladende Atmosphäre zum Relaxen.",
          "en": undefined,
          "en-GB": "The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.",
          "en-US": "The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.",
          "fr": undefined,
        },
        "key": "rattan-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Inklusive 2 Kissen für Sitz und Rückenlehne",
                "en-GB": "- Includes 2 cushions for seat and backrest",
                "en-US": "- Includes 2 cushions for seat and backrest",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Antik-weiß:#faebd7",
                "en-GB": "Antique White:#faebd7",
                "en-US": "Antique White:#faebd7",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Beige:#F5F5DC",
                "en-GB": "Beige:#F5F5DC",
                "en-US": "Beige:#F5F5DC",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4500,
                "w": 3375,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.2.jpeg",
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
              "key": "19900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 19900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "19900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 19900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "19900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 19900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RLC-08",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Loungesessel aus Rattan",
          "en": undefined,
          "en-GB": "Rattan Lounge Chair",
          "en-US": "Rattan Lounge Chair",
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
          "de-DE": "rattan-loungesessel",
          "en": undefined,
          "en-GB": "rattan-lounge-chair",
          "en-US": "rattan-lounge-chair",
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

  it(`should return a rattanLoungeChair preset when built for graphql`, () => {
    const rattanLoungeChairPresetGraphql =
      rattanLoungeChair().buildGraphql<TProductDraft>();
    expect(rattanLoungeChairPresetGraphql).toMatchInlineSnapshot(`
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
        "description": [
          {
            "locale": "en-GB",
            "value": "The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.",
          },
          {
            "locale": "en-US",
            "value": "The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.",
          },
          {
            "locale": "de-DE",
            "value": "Der Loungesessel aus Rattan bietet eine bequeme Sitzgelegenheit zum Entspannen. Das Webmuster aus Rattanfasern bildet die Sitzfläche und Rückenlehne, die von einem stabilen Rattangestell gehalten werden. Die Polsterung aus weichem Baumwollstoff sorgt für zusätzlichen Sitzkomfort. Die Kissen sind abnehmbar, was die Reinigung oder einen Austausch erleichtert.  Das Design des Rattan-Loungesessels ist vom tropischen Ambiente des Bohemian-Looks inspiriert und zeigt sich in erdigen Tönen. Das komplexe Webmuster mit seinen geometrischen Formen bildet ein optisches Highlight. Das für die Konstruktion des Sitzmöbels verwendete Rattanmaterial ist langlebig, verschleißfest und leicht. Der Sessel kann somit flexibel in jeden Innen- oder Außenbereich integriert werden. Seine natürlichen Materialien und sein einzigartiges Design schaffen eine entspannte und einladende Atmosphäre zum Relaxen.",
          },
        ],
        "key": "rattan-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 2 cushions for seat and backrest","en-US":"- Includes 2 cushions for seat and backrest","de-DE":"- Inklusive 2 Kissen für Sitz und Rückenlehne"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Antique White:#faebd7","de-DE":"Antik-weiß:#faebd7","en-US":"Antique White:#faebd7"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Beige:#F5F5DC","en-US":"Beige:#F5F5DC","de-DE":"Beige:#F5F5DC"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4500,
                "width": 3375,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.2.jpeg",
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
              "key": "19900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 19900,
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
              "key": "19900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 19900,
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
              "key": "19900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 19900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RLC-08",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Rattan Lounge Chair",
          },
          {
            "locale": "en-GB",
            "value": "Rattan Lounge Chair",
          },
          {
            "locale": "de-DE",
            "value": "Loungesessel aus Rattan",
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
            "value": "rattan-lounge-chair",
          },
          {
            "locale": "en-GB",
            "value": "rattan-lounge-chair",
          },
          {
            "locale": "de-DE",
            "value": "rattan-loungesessel",
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
