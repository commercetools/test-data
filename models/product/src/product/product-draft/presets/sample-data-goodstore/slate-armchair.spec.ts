import type { TProductDraft } from '../../../types';
import slateArmchair from './slate-armchair';

describe(`with slateArmchair preset`, () => {
  it(`should return a slateArmchair preset`, () => {
    const slateArmchairPreset = slateArmchair().build<TProductDraft>();
    expect(slateArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
          "de-DE": "Das minimalistische Sitzmöbel mit Ottomane besticht durch sein schlankes und schlichtes Design, bei dem klare Linien und Funktionalität im Vordergrund stehen. Die Ottomane ist passend zu dem Lounge-Möbel designt und bietet erweiterten Sitzkomfort. Das Polstermöbel ist mit seinen neutralen Farben und schlichten Mustern minimalistisch gehalten. Das Design ist von der modernen Ästhetik inspiriert und legt seinen Fokus auf Schlichtheit und Funktionalität. Das Ergebnis ist ein bequemer und stilvoller Sessel, der sich problemlos in eine Vielzahl von Einrichtungsstilen einfügt.",
          "en": undefined,
          "en-GB": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
          "en-US": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
          "fr": undefined,
        },
        "key": "slate-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Inklusive Ottomane",
                "en-GB": "- Includes ottoman",
                "en-US": "- Includes ottoman",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#989898",
                "en-GB": "#989898",
                "en-US": "#989898",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Schiefer",
                "en-GB": "Slate",
                "en-US": "Slate",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4004,
                "w": 5009,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Slate_Armchair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3498,
                "w": 5544,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Slate_Armchair-1.2.jpeg",
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
                "centAmount": 59900,
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
                "centAmount": 59900,
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
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SARM-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel aus Schiefer",
          "en": undefined,
          "en-GB": "Slate Armchair",
          "en-US": "Slate Armchair",
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
          "de-DE": "sessel-aus-schiefer",
          "en": undefined,
          "en-GB": "slate-armchair",
          "en-US": "slate-armchair",
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

  it(`should return a slateArmchair preset when built for graphql`, () => {
    const slateArmchairPresetGraphql =
      slateArmchair().buildGraphql<TProductDraft>();
    expect(slateArmchairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Das minimalistische Sitzmöbel mit Ottomane besticht durch sein schlankes und schlichtes Design, bei dem klare Linien und Funktionalität im Vordergrund stehen. Die Ottomane ist passend zu dem Lounge-Möbel designt und bietet erweiterten Sitzkomfort. Das Polstermöbel ist mit seinen neutralen Farben und schlichten Mustern minimalistisch gehalten. Das Design ist von der modernen Ästhetik inspiriert und legt seinen Fokus auf Schlichtheit und Funktionalität. Das Ergebnis ist ein bequemer und stilvoller Sessel, der sich problemlos in eine Vielzahl von Einrichtungsstilen einfügt.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.",
          },
        ],
        "key": "slate-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes ottoman","en-US":"- Includes ottoman","de-DE":"- Inklusive Ottomane"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#989898","de-DE":"#989898","en-US":"#989898"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Slate","de-DE":"Schiefer","en-US":"Slate"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4004,
                "width": 5009,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Slate_Armchair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3498,
                "width": 5544,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Slate_Armchair-1.2.jpeg",
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
                  "centAmount": 59900,
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
                  "centAmount": 59900,
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
                  "centAmount": 59900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SARM-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Slate Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Slate Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Sessel aus Schiefer",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "slate-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "slate-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "sessel-aus-schiefer",
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
