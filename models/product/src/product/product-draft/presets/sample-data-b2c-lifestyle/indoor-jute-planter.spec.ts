import type { TProductDraft } from '../../../types';
import indoorJutePlanter from './indoor-jute-planter';

describe(`with indoorJutePlanter preset`, () => {
  it(`should return a indoorJutePlanter preset`, () => {
    const indoorJutePlanterPreset = indoorJutePlanter().build<TProductDraft>();
    expect(indoorJutePlanterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-accents",
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
          "de-DE": "Ein Indoor-Blumentopf für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Pflanzen in Ihrem Zuhause zu präsentieren. Der Blumentopf besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind. Die neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen. Die Jutefasern des Blumentopfes sind saugfähig und ermöglichen eine ordnungsgemäße Entwässerung und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten. Insgesamt ist ein Blumentopf aus Jute für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig die Umwelt zu schonen.",
          "en": undefined,
          "en-GB": "An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.",
          "en-US": "An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.",
          "fr": undefined,
        },
        "key": "indoor-jute-planter",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Pflanze nicht im Lieferumfang enthalten",
                "en-GB": "- Plant not included",
                "en-US": "- Plant not included",
              },
            },
            {
              "name": "size",
              "value": {
                "en-GB": "Large",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-1.1.jpeg",
            },
          ],
          "key": "indoorJutePlanter01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "IJP-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Indoor Jute Blumentopf ",
          "en": undefined,
          "en-GB": "Indoor Jute Planter",
          "en-US": "Indoor Jute Planter",
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
          "de-DE": "indoor-jute-planter",
          "en": undefined,
          "en-GB": "indoor-jute-planter",
          "en-US": "indoor-jute-planter",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Pflanze nicht im Lieferumfang enthalten",
                  "en-GB": "- Plant not included",
                  "en-US": "- Plant not included",
                },
              },
              {
                "name": "size",
                "value": {
                  "en-GB": "Small",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-2.1.jpeg",
              },
            ],
            "key": "indoorJutePlanter02",
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
            "sku": "IJP-04",
          },
        ],
      }
    `);
  });

  it(`should return a indoorJutePlanter preset when built for graphql`, () => {
    const indoorJutePlanterPresetGraphql =
      indoorJutePlanter().buildGraphql<TProductDraft>();
    expect(indoorJutePlanterPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.",
          },
          {
            "locale": "en-US",
            "value": "An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants.  The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully.  The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth.  Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Indoor-Blumentopf für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Pflanzen in Ihrem Zuhause zu präsentieren. Der Blumentopf besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind. Die neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen. Die Jutefasern des Blumentopfes sind saugfähig und ermöglichen eine ordnungsgemäße Entwässerung und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten. Insgesamt ist ein Blumentopf aus Jute für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig die Umwelt zu schonen.",
          },
        ],
        "key": "indoor-jute-planter",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Plant not included","en-US":"- Plant not included","de-DE":"- Pflanze nicht im Lieferumfang enthalten"}",
            },
            {
              "name": "size",
              "value": "{"en-GB":"Large"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-1.1.jpeg",
            },
          ],
          "key": "indoorJutePlanter01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
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
              "key": "3299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
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
              "key": "3299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "IJP-03",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Indoor Jute Planter",
          },
          {
            "locale": "en-GB",
            "value": "Indoor Jute Planter",
          },
          {
            "locale": "de-DE",
            "value": "Indoor Jute Blumentopf ",
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
            "value": "indoor-jute-planter",
          },
          {
            "locale": "en-GB",
            "value": "indoor-jute-planter",
          },
          {
            "locale": "de-DE",
            "value": "indoor-jute-planter",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-GB":"- Plant not included","en-US":"- Plant not included","de-DE":"- Pflanze nicht im Lieferumfang enthalten"}",
              },
              {
                "name": "size",
                "value": "{"en-GB":"Small"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-2.1.jpeg",
              },
            ],
            "key": "indoorJutePlanter02",
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
            "sku": "IJP-04",
            "staged": true,
          },
        ],
      }
    `);
  });
});
