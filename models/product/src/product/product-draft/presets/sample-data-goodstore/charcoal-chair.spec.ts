import type { TProductDraft } from '../../../types';
import charcoalChair from './charcoal-chair';

describe(`with charcoalChair preset`, () => {
  it(`should return a charcoalChair preset`, () => {
    const charcoalChairPreset = charcoalChair().build<TProductDraft>();
    expect(charcoalChairPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.  Der Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.  Ein Stuhl mit Lederpolsterung ist elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum.",
          "en": undefined,
          "en-GB": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
          "en-US": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
          "fr": undefined,
        },
        "key": "charcoal-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Beinhaltet 1 Stuhl",
                "en-GB": "- Includes 1 chair",
                "en-US": "- Includes 1 chair",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#000",
                "en-GB": "#000",
                "en-US": "#000",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Holzkohle",
                "en-GB": "Charcoal",
                "en-US": "Charcoal",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#000",
                "label": {
                  "de-DE": "Schwarz",
                  "en-GB": "Black",
                  "en-US": "Black",
                },
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Eiche",
                "en-GB": "Oak",
                "en-US": "Oak",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#E2C897",
                "en-GB": "#E2C897",
                "en-US": "#E2C897",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5309,
                "w": 3300,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246579-uvZeDfRx.jpeg",
            },
            {
              "dimensions": {
                "h": 5906,
                "w": 5906,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246581-FUm1-Kr_.jpeg",
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
                "centAmount": 9900,
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
                "centAmount": 9900,
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
                "centAmount": 9900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CCH-093",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Stuhl "Hokzkohle"",
          "en": undefined,
          "en-GB": "Charcoal Chair",
          "en-US": "Charcoal Chair",
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
          "de-DE": "holzkohle-stuhl",
          "en": undefined,
          "en-GB": "charcoal-chair",
          "en-US": "charcoal-chair",
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

  it(`should return a charcoalChair preset when built for graphql`, () => {
    const charcoalChairPresetGraphql =
      charcoalChair().buildGraphql<TProductDraft>();
    expect(charcoalChairPresetGraphql).toMatchInlineSnapshot(`
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
            "locale": "en-GB",
            "value": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.  Der Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.  Ein Stuhl mit Lederpolsterung ist elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum.",
          },
        ],
        "key": "charcoal-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#000","de-DE":"#000","en-US":"#000"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Charcoal","de-DE":"Holzkohle","en-US":"Charcoal"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Oak","de-DE":"Eiche","en-US":"Oak"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#E2C897","de-DE":"#E2C897","en-US":"#E2C897"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5309,
                "width": 3300,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246579-uvZeDfRx.jpeg",
            },
            {
              "dimensions": {
                "height": 5906,
                "width": 5906,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246581-FUm1-Kr_.jpeg",
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
                  "centAmount": 9900,
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
                  "centAmount": 9900,
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
                  "centAmount": 9900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CCH-093",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Charcoal Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Charcoal Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Stuhl "Hokzkohle"",
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
            "value": "charcoal-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "charcoal-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "holzkohle-stuhl",
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
