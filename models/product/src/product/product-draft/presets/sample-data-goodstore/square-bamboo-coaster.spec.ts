import type { TProductDraft } from '../../../types';
import squareBambooCoaster from './square-bamboo-coaster';

describe(`with squareBambooCoaster preset`, () => {
  it(`should return a squareBambooCoaster preset`, () => {
    const squareBambooCoasterPreset =
      squareBambooCoaster().build<TProductDraft>();
    expect(squareBambooCoasterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der quadratische Untersetzer aus Bambus besteht aus einer kleinen Matte mit großer Wirkung, da sie Oberflächen vor Wasserflecken oder Beschädigungen durch Trinkgläser oder Tassen schützt. Er besteht aus natürlichem Bambusmaterial und hat eine glatte Oberfläche. Der Untersetzer hat eine quadratische Form mit leicht abgerundeten Kanten und misst etwa 3,5 Zoll x 3,5 Zoll. Seine leichte und strapazierfähige Beschaffenheit macht ihn zu einer beliebten Wahl für legere und formelle Anlässe gleichermaßen.",
          "en": undefined,
          "en-GB": "A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.",
          "en-US": "A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.",
          "fr": undefined,
        },
        "key": "square-bamboo-coaster",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Mit einem feuchten Tuch abwischen
      - Das Set enthält 4 Untersetzer",
                "en-GB": "- Wipe clean with wet cloth
      - Set includes 4 coaster",
                "en-US": "- Wipe clean with wet cloth
      - Set includes 4 coaster",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#F5F5DC",
                "label": {
                  "de-DE": "Beige",
                  "en-GB": "Beige",
                  "en-US": "Beige",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2912,
                "w": 2912,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_47092846-1MTECqrX.jpeg",
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
                "centAmount": 1099,
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
                "centAmount": 1099,
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
                "centAmount": 1099,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "Bamb-084",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Quadratischer Untersetzer aus Bambus",
          "en": undefined,
          "en-GB": "Square Bamboo Coaster",
          "en-US": "Square Bamboo Coaster",
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
          "de-DE": "quadratischer-untersetzer-aus-bambus",
          "en": undefined,
          "en-GB": "square-bamboo-coaster",
          "en-US": "square-bamboo-coaster",
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

  it(`should return a squareBambooCoaster preset when built for graphql`, () => {
    const squareBambooCoasterPresetGraphql =
      squareBambooCoaster().buildGraphql<TProductDraft>();
    expect(squareBambooCoasterPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bar-and-glassware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Der quadratische Untersetzer aus Bambus besteht aus einer kleinen Matte mit großer Wirkung, da sie Oberflächen vor Wasserflecken oder Beschädigungen durch Trinkgläser oder Tassen schützt. Er besteht aus natürlichem Bambusmaterial und hat eine glatte Oberfläche. Der Untersetzer hat eine quadratische Form mit leicht abgerundeten Kanten und misst etwa 3,5 Zoll x 3,5 Zoll. Seine leichte und strapazierfähige Beschaffenheit macht ihn zu einer beliebten Wahl für legere und formelle Anlässe gleichermaßen.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.",
          },
        ],
        "key": "square-bamboo-coaster",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Wipe clean with wet cloth\\n- Set includes 4 coaster","en-US":"- Wipe clean with wet cloth\\n- Set includes 4 coaster","de-DE":"- Mit einem feuchten Tuch abwischen\\n- Das Set enthält 4 Untersetzer"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2912,
                "width": 2912,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_47092846-1MTECqrX.jpeg",
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
                  "centAmount": 1099,
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
                  "centAmount": 1099,
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
                  "centAmount": 1099,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "Bamb-084",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Square Bamboo Coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Square Bamboo Coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Quadratischer Untersetzer aus Bambus",
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
            "value": "square-bamboo-coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "square-bamboo-coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "quadratischer-untersetzer-aus-bambus",
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
