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
                "de-DE": "Schwarz:#000000",
                "en-GB": "Black:#000000",
                "en-US": "Black:#000000",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2912,
                "w": 2912,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.2.jpeg",
            },
          ],
          "key": "modernBlackCoaster01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1999EUR",
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
              "key": "1999GBP",
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
              "key": "1999USD",
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
        "attributes": null,
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
        "description": [
          {
            "locale": "en-GB",
            "value": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
          },
          {
            "locale": "de-DE",
            "value": "Ein runder schwarzer Untersetzer ist ein kleines, flaches, scheibenförmiges Objekt, das unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Verschüttungen zu schützen. Der Untersetzer hat eine runde Form und ist einfarbig schwarz, was ihm ein schlichtes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, damit das Glas oder die Tasse rutschfest steht. Die Ränder sind mit einer Nahtverzierung versehen, die die Ästhetik des Untersetzers unterstreicht. Insgesamt ist ein runder schwarzer Untersetzer ein funktionelles und stilvolles Accessoire, das sich perfekt für jedes Zuhause oder Büro eignet.",
          },
          {
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
              "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2912,
                "width": 2912,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2912,
                "width": 2912,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.2.jpeg",
            },
          ],
          "key": "modernBlackCoaster01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1999EUR",
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
              "key": "1999GBP",
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
              "key": "1999USD",
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
            "locale": "en-GB",
            "value": "Modern Black Coaster",
          },
          {
            "locale": "de-DE",
            "value": "Moderner schwarzer Untersetzer",
          },
          {
            "locale": "en-US",
            "value": "Modern Black Coaster",
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
            "locale": "en-GB",
            "value": "modern-black-coaster",
          },
          {
            "locale": "de-DE",
            "value": "moderner-schwarzer-untersetzer",
          },
          {
            "locale": "en-US",
            "value": "modern-black-coaster",
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
