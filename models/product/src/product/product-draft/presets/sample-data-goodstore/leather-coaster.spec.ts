import type { TProductDraft } from '../../../types';
import leatherCoaster from './leather-coaster';

describe(`with leatherCoaster preset`, () => {
  it(`should return a leatherCoaster preset`, () => {
    const leatherCoasterPreset = leatherCoaster().build<TProductDraft>();
    expect(leatherCoasterPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein runder Lederuntersetzer ist so konzipiert, dass er unter einem Getränk platziert werden kann, um die darunter liegende Oberfläche vor Feuchtigkeit und Hitze zu schützen. Es misst etwa 4 Zoll im Durchmesser und besteht aus hochwertigem Ledermaterial. Die Kanten des Untersetzers sind mit Messing veredelt. Die Unterseite des Untersetzers ist mit einem rutschfesten Material versehen, um ein Verrutschen auf glatten Oberflächen zu verhindern.",
          "en": undefined,
          "en-GB": "A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.",
          "en-US": "A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.",
          "fr": undefined,
        },
        "key": "leather-coaster",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 4 Untersetzer",
                "en-GB": "- Includes 4 coasters",
                "en-US": "- Includes 4 coasters",
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
                "h": 2864,
                "w": 2864,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Coaster-1.1.jpeg",
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
                "centAmount": 2499,
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
                "centAmount": 2499,
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
                "centAmount": 2499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "LCO-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Leder Untersetzer",
          "en": undefined,
          "en-GB": "Leather Coaster",
          "en-US": "Leather Coaster",
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
          "de-DE": "untersetzer-aus-leder",
          "en": undefined,
          "en-GB": "leather-coaster",
          "en-US": "leather-coaster",
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

  it(`should return a leatherCoaster preset when built for graphql`, () => {
    const leatherCoasterPresetGraphql =
      leatherCoaster().buildGraphql<TProductDraft>();
    expect(leatherCoasterPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein runder Lederuntersetzer ist so konzipiert, dass er unter einem Getränk platziert werden kann, um die darunter liegende Oberfläche vor Feuchtigkeit und Hitze zu schützen. Es misst etwa 4 Zoll im Durchmesser und besteht aus hochwertigem Ledermaterial. Die Kanten des Untersetzers sind mit Messing veredelt. Die Unterseite des Untersetzers ist mit einem rutschfesten Material versehen, um ein Verrutschen auf glatten Oberflächen zu verhindern.",
          },
        ],
        "key": "leather-coaster",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 4 coasters","de-DE":"- Enthält 4 Untersetzer","en-US":"- Includes 4 coasters"}",
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
                "height": 2864,
                "width": 2864,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Coaster-1.1.jpeg",
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
                  "centAmount": 2499,
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
                  "centAmount": 2499,
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
                  "centAmount": 2499,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "LCO-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Leather Coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Leather Coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Leder Untersetzer",
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
            "value": "leather-coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "leather-coaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "untersetzer-aus-leder",
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
