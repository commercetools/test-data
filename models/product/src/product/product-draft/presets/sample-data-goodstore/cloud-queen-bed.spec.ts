import type { TProductDraft } from '../../../types';
import cloudQueenBed from './cloud-queen-bed';

describe(`with cloudQueenBed preset`, () => {
  it(`should return a cloudQueenBed preset`, () => {
    const cloudQueenBedPreset = cloudQueenBed().build<TProductDraft>();
    expect(cloudQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "beds",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Queensize-Bett mit Stoffbezug und kissenartigem Kopfteil ist ein komfortables und elegantes Schlafzimmermöbel. Der Bettrahmen ist rechteckig und groß genug, um eine Standardmatratze in Queen-Size-Größe aufzunehmen. Die Stoffpolsterung bedeckt den gesamten Rahmen und schafft eine glatte und bequeme Oberfläche zum Anlehnen. Das Kopfteil ist das Herzstück des Bettes, mit einer weichen und plüschigen Oberfläche, die einem Kissen ähnelt. Es hat eine rechteckige Form und ist oben am Bettrahmen befestigt und bietet eine bequeme Rückenlehne zum Lesen oder Fernsehen im Bett. Das Kopfteil kann mit dem gleichen Stoff wie der Bettrahmen oder in einer komplementären Farbe oder einem Muster bezogen werden. Insgesamt vereint dieses Bett Komfort und Stil und ist somit eine perfekte Ergänzung für jedes Schlafzimmer.",
          "en": undefined,
          "en-GB": "A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.",
          "en-US": "A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.",
          "fr": undefined,
        },
        "key": "cloud-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Hellblau",
                "en-GB": "Light Blue",
                "en-US": "Light Blue",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#D4EEF2",
                "en-GB": "#D4EEF2",
                "en-US": "#D4EEF2",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Die Montage ist im Preis inbegriffen",
                "en-GB": "- Assembly is included",
                "en-US": "- Assembly is included",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 3621,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_523480805-mqjgJyAt.jpeg",
            },
            {
              "dimensions": {
                "h": 3621,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cloud%20Queen%20Bed-Hz3YEb5q.jpeg",
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
                "centAmount": 45999,
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
                "centAmount": 45999,
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
                "centAmount": 45999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CQB-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Cloud-Queen-Bett",
          "en": undefined,
          "en-GB": "Cloud Queen Bed",
          "en-US": "Cloud Queen Bed",
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
          "de-DE": "cloud-queen-bett",
          "en": undefined,
          "en-GB": "cloud-queen-bed",
          "en-US": "cloud-queen-bed",
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

  it(`should return a cloudQueenBed preset when built for graphql`, () => {
    const cloudQueenBedPresetGraphql =
      cloudQueenBed().buildGraphql<TProductDraft>();
    expect(cloudQueenBedPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "beds",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein Queensize-Bett mit Stoffbezug und kissenartigem Kopfteil ist ein komfortables und elegantes Schlafzimmermöbel. Der Bettrahmen ist rechteckig und groß genug, um eine Standardmatratze in Queen-Size-Größe aufzunehmen. Die Stoffpolsterung bedeckt den gesamten Rahmen und schafft eine glatte und bequeme Oberfläche zum Anlehnen. Das Kopfteil ist das Herzstück des Bettes, mit einer weichen und plüschigen Oberfläche, die einem Kissen ähnelt. Es hat eine rechteckige Form und ist oben am Bettrahmen befestigt und bietet eine bequeme Rückenlehne zum Lesen oder Fernsehen im Bett. Das Kopfteil kann mit dem gleichen Stoff wie der Bettrahmen oder in einer komplementären Farbe oder einem Muster bezogen werden. Insgesamt vereint dieses Bett Komfort und Stil und ist somit eine perfekte Ergänzung für jedes Schlafzimmer.",
          },
        ],
        "key": "cloud-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Light Blue","de-DE":"Hellblau","en-US":"Light Blue"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#D4EEF2","de-DE":"#D4EEF2","en-US":"#D4EEF2"}",
            },
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly is included","de-DE":"- Die Montage ist im Preis inbegriffen","en-US":"- Assembly is included"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3621,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_523480805-mqjgJyAt.jpeg",
            },
            {
              "dimensions": {
                "height": 3621,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cloud%20Queen%20Bed-Hz3YEb5q.jpeg",
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
                  "centAmount": 45999,
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
                  "centAmount": 45999,
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
                  "centAmount": 45999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CQB-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Cloud Queen Bed",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Cloud-Queen-Bett",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Cloud Queen Bed",
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
            "value": "cloud-queen-bed",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "cloud-queen-bett",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "cloud-queen-bed",
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
