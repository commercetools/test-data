import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import wilmaChair from './wilma-chair';

describe(`with wilmaChair preset`, () => {
  it(`should return a wilmaChair preset`, () => {
    const wilmaChairPreset = wilmaChair().build<TProductDraft>();
    expect(wilmaChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
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
          "de-DE": "Der getuftete armlehnenlose Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne. Das Design des Sessels verzichtet auf Armlehnen, um mehr Flexibilität beim Sitzerlebnis zu schaffen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Der getuftete Futonstuhl ohne Armlehnen ist ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. im Wohn-, Schlaf- oder Arbeitsbereich.",
          "en": undefined,
          "en-GB": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
          "en-US": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
          "fr": undefined,
        },
        "key": "wilma-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Kissenbezüge sind abnehmbar und maschinenwaschbar",
                "en-GB": "- Cushion covers are removable and machine washable",
                "en-US": "- Cushion covers are removable and machine washable",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Creme",
                "en-GB": "Cream",
                "en-US": "Cream",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Schwarzes Eisen",
                "en-GB": "Black Iron",
                "en-US": "Black Iron",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#000",
                "en-GB": "#000",
                "en-US": "#000",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#E4DCC1",
                "en-GB": "#E4DCC1",
                "en-US": "#E4DCC1",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFFFF0",
                "label": {
                  "de-DE": "Elfenbein",
                  "en-GB": "Ivory",
                  "en-US": "Ivory",
                },
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
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Wilma%20Chair-CXpAOu8I.jpeg",
            },
            {
              "dimensions": {
                "h": 3200,
                "w": 2400,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_547299128-yG__9MPQ.jpeg",
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
                "centAmount": 29900,
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
                "centAmount": 29900,
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
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "NJOP-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel >Wilma<",
          "en": undefined,
          "en-GB": "Wilma Chair",
          "en-US": "Wilma Chair",
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
          "de-DE": "wilma-stuhl",
          "en": undefined,
          "en-GB": "wilma-chair",
          "en-US": "wilma-chair",
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

  it(`should return a wilmaChair preset when built for graphql`, () => {
    const wilmaChairPresetGraphql =
      wilmaChair().buildGraphql<TProductDraftGraphql>();
    expect(wilmaChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
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
            "locale": "en-US",
            "value": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Der getuftete armlehnenlose Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne. Das Design des Sessels verzichtet auf Armlehnen, um mehr Flexibilität beim Sitzerlebnis zu schaffen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Der getuftete Futonstuhl ohne Armlehnen ist ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. im Wohn-, Schlaf- oder Arbeitsbereich.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
          },
        ],
        "key": "wilma-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Cushion covers are removable and machine washable","en-US":"- Cushion covers are removable and machine washable","de-DE":"- Kissenbezüge sind abnehmbar und maschinenwaschbar"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Cream","de-DE":"Creme","en-US":"Cream"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Black Iron","de-DE":"Schwarzes Eisen","en-US":"Black Iron"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#000","en-US":"#000","de-DE":"#000"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#E4DCC1","de-DE":"#E4DCC1","en-US":"#E4DCC1"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3200,
                "width": 2400,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Wilma%20Chair-CXpAOu8I.jpeg",
            },
            {
              "dimensions": {
                "height": 3200,
                "width": 2400,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_547299128-yG__9MPQ.jpeg",
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "NJOP-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Wilma Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Wilma Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Sessel >Wilma<",
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
            "value": "wilma-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "wilma-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "wilma-stuhl",
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
