import type { TProductDraft } from '../../../types';
import rusticBowl from './rustic-bowl';

describe(`with rusticBowl preset`, () => {
  it(`should return a rusticBowl preset`, () => {
    const rusticBowlPreset = rusticBowl().build<TProductDraft>();
    expect(rusticBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
        ],
        "categoryOrderHints": undefined,
        "key": "rustic-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Includes 1 bowl",
      "de-DE": "- Enthält 1 Schüssel",
      "en-US": "- Includes 1 bowl"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
      "en-US": "This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.",
      "de-DE": "Diese quadratische Holzschale ist vielseitig und kann für eine Vielzahl von Zwecken verwendet werden, vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Es ist ideal für ungezwungene oder rustikale Speiseumgebungen und kann jedem Tisch einen Hauch von Wärme und natürlicher Schönheit verleihen.  Die quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Seine natürliche Schönheit und Langlebigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen und Anlässen."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rustic%20Bowl-eVQClQh7.jpeg",
    "dimensions": {
      "w": 5105,
      "h": 3280
    }
  }
]
,
          "sku": undefined,
          "prices": [
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "EUR",
      "centAmount": 199,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 199,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 199,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaDescription": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Rustikale Schale",
            "en-GB": "Rustic Bowl",
            "en-US": "Rustic Bowl"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "rustikale-schale",
            "en-GB": "rustic-bowl",
            "en-US": "rustic-bowl"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
