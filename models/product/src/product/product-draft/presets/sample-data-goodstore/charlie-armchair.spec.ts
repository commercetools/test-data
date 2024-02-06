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
              "name": "colorlabel",
              "value": {
                "de-DE": "Terrakotta",
                "en-GB": "Terracotta",
                "en-US": "Terracotta",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#D57912",
                "en-GB": "#D57912",
                "en-US": "#D57912",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Zeder",
                "en-GB": "Cedar",
                "en-US": "Cedar",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#ECD0B2",
                "en-GB": "#ECD0B2",
                "en-US": "#ECD0B2",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFA500",
                "label": {
                  "de-DE": "Orange",
                  "en-GB": "Orange",
                  "en-US": "Orange",
                },
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charlie_Armchair-1.1.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
          },
          {
            "__typename": "LocalizedString",
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
              "name": "colorlabel",
              "value": "{"en-GB":"Terracotta","de-DE":"Terrakotta","en-US":"Terracotta"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#D57912","de-DE":"#D57912","en-US":"#D57912"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Cedar","de-DE":"Zeder","en-US":"Cedar"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#ECD0B2","de-DE":"#ECD0B2","en-US":"#ECD0B2"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFA500","label":{"de-DE":"Orange","en-GB":"Orange","en-US":"Orange"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charlie_Armchair-1.1.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Charlie Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Charlie Armchair",
          },
          {
            "__typename": "LocalizedString",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "charlie-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "charlie-armchair",
          },
          {
            "__typename": "LocalizedString",
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
