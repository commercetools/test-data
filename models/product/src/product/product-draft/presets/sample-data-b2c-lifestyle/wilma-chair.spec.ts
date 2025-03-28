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
              "name": "finish",
              "value": {
                "de-DE": "Schwarz:#000000",
                "en-GB": "Black:#000000",
                "en-US": "Black:#000000",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Blumen weiß:#FFFAF0",
                "en-GB": "Floral White:#FFFAF0",
                "en-US": "Floral White:#FFFAF0",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3200,
                "w": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.2.jpeg",
            },
          ],
          "key": "wilmaChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900EUR",
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
              "key": "29900GBP",
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
              "key": "29900USD",
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
        "description": [
          {
            "locale": "en-US",
            "value": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
          },
          {
            "locale": "de-DE",
            "value": "Der getuftete armlehnenlose Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne. Das Design des Sessels verzichtet auf Armlehnen, um mehr Flexibilität beim Sitzerlebnis zu schaffen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Der getuftete Futonstuhl ohne Armlehnen ist ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. im Wohn-, Schlaf- oder Arbeitsbereich.",
          },
          {
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
              "name": "finish",
              "value": "{"en-GB":"Black:#000000","en-US":"Black:#000000","de-DE":"Schwarz:#000000"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Floral White:#FFFAF0","de-DE":"Blumen weiß:#FFFAF0","en-US":"Floral White:#FFFAF0"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3200,
                "width": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3200,
                "width": 2400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.2.jpeg",
            },
          ],
          "key": "wilmaChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900EUR",
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
              "key": "29900GBP",
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
              "key": "29900USD",
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
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Wilma Chair",
          },
          {
            "locale": "en-GB",
            "value": "Wilma Chair",
          },
          {
            "locale": "de-DE",
            "value": "Sessel >Wilma<",
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
            "value": "wilma-chair",
          },
          {
            "locale": "en-GB",
            "value": "wilma-chair",
          },
          {
            "locale": "de-DE",
            "value": "wilma-stuhl",
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
