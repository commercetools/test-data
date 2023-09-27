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
        "description": undefined,
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
              "name": "product-description",
              "value": {
                "de-DE": "n Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Insgesamt ist dieser Stuhl ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht.",
                "en-GB": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
                "en-US": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#808080",
                "label": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#DAD7D0",
                "en-GB": "#DAD7D0",
                "en-US": "#DAD7D0",
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
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_423223088-xpBtdxux.jpeg",
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
          "sku": "ADARM-04",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Art-Deco-Stuhl",
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
        "categories": [
          {
            "__typename": "Reference",
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "art-deco-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly on delivery","de-DE":"- Montage bei Lieferung","en-US":"- Assembly on delivery"}",
            },
            {
              "name": "product-description",
              "value": "{"en-GB":"An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.","en-US":"An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.","de-DE":"n Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Insgesamt ist dieser Stuhl ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht."}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#DAD7D0","de-DE":"#DAD7D0","en-US":"#DAD7D0"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_423223088-xpBtdxux.jpeg",
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
          "sku": "ADARM-04",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Art Deco Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Art-Deco-Stuhl",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Art Deco Chair",
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
            "value": "art-deco-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "art-deco-stuhl",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "art-deco-chair",
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
