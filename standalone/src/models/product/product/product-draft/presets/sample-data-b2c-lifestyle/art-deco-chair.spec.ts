import type { TProductDraft } from '../../../types';
import artDecoChair from './art-deco-chair';

describe(`with artDecoChair preset`, () => {
  it(`should return a artDecoChair preset`, () => {
    const artDecoChairPreset = artDecoChair().build<TProductDraft>();
    expect(artDecoChairPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dieser Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl bedient sich markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster. Der Stuhl ist ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht.",
          "en": undefined,
          "en-GB": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
          "en-US": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
          "fr": undefined,
        },
        "key": "art-deco-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage bei Lieferung",
                "en-GB": "- Assembly on delivery",
                "en-US": "- Assembly on delivery",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Grau:#808080",
                "en-GB": "Grey:#808080",
                "en-US": "Gray:#808080",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Chair-1.1.jpeg",
            },
          ],
          "key": "artDecoChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900EUR",
              "recurrencePolicyRef": undefined,
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
              "key": "39900GBP",
              "recurrencePolicyRef": undefined,
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
              "key": "39900USD",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ADARM-04",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel im Art-Deco-Stil",
          "en": undefined,
          "en-GB": "Art Deco Chair",
          "en-US": "Art Deco Chair",
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
          "de-DE": "art-deco-stuhl",
          "en": undefined,
          "en-GB": "art-deco-chair",
          "en-US": "art-deco-chair",
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

  it(`should return a artDecoChair preset when built for graphql`, () => {
    const artDecoChairPresetGraphql =
      artDecoChair().buildGraphql<TProductDraft>();
    expect(artDecoChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
          },
          {
            "locale": "en-US",
            "value": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl bedient sich markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster. Der Stuhl ist ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht.",
          },
        ],
        "key": "art-deco-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly on delivery","de-DE":"- Montage bei Lieferung","en-US":"- Assembly on delivery"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Grey:#808080","de-DE":"Grau:#808080","en-US":"Gray:#808080"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Chair-1.1.jpeg",
            },
          ],
          "key": "artDecoChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900EUR",
              "recurrencePolicyRef": undefined,
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
              "key": "39900GBP",
              "recurrencePolicyRef": undefined,
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
              "key": "39900USD",
              "recurrencePolicyRef": undefined,
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
          "sku": "ADARM-04",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Art Deco Chair",
          },
          {
            "locale": "en-GB",
            "value": "Art Deco Chair",
          },
          {
            "locale": "de-DE",
            "value": "Sessel im Art-Deco-Stil",
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
            "value": "art-deco-chair",
          },
          {
            "locale": "en-GB",
            "value": "art-deco-chair",
          },
          {
            "locale": "de-DE",
            "value": "art-deco-stuhl",
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
