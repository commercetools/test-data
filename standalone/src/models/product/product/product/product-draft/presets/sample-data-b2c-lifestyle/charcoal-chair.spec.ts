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
              "name": "search-color",
              "value": "gray",
            },
            {
              "name": "search-finish",
              "value": "yellow",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Dunkles Schiefer grau",
                "en-GB": "Dark Slate Grey",
                "en-US": "Dark Slate Gray",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
            {
              "name": "color-code",
              "value": "#2F4F4F",
            },
            {
              "name": "finish-code",
              "value": "#D2B48C",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5309,
                "w": 3300,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 5906,
                "w": 5906,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.1.jpeg",
            },
          ],
          "key": "charcoalChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "9900EUR",
              "recurrencePolicy": undefined,
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
              "key": "9900GBP",
              "recurrencePolicy": undefined,
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
              "key": "9900USD",
              "recurrencePolicy": undefined,
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
        "attributes": null,
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
            "locale": "en-GB",
            "value": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
          },
          {
            "locale": "en-US",
            "value": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
          },
          {
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
              "name": "search-color",
              "value": ""gray"",
            },
            {
              "name": "search-finish",
              "value": ""yellow"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Dark Slate Grey","de-DE":"Dunkles Schiefer grau","en-US":"Dark Slate Gray"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
            },
            {
              "name": "color-code",
              "value": ""#2F4F4F"",
            },
            {
              "name": "finish-code",
              "value": ""#D2B48C"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5309,
                "width": 3300,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 5906,
                "width": 5906,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.1.jpeg",
            },
          ],
          "key": "charcoalChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "9900EUR",
              "recurrencePolicy": undefined,
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
              "key": "9900GBP",
              "recurrencePolicy": undefined,
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
              "key": "9900USD",
              "recurrencePolicy": undefined,
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
            "locale": "en-US",
            "value": "Charcoal Chair",
          },
          {
            "locale": "en-GB",
            "value": "Charcoal Chair",
          },
          {
            "locale": "de-DE",
            "value": "Stuhl "Hokzkohle"",
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
            "value": "charcoal-chair",
          },
          {
            "locale": "en-GB",
            "value": "charcoal-chair",
          },
          {
            "locale": "de-DE",
            "value": "holzkohle-stuhl",
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
