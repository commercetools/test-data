import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import traditionalArmchair from './traditional-armchair';

describe(`with traditionalArmchair preset`, () => {
  it(`should return a traditionalArmchair preset`, () => {
    const traditionalArmchairPreset =
      traditionalArmchair().build<TProductDraft>();
    expect(traditionalArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der traditionelle Sessel mit geometrischem Muster überzeugt mit einem klassischen Design und einem Hauch von modernem Flair. Rahmen und Beine des Stuhls sind aus Holz gefertigt. Er hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet so Komfort im Sitz- und Rückenbereich. Das geometrische Muster verleiht dem Gesamtbild des Stuhls einen visuellen Twist. Zusammen mit seiner Textur, verleiht er dem Dekor des Raums ein subtiles und dennoch auffälliges Element.  Dieser traditionelle Sessel mit geometrischem Muster ist eine großartige Ergänzung für den Wohn-, Arbeits- oder Schlafbereich und bereichert den Raum sowohl um Komfort als auch um Stil.",
          "en": undefined,
          "en-GB": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
          "en-US": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
          "fr": undefined,
        },
        "key": "traditional-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Baumwollpolsterung",
                "en-GB": "- Cotton upholstery",
                "en-US": "- Cotton upholstery",
              },
            },
            {
              "name": "search-color",
              "value": "yellow",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Mais seide",
                "en-GB": "Corn Silk",
                "en-US": "Corn Silk",
              },
            },
            {
              "name": "color-code",
              "value": "#FFF8DC",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Armchair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Armchair-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Armchair-1.2.jpeg",
            },
          ],
          "key": "traditionalArmchair01",
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
          "sku": "TARM-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Traditioneller Sessel",
          "en": undefined,
          "en-GB": "Traditional Armchair",
          "en-US": "Traditional Armchair",
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
          "de-DE": "traditioneller-sessel",
          "en": undefined,
          "en-GB": "traditional-armchair",
          "en-US": "traditional-armchair",
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

  it(`should return a traditionalArmchair preset when built for graphql`, () => {
    const traditionalArmchairPresetGraphql =
      traditionalArmchair().buildGraphql<TProductDraftGraphql>();
    expect(traditionalArmchairPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
          },
          {
            "locale": "de-DE",
            "value": "Der traditionelle Sessel mit geometrischem Muster überzeugt mit einem klassischen Design und einem Hauch von modernem Flair. Rahmen und Beine des Stuhls sind aus Holz gefertigt. Er hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet so Komfort im Sitz- und Rückenbereich. Das geometrische Muster verleiht dem Gesamtbild des Stuhls einen visuellen Twist. Zusammen mit seiner Textur, verleiht er dem Dekor des Raums ein subtiles und dennoch auffälliges Element.  Dieser traditionelle Sessel mit geometrischem Muster ist eine großartige Ergänzung für den Wohn-, Arbeits- oder Schlafbereich und bereichert den Raum sowohl um Komfort als auch um Stil.",
          },
          {
            "locale": "en-GB",
            "value": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
          },
        ],
        "key": "traditional-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Cotton upholstery","en-US":"- Cotton upholstery","de-DE":"- Baumwollpolsterung"}",
            },
            {
              "name": "search-color",
              "value": ""yellow"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Corn Silk","de-DE":"Mais seide","en-US":"Corn Silk"}",
            },
            {
              "name": "color-code",
              "value": ""#FFF8DC"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Armchair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Armchair-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Armchair-1.2.jpeg",
            },
          ],
          "key": "traditionalArmchair01",
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
          "sku": "TARM-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Traditional Armchair",
          },
          {
            "locale": "en-GB",
            "value": "Traditional Armchair",
          },
          {
            "locale": "de-DE",
            "value": "Traditioneller Sessel",
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
            "value": "traditional-armchair",
          },
          {
            "locale": "en-GB",
            "value": "traditional-armchair",
          },
          {
            "locale": "de-DE",
            "value": "traditioneller-sessel",
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
