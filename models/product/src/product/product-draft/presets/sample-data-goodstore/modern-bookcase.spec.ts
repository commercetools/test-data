import type { TProductDraft } from '../../../types';
import modernBookcase from './modern-bookcase';

describe(`with modernBookcase preset`, () => {
  it(`should return a modernBookcase preset`, () => {
    const modernBookcasePreset = modernBookcase().build<TProductDraft>();
    expect(modernBookcasePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieses moderne Bücherregal hat ein schlichtes und elegantes Aussehen, das sich gut in modernes Dekor einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz und hat eine Mahagoni-Oberfläche.  Die Regale sind offen und geräumig und bieten ausreichend Platz zum Aufbewahren und Präsentieren von Büchern, Dekorationsgegenständen und anderen Gegenständen.  Neben seinem funktionalen Zweck dient ein minimalistisches Bücherregal auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Als solches ist es eine ausgezeichnete Wahl für diejenigen, die eine stilvolle und dennoch unauffällige Aufbewahrungslösung suchen.",
          "en": undefined,
          "en-GB": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
          "en-US": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
          "fr": undefined,
        },
        "key": "modern-bookcase",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage im Lieferumfang enthalten",
                "en-GB": "- Assembly included in delivery",
                "en-US": "- Assembly included in delivery",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#D2B48C",
                "label": {
                  "de-DE": "Bräunen",
                  "en-GB": "Tan",
                  "en-US": "Tan",
                },
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Nussbaum",
                "en-GB": "Walnut",
                "en-US": "Walnut",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#9C5933",
                "en-GB": "#9C5933",
                "en-US": "#9C5933",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4600,
                "w": 2760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37229518-AEI6yZwz.jpeg",
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
          "sku": "MB-0973",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Modernes Bücherregal",
          "en": undefined,
          "en-GB": "Modern Bookcase",
          "en-US": "Modern Bookcase",
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
          "de-DE": "modernes-bcherregal",
          "en": undefined,
          "en-GB": "modern-bookcase",
          "en-US": "modern-bookcase",
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

  it(`should return a modernBookcase preset when built for graphql`, () => {
    const modernBookcasePresetGraphql =
      modernBookcase().buildGraphql<TProductDraft>();
    expect(modernBookcasePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-modernist",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Dieses moderne Bücherregal hat ein schlichtes und elegantes Aussehen, das sich gut in modernes Dekor einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz und hat eine Mahagoni-Oberfläche.  Die Regale sind offen und geräumig und bieten ausreichend Platz zum Aufbewahren und Präsentieren von Büchern, Dekorationsgegenständen und anderen Gegenständen.  Neben seinem funktionalen Zweck dient ein minimalistisches Bücherregal auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Als solches ist es eine ausgezeichnete Wahl für diejenigen, die eine stilvolle und dennoch unauffällige Aufbewahrungslösung suchen.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
          },
        ],
        "key": "modern-bookcase",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten","en-US":"- Assembly included in delivery"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Walnut","de-DE":"Nussbaum","en-US":"Walnut"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#9C5933","de-DE":"#9C5933","en-US":"#9C5933"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4600,
                "width": 2760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37229518-AEI6yZwz.jpeg",
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
          "sku": "MB-0973",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Modern Bookcase",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Modernes Bücherregal",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Modern Bookcase",
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
            "value": "modern-bookcase",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "modernes-bcherregal",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "modern-bookcase",
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
