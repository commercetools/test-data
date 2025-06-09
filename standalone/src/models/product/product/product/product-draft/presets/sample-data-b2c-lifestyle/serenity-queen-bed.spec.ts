import type { TProductDraft } from '../../../types';
import serenityQueenBed from './serenity-queen-bed';

describe(`with serenityQueenBed preset`, () => {
  it(`should return a serenityQueenBed preset`, () => {
    const serenityQueenBedPreset = serenityQueenBed().build<TProductDraft>();
    expect(serenityQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das Queensize-Bett mit gepolstertem Kopfteil im industriellen Look hat ein einzigartiges und kantigen Design. Das Kopfteil ist mit einem robusten beigefarbenen Stoff bezogen und ist mit Lederriemen versehen, die ihm zusammen mit den freiliegenden Schrauben ein industrielles Aussehen verleihen. Der Rahmen ist mit dem gleichen Stoff wie das Kopfteil bespannt. Das französische Bett hat ein schlichtes, minimalistisches Design unterstützt durch den Holzrahmen und den geraden Linien, die das Statement des Kopfteils abrunden. Das Bett eignet sich ideal für all diejenigen, die ihrem Schlafzimmerdekor einen Hauch von industriellem Charme verleihen möchten.",
          "en": undefined,
          "en-GB": "A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.",
          "en-US": "A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.",
          "fr": undefined,
        },
        "key": "serenity-queen-bed",
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
              "name": "search-color",
              "value": [
                "yellow",
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
            {
              "name": "color-code",
              "value": "#F5F5DC",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2000,
                "w": 2000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Serenity_Queen_Bed-1.1.jpeg",
            },
          ],
          "key": "serenityQueenBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "99900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 99900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "99900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 99900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "99900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 99900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "IQB-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Queensize-Bett >Serenity<",
          "en": undefined,
          "en-GB": "Serenity Queen Bed",
          "en-US": "Serenity Queen Bed",
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
          "de-DE": "gelassenheit-queen-bett",
          "en": undefined,
          "en-GB": "serenity-queen-bed",
          "en-US": "serenity-queen-bed",
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

  it(`should return a serenityQueenBed preset when built for graphql`, () => {
    const serenityQueenBedPresetGraphql =
      serenityQueenBed().buildGraphql<TProductDraft>();
    expect(serenityQueenBedPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.",
          },
          {
            "locale": "en-US",
            "value": "A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.",
          },
          {
            "locale": "de-DE",
            "value": "Das Queensize-Bett mit gepolstertem Kopfteil im industriellen Look hat ein einzigartiges und kantigen Design. Das Kopfteil ist mit einem robusten beigefarbenen Stoff bezogen und ist mit Lederriemen versehen, die ihm zusammen mit den freiliegenden Schrauben ein industrielles Aussehen verleihen. Der Rahmen ist mit dem gleichen Stoff wie das Kopfteil bespannt. Das französische Bett hat ein schlichtes, minimalistisches Design unterstützt durch den Holzrahmen und den geraden Linien, die das Statement des Kopfteils abrunden. Das Bett eignet sich ideal für all diejenigen, die ihrem Schlafzimmerdekor einen Hauch von industriellem Charme verleihen möchten.",
          },
        ],
        "key": "serenity-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
            },
            {
              "name": "search-color",
              "value": "["yellow"]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
            },
            {
              "name": "color-code",
              "value": ""#F5F5DC"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2000,
                "width": 2000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Serenity_Queen_Bed-1.1.jpeg",
            },
          ],
          "key": "serenityQueenBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "99900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 99900,
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
              "key": "99900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 99900,
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
              "key": "99900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 99900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "IQB-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Serenity Queen Bed",
          },
          {
            "locale": "en-GB",
            "value": "Serenity Queen Bed",
          },
          {
            "locale": "de-DE",
            "value": "Queensize-Bett >Serenity<",
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
            "value": "serenity-queen-bed",
          },
          {
            "locale": "en-GB",
            "value": "serenity-queen-bed",
          },
          {
            "locale": "de-DE",
            "value": "gelassenheit-queen-bett",
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
