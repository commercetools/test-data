import type { TProductDraft } from '../../../types';
import charlieArmchair from './charlie-armchair';

describe(`with charlieArmchair preset`, () => {
  it(`should return a charlieArmchair preset`, () => {
    const charlieArmchairPreset = charlieArmchair().build<TProductDraft>();
    expect(charlieArmchairPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dieser Sessel mit Kordbezug und Holzbeinen hat eine gemütliche und rustikale Ausstrahlung. Der Stuhl hat einen stabilen Holzrahmen und vier gerade, sich verjüngende Beine, die den Sitz und die Rückenlehne tragen. Die Kordpolsterung ist ein weicher und plüschiger Stoff mit einer unverwechselbaren gerippten Textur, die dem Stuhl visuelle Rafinesse und Tiefe verleiht. Der Kordstoff ist in einem warmem und erdigen Ton gehalten. Die Holzbeine sind natürlich gebeizt. Der Stuhl hat ein einfaches und dezentes Design, das zu einer Vielzahl von Einrichtungsstilen passt.",
          "en": undefined,
          "en-GB": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
          "en-US": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
          "fr": undefined,
        },
        "key": "charlie-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Nur chemische Reinigung",
                "en-GB": "- Dry clean only",
                "en-US": "- Dry clean only",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Braun",
                  "en-GB": "Brown",
                  "en-US": "Brown",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Gelb",
                  "en-GB": "Yellow",
                  "en-US": "Yellow",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Peru",
                "en-GB": "Peru",
                "en-US": "Peru",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
            {
              "name": "color-code",
              "value": "#CD853F",
            },
            {
              "name": "finish-code",
              "value": "#D2B48C",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4400,
                "w": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charlie_Armchair-1.1.jpeg",
            },
          ],
          "key": "charlieArmchair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "49900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 49900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "49900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 49900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "49900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 49900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CARM-023",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel "Charlie"",
          "en": undefined,
          "en-GB": "Charlie Armchair",
          "en-US": "Charlie Armchair",
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
          "de-DE": "charlie-sessel",
          "en": undefined,
          "en-GB": "charlie-armchair",
          "en-US": "charlie-armchair",
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

  it(`should return a charlieArmchair preset when built for graphql`, () => {
    const charlieArmchairPresetGraphql =
      charlieArmchair().buildGraphql<TProductDraft>();
    expect(charlieArmchairPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
          },
          {
            "locale": "en-US",
            "value": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser Sessel mit Kordbezug und Holzbeinen hat eine gemütliche und rustikale Ausstrahlung. Der Stuhl hat einen stabilen Holzrahmen und vier gerade, sich verjüngende Beine, die den Sitz und die Rückenlehne tragen. Die Kordpolsterung ist ein weicher und plüschiger Stoff mit einer unverwechselbaren gerippten Textur, die dem Stuhl visuelle Rafinesse und Tiefe verleiht. Der Kordstoff ist in einem warmem und erdigen Ton gehalten. Die Holzbeine sind natürlich gebeizt. Der Stuhl hat ein einfaches und dezentes Design, das zu einer Vielzahl von Einrichtungsstilen passt.",
          },
        ],
        "key": "charlie-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Peru","de-DE":"Peru","en-US":"Peru"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
            },
            {
              "name": "color-code",
              "value": ""#CD853F"",
            },
            {
              "name": "finish-code",
              "value": ""#D2B48C"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charlie_Armchair-1.1.jpeg",
            },
          ],
          "key": "charlieArmchair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "49900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 49900,
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
              "key": "49900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 49900,
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
              "key": "49900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 49900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CARM-023",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Charlie Armchair",
          },
          {
            "locale": "en-GB",
            "value": "Charlie Armchair",
          },
          {
            "locale": "de-DE",
            "value": "Sessel "Charlie"",
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
            "value": "charlie-armchair",
          },
          {
            "locale": "en-GB",
            "value": "charlie-armchair",
          },
          {
            "locale": "de-DE",
            "value": "charlie-sessel",
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
