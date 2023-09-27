import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import cobblestoneRug from './cobblestone-rug';
describe(`with cobblestoneRug preset`, () => {
  it('should return a sample cobblestoneRug product preset', () => {
    const cobblestoneRugPreset = cobblestoneRug().build<TProductDraft>();
    expect(cobblestoneRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rugs",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der Cobblestone-Teppich kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Heimbüros. Es ist besonders beliebt in modernen und zeitgenössischen Einrichtungsstilen, wo sie dem Raum ein mutiges und grafisches Element hinzufügen können.  Insgesamt ist ein Teppich mit geometrischen Akzenten eine stilvolle und vielseitige Designwahl, die jedem Raum im Haus visuelles Interesse und Textur verleihen kann.",
          "en": undefined,
          "en-GB": "The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.",
          "en-US": "The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.",
          "fr": undefined,
        },
        "key": "cobblestone-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
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
              "name": "productspec",
              "value": {
                "de-DE": "- 5 Fuß x 3 Fuß",
                "en-GB": "- 5ft x 3ft",
                "en-US": "- 5ft x 3ft",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2820,
                "w": 7006,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cobblestone%20Rug-n-Cz7uBo.jpeg",
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
                "centAmount": 12999,
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
                "centAmount": 12999,
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
                "centAmount": 12999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CR-098",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kopfsteinpflaster",
          "en": undefined,
          "en-GB": "Cobblestone Rug",
          "en-US": "Cobblestone Rug",
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
          "de-DE": "kopfsteinpflaster",
          "en": undefined,
          "en-GB": "cobblestone-rug",
          "en-US": "cobblestone-rug",
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

  it('should return a sample cobblestoneRug product preset when built for Graphql', () => {
    const cobblestoneRugPresetGraphql =
      cobblestoneRug().buildGraphql<TProductDraftGraphql>();
    expect(cobblestoneRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "rugs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Der Cobblestone-Teppich kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Heimbüros. Es ist besonders beliebt in modernen und zeitgenössischen Einrichtungsstilen, wo sie dem Raum ein mutiges und grafisches Element hinzufügen können.  Insgesamt ist ein Teppich mit geometrischen Akzenten eine stilvolle und vielseitige Designwahl, die jedem Raum im Haus visuelles Interesse und Textur verleihen kann.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.",
          },
        ],
        "key": "cobblestone-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color-filter",
              "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
            },
            {
              "name": "productspec",
              "value": "{"en-GB":"- 5ft x 3ft","de-DE":"- 5 Fuß x 3 Fuß","en-US":"- 5ft x 3ft"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2820,
                "width": 7006,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cobblestone%20Rug-n-Cz7uBo.jpeg",
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
                  "centAmount": 12999,
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
                  "centAmount": 12999,
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
                  "centAmount": 12999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CR-098",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Cobblestone Rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Kopfsteinpflaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Cobblestone Rug",
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
            "value": "cobblestone-rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "kopfsteinpflaster",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "cobblestone-rug",
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
