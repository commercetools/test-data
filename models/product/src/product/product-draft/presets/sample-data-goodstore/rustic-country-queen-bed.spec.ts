import type { TProductDraft } from '../../../types';
import rusticCountryQueenBed from './rustic-country-queen-bed';

describe(`with rusticCountryQueenBed preset`, () => {
  it(`should return a rusticCountryQueenBed preset`, () => {
    const rusticCountryQueenBedPreset =
      rusticCountryQueenBed().build<TProductDraft>();
    expect(rusticCountryQueenBedPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bedroom-furniture",
      "typeId": "category",
    },
    {
      "key": "beds",
      "typeId": "category",
    },
    {
      "key": "furniture",
      "typeId": "category",
    },
    {
      "key": "new-arrivals",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Das rustikale Queensize-Bett mit dem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Struktur verleiht. Das Bett hat einen stabilen Holzrahmen im Vintage-Look, der zum Relaxen einlädt.  Das Kopfteil des Bettes ist mit weichem Wildleder bezogen und bietet eine bequeme und stilvolle Rückenlehne zum Lesen oder Entspannen im Bett. Das Wildledermaterial verleiht dem Bett luxuriöses Gefühl zum Anfassen und schafft eine gemütliche und einladende Atmosphäre im Schlafzimmer.  Der stabile Holzlattenrost des Betts bietet eine solide Grundlage für die Matratze und somit für einen komfortablen und erholsamen Schlaf.  Das rustikale Queensize-Bett mit Kopfteil aus Wildleder ist sowohl funktional als auch stilvoll designt. Zu dem Bett gibt es eine passende Kommode, mit der ein zusammenhängendes und stilvolles Schlafzimmerdekor geschaffen werden kann.  Ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das Wärme und Textur in jedes Schlafzimmer bringt. Seine robuste Konstruktion, sein komfortables Design und der charmant-rustikale Charakter machen es zu einer funktionalen und schönen Ergänzung für jedes Zuhause im angesagten Landhausstil.",
    "en": undefined,
    "en-GB": "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.",
    "en-US": "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.",
    "fr": undefined,
  },
  "key": "rustic-country-queen-bed",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "color",
        "value": {
          "de-DE": "Bräunen:#D2B48C",
          "en-GB": "Tan:#D2B48C",
          "en-US": "Tan:#D2B48C",
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
      {
        "name": "productspec",
        "value": {
          "de-DE": "- Leather upholstery
- Standard Queen size
- Assembly on site",
          "en-GB": "- Leather upholstery
- Standard Queen size
- Assembly on site",
          "en-US": "- Leather upholstery
- Standard Queen size
- Assembly on site",
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
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Country_Queen_Bed-1.1.jpeg",
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
          "centAmount": 329900,
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
          "centAmount": 329900,
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
          "centAmount": 329900,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "RCQB-01",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Rustikales Queensize-Bett im Landhausstil",
    "en": undefined,
    "en-GB": "Rustic Country Queen Bed",
    "en-US": "Rustic Country Queen Bed",
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
    "de-DE": "rustikales-country-queen-bett",
    "en": undefined,
    "en-GB": "rustic-country-queen-bed",
    "en-US": "rustic-country-queen-bed",
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

  it(`should return a rusticCountryQueenBed preset when built for graphql`, () => {
    const rusticCountryQueenBedPresetGraphql =
      rusticCountryQueenBed().buildGraphql<TProductDraft>();
    expect(rusticCountryQueenBedPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bedroom-furniture",
      "typeId": "category",
    },
    {
      "key": "beds",
      "typeId": "category",
    },
    {
      "key": "furniture",
      "typeId": "category",
    },
    {
      "key": "new-arrivals",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "en-GB",
      "value": "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.",
    },
    {
      "locale": "en-US",
      "value": "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.",
    },
    {
      "locale": "de-DE",
      "value": "Das rustikale Queensize-Bett mit dem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Struktur verleiht. Das Bett hat einen stabilen Holzrahmen im Vintage-Look, der zum Relaxen einlädt.  Das Kopfteil des Bettes ist mit weichem Wildleder bezogen und bietet eine bequeme und stilvolle Rückenlehne zum Lesen oder Entspannen im Bett. Das Wildledermaterial verleiht dem Bett luxuriöses Gefühl zum Anfassen und schafft eine gemütliche und einladende Atmosphäre im Schlafzimmer.  Der stabile Holzlattenrost des Betts bietet eine solide Grundlage für die Matratze und somit für einen komfortablen und erholsamen Schlaf.  Das rustikale Queensize-Bett mit Kopfteil aus Wildleder ist sowohl funktional als auch stilvoll designt. Zu dem Bett gibt es eine passende Kommode, mit der ein zusammenhängendes und stilvolles Schlafzimmerdekor geschaffen werden kann.  Ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das Wärme und Textur in jedes Schlafzimmer bringt. Seine robuste Konstruktion, sein komfortables Design und der charmant-rustikale Charakter machen es zu einer funktionalen und schönen Ergänzung für jedes Zuhause im angesagten Landhausstil.",
    },
  ],
  "key": "rustic-country-queen-bed",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "color",
        "value": "{"en-US":"Tan:#D2B48C","en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C"}",
      },
      {
        "name": "finish",
        "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513"}",
      },
      {
        "name": "productspec",
        "value": "{"en-US":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","en-GB":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site","de-DE":"- Leather upholstery\\n- Standard Queen size\\n- Assembly on site"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 5000,
          "width": 5000,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Country_Queen_Bed-1.1.jpeg",
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
            "centAmount": 329900,
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
            "centAmount": 329900,
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
            "centAmount": 329900,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "RCQB-01",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Rustic Country Queen Bed",
    },
    {
      "locale": "en-GB",
      "value": "Rustic Country Queen Bed",
    },
    {
      "locale": "de-DE",
      "value": "Rustikales Queensize-Bett im Landhausstil",
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
      "value": "rustic-country-queen-bed",
    },
    {
      "locale": "en-GB",
      "value": "rustic-country-queen-bed",
    },
    {
      "locale": "de-DE",
      "value": "rustikales-country-queen-bett",
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
