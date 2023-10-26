import type { TProductDraft } from '../../../types';
import opalKingBed from './opal-king-bed';

describe(`with opalKingBed preset`, () => {
  it(`should return a opalKingBed preset`, () => {
    const opalKingBedPreset = opalKingBed().build<TProductDraft>();
    expect(opalKingBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein modernes Kingsize-Bett mit getuftetem Kopfteil ist ein stilvolles und elegantes Möbelstück, das einen Hauch von Luxus und Raffinesse in jedes Schlafzimmer bringen kann. Die Matratzenplattform ist groß genug, um eine Kingsize-Matratze aufzunehmen, und das gesamte Bett ist mit klaren, schlanken Linien gestaltet, die ihm einen modernen Look verleihen. Das getuftete Kopfteil ist das Herzstück des Bettes und oft der Blickfang schlechthin. Es ist aus weichem, strapazierfähigem Stoff gefertigt, der in einem quadratischen Muster getuftet ist. Das getuftete Design verleiht dem Kopfteil ein plüschiges, gepolstertes Aussehen und macht es bequem, wenn man im Bett sitzt, um zu lesen oder fernzusehen. Das Gesamtdesign des Bettes ist modern und unterstreicht die Schönheit des getufteten Kopfteils. Insgesamt ist ein modernes Doppelbett mit getuftetem Kopfteil ein Highlight, das jedes Schlafzimmer mit Stil und Komfort bereichert.",
          "en": undefined,
          "en-GB": "A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.",
          "en-US": "A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.",
          "fr": undefined,
        },
        "key": "opal-king-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage inklusive",
                "en-GB": "- Assembly included",
                "en-US": "- Assembly included",
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
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 2000,
                "w": 2000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Opal_King_Bed-1.1.jpeg",
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
                "centAmount": 129900,
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
                "centAmount": 129900,
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
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MTB-023",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Opal King Bett",
          "en": undefined,
          "en-GB": "Opal King Bed",
          "en-US": "Opal King Bed",
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
          "de-DE": "opal-kingsize-bett",
          "en": undefined,
          "en-GB": "opal-king-bed",
          "en-US": "opal-king-bed",
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

  it(`should return a opalKingBed preset when built for graphql`, () => {
    const opalKingBedPresetGraphql =
      opalKingBed().buildGraphql<TProductDraft>();
    expect(opalKingBedPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "__typename": "Reference",
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein modernes Kingsize-Bett mit getuftetem Kopfteil ist ein stilvolles und elegantes Möbelstück, das einen Hauch von Luxus und Raffinesse in jedes Schlafzimmer bringen kann. Die Matratzenplattform ist groß genug, um eine Kingsize-Matratze aufzunehmen, und das gesamte Bett ist mit klaren, schlanken Linien gestaltet, die ihm einen modernen Look verleihen. Das getuftete Kopfteil ist das Herzstück des Bettes und oft der Blickfang schlechthin. Es ist aus weichem, strapazierfähigem Stoff gefertigt, der in einem quadratischen Muster getuftet ist. Das getuftete Design verleiht dem Kopfteil ein plüschiges, gepolstertes Aussehen und macht es bequem, wenn man im Bett sitzt, um zu lesen oder fernzusehen. Das Gesamtdesign des Bettes ist modern und unterstreicht die Schönheit des getufteten Kopfteils. Insgesamt ist ein modernes Doppelbett mit getuftetem Kopfteil ein Highlight, das jedes Schlafzimmer mit Stil und Komfort bereichert.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.",
          },
        ],
        "key": "opal-king-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly included","de-DE":"- Montage inklusive","en-US":"- Assembly included"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#000","de-DE":"#000","en-US":"#000"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2000,
                "width": 2000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Opal_King_Bed-1.1.jpeg",
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
                  "centAmount": 129900,
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
                  "centAmount": 129900,
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
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MTB-023",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Opal King Bed",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Opal King Bett",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Opal King Bed",
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
            "value": "opal-king-bed",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "opal-kingsize-bett",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "opal-king-bed",
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
