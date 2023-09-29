import type { TProductDraft } from '../../../types';
import modernBlackCoaster from './modern-black-coaster';

describe(`with modernBlackCoaster preset`, () => {
  it(`should return a modernBlackCoaster preset`, () => {
    const modernBlackCoasterPreset =
      modernBlackCoaster().build<TProductDraft>();
    expect(modernBlackCoasterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein runder schwarzer Untersetzer ist ein kleines, flaches, scheibenförmiges Objekt, das unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Verschüttungen zu schützen. Der Untersetzer hat eine runde Form und ist einfarbig schwarz, was ihm ein schlichtes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, damit das Glas oder die Tasse rutschfest steht. Die Ränder sind mit einer Nahtverzierung versehen, die die Ästhetik des Untersetzers unterstreicht. Insgesamt ist ein runder schwarzer Untersetzer ein funktionelles und stilvolles Accessoire, das sich perfekt für jedes Zuhause oder Büro eignet.",
          "en": undefined,
          "en-GB": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          "en-US": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          "fr": undefined,
        },
        "key": "modern-black-coaster",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Das Set enthält 4 Untersetzer",
                "en-GB": "- Set includes 4 coasters",
                "en-US": "- Set includes 4 coasters",
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
                "h": 2912,
                "w": 2912,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_45118888-JuHg_hZC.jpeg",
            },
            {
              "dimensions": {
                "h": 2912,
                "w": 2912,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_49535431-zEkdS7Vb.jpeg",
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
                "centAmount": 1999,
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
                "centAmount": 1999,
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
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BCOAS-08",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Moderner schwarzer Untersetzer",
          "en": undefined,
          "en-GB": "Modern Black Coaster",
          "en-US": "Modern Black Coaster",
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
          "de-DE": "moderner-schwarzer-untersetzer",
          "en": undefined,
          "en-GB": "modern-black-coaster",
          "en-US": "modern-black-coaster",
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

  it(`should return a modernBlackCoaster preset when built for graphql`, () => {
    const modernBlackCoasterPresetGraphql =
      modernBlackCoaster().buildGraphql<TProductDraft>();
    expect(modernBlackCoasterPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "__typename": "Reference",
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein runder schwarzer Untersetzer ist ein kleines, flaches, scheibenförmiges Objekt, das unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Verschüttungen zu schützen. Der Untersetzer hat eine runde Form und ist einfarbig schwarz, was ihm ein schlichtes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, damit das Glas oder die Tasse rutschfest steht. Die Ränder sind mit einer Nahtverzierung versehen, die die Ästhetik des Untersetzers unterstreicht. Insgesamt ist ein runder schwarzer Untersetzer ein funktionelles und stilvolles Accessoire, das sich perfekt für jedes Zuhause oder Büro eignet.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          },
        ],
        "key": "modern-black-coaster",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Set includes 4 coasters","de-DE":"- Das Set enthält 4 Untersetzer","en-US":"- Set includes 4 coasters"}",
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
                "height": 2912,
                "width": 2912,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_45118888-JuHg_hZC.jpeg",
            },
            {
              "dimensions": {
                "height": 2912,
                "width": 2912,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_49535431-zEkdS7Vb.jpeg",
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "BCOAS-08",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Modern Black Coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Moderner schwarzer Untersetzer",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Modern Black Coaster",
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
            "value": "modern-black-coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "moderner-schwarzer-untersetzer",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "modern-black-coaster",
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
