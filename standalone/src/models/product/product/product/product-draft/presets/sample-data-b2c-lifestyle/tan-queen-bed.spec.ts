import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import tanQueenBed from './tan-queen-bed';

describe(`with tanQueenBed preset`, () => {
  it(`should return a tanQueenBed preset`, () => {
    const tanQueenBedPreset = tanQueenBed().build<TProductDraft>();
    expect(tanQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
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
          "de-DE": "Das Queensize-Bett mit gepolstertem Kopfteil aus Leder ist ein stilvolles und raffiniertes Möbelstück. Das Kopfteil ist hoch und breit und bietet ein gepolstertes Design mit luxuriösem Lederbezug, das es zu einen bequemen Platz zum Anlehnen im Bett macht. Das Leder ist weich und geschmeidig und verleiht dem Bett einen Hauch von Eleganz und Raffinesse.  Das Bettgestell besteht aus stabilem Holz und ist in passender Farbe zum Lederkopfteil gehalten. Das Bett hat einen Lattenrost, der eine solide Grundlage für die Matratze bietet und dem Komfort eines Boxspringbetts gleichkommt.  Diese Art von Bett wird oft in zeitgenössischen oder Übergangsdesignstilen bevorzugt und kann mit einer Reihe von Betttextilien und Dekorationsartikeln kombiniert werden, um einen luxuriösen und einladenden Schlafbereich zu schaffen. Ein Queensize-Bett mit einem gepolsterten Kopfteil aus Leder ist ein Statement-Stück, das jedem Schlafzimmer sowohl Komfort als auch Stil verleiht.",
          "en": undefined,
          "en-GB": "A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.",
          "en-US": "A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.",
          "fr": undefined,
        },
        "key": "tan-queen-bed",
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
              "value": "yellow",
            },
            {
              "name": "search-finish",
              "value": "brown",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Sattel braun",
                "en-GB": "Saddle Brown",
                "en-US": "Saddle Brown",
              },
            },
            {
              "name": "color-code",
              "value": "#D2B48C",
            },
            {
              "name": "finish-code",
              "value": "#8b4513",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3621,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Tan_Queen_Bed-1.1.jpeg",
            },
          ],
          "key": "tanQueenBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "LPQB-084",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Hellbraunes Queensize-Bett",
          "en": undefined,
          "en-GB": "Tan Queen Bed",
          "en-US": "Tan Queen Bed",
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
          "de-DE": "hellbraunes-queen-bett",
          "en": undefined,
          "en-GB": "tan-queen-bed",
          "en-US": "tan-queen-bed",
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

  it(`should return a tanQueenBed preset when built for graphql`, () => {
    const tanQueenBedPresetGraphql =
      tanQueenBed().buildGraphql<TProductDraftGraphql>();
    expect(tanQueenBedPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
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
            "locale": "en-US",
            "value": "A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.",
          },
          {
            "locale": "de-DE",
            "value": "Das Queensize-Bett mit gepolstertem Kopfteil aus Leder ist ein stilvolles und raffiniertes Möbelstück. Das Kopfteil ist hoch und breit und bietet ein gepolstertes Design mit luxuriösem Lederbezug, das es zu einen bequemen Platz zum Anlehnen im Bett macht. Das Leder ist weich und geschmeidig und verleiht dem Bett einen Hauch von Eleganz und Raffinesse.  Das Bettgestell besteht aus stabilem Holz und ist in passender Farbe zum Lederkopfteil gehalten. Das Bett hat einen Lattenrost, der eine solide Grundlage für die Matratze bietet und dem Komfort eines Boxspringbetts gleichkommt.  Diese Art von Bett wird oft in zeitgenössischen oder Übergangsdesignstilen bevorzugt und kann mit einer Reihe von Betttextilien und Dekorationsartikeln kombiniert werden, um einen luxuriösen und einladenden Schlafbereich zu schaffen. Ein Queensize-Bett mit einem gepolsterten Kopfteil aus Leder ist ein Statement-Stück, das jedem Schlafzimmer sowohl Komfort als auch Stil verleiht.",
          },
          {
            "locale": "en-GB",
            "value": "A queen bed with a padded leather headboard is a stylish and sophisticated piece of furniture. The headboard is tall and wide, featuring a padded design with luxurious leather upholstery that provides a comfortable place to lean against when sitting up in bed. The leather is soft and supple, adding a touch of elegance and refinement to the bed.  The bed frame is made of sturdy wood and is finished in a complementary color to the leather headboard. The bed also has a platform base, providing a solid foundation for the mattress while also eliminating the need for a box spring.  This type of bed is often favored in contemporary or transitional design styles and can be paired with a range of bedding and decor to create a luxurious and inviting sleeping space. Overall, a queen bed with a padded leather headboard is a statement piece that adds both comfort and style to any bedroom.",
          },
        ],
        "key": "tan-queen-bed",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
            },
            {
              "name": "search-color",
              "value": ""yellow"",
            },
            {
              "name": "search-finish",
              "value": ""brown"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
            },
            {
              "name": "color-code",
              "value": ""#D2B48C"",
            },
            {
              "name": "finish-code",
              "value": ""#8b4513"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3621,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Tan_Queen_Bed-1.1.jpeg",
            },
          ],
          "key": "tanQueenBed01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 129900,
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
              "key": "129900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 129900,
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
              "key": "129900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "LPQB-084",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Tan Queen Bed",
          },
          {
            "locale": "en-GB",
            "value": "Tan Queen Bed",
          },
          {
            "locale": "de-DE",
            "value": "Hellbraunes Queensize-Bett",
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
            "value": "tan-queen-bed",
          },
          {
            "locale": "en-GB",
            "value": "tan-queen-bed",
          },
          {
            "locale": "de-DE",
            "value": "hellbraunes-queen-bett",
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
