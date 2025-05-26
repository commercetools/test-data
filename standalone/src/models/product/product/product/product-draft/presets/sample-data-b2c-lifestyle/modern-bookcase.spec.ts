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
          "de-DE": "Dieses moderne Bücherregal hat ein einfaches und elegantes Design, das sich gut in die moderne Einrichtung einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz gefertigt und mahagonifarben lackiert. Die offenen und geräumigen Regalböden bieten reichlich Platz zum Aufbewahren und Ausstellen von Büchern, Dekorationsobjekten und anderen Gegenständen. Ein minimalistisches Bücherregal erfüllt nicht nur einen funktionalen Zweck, sondern dient auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Daher ist es eine ausgezeichnete Wahl für alle, die eine stilvolle, aber unauffällige Aufbewahrungslösung suchen.",
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
              "name": "finish",
              "value": {
                "de-DE": "Sattel braun:#8b4513",
                "en-GB": "Saddle Brown:#8b4513",
                "en-US": "Saddle Brown:#8b4513",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Bookcase-1.1.jpeg",
            },
          ],
          "key": "modernBookcase01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900EUR",
              "recurrencePolicy": undefined,
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
              "recurrencePolicy": undefined,
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
              "recurrencePolicy": undefined,
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
        "attributes": null,
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
        "description": [
          {
            "locale": "en-GB",
            "value": "This Modern bookcase is designed with a simple and sleek look that blends well with modern decor. It has clean lines. The bookcase is made of wood and has a mahogany finish.  The shelves are open and spacious, providing ample space to store and display books, decorative objects, and other items.  In addition to its functional purpose, a minimalist bookcase also serves as a decorative piece of furniture. It is designed to blend seamlessly with its surroundings, without drawing too much attention to itself. As such, it is an excellent choice for those who want a stylish yet unobtrusive storage solution.",
          },
          {
            "locale": "de-DE",
            "value": "Dieses moderne Bücherregal hat ein einfaches und elegantes Design, das sich gut in die moderne Einrichtung einfügt. Es hat klare Linien. Das Bücherregal ist aus Holz gefertigt und mahagonifarben lackiert. Die offenen und geräumigen Regalböden bieten reichlich Platz zum Aufbewahren und Ausstellen von Büchern, Dekorationsobjekten und anderen Gegenständen. Ein minimalistisches Bücherregal erfüllt nicht nur einen funktionalen Zweck, sondern dient auch als dekoratives Möbelstück. Es ist so konzipiert, dass es sich nahtlos in seine Umgebung einfügt, ohne zu viel Aufmerksamkeit auf sich zu ziehen. Daher ist es eine ausgezeichnete Wahl für alle, die eine stilvolle, aber unauffällige Aufbewahrungslösung suchen.",
          },
          {
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
              "name": "finish",
              "value": "{"en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513","en-US":"Saddle Brown:#8b4513"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4600,
                "width": 2760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Bookcase-1.1.jpeg",
            },
          ],
          "key": "modernBookcase01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900EUR",
              "recurrencePolicy": undefined,
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
              "recurrencePolicy": undefined,
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
              "recurrencePolicy": undefined,
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
            "locale": "en-GB",
            "value": "Modern Bookcase",
          },
          {
            "locale": "de-DE",
            "value": "Modernes Bücherregal",
          },
          {
            "locale": "en-US",
            "value": "Modern Bookcase",
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
            "value": "modern-bookcase",
          },
          {
            "locale": "de-DE",
            "value": "modernes-bcherregal",
          },
          {
            "locale": "en-US",
            "value": "modern-bookcase",
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
