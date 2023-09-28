import type { TProductDraft } from '../../../types';
import cobblestoneRug from './cobblestone-rug';

describe(`with cobblestoneRug preset`, () => {
  it(`should return a cobblestoneRug preset`, () => {
    const cobblestoneRugPreset = cobblestoneRug().build<TProductDraft>();
    expect(cobblestoneRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rugs",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "cobblestone-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "product-description",
    "value": {
      "de-DE": "Der Cobblestone-Teppich kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Heimbüros. Es ist besonders beliebt in modernen und zeitgenössischen Einrichtungsstilen, wo sie dem Raum ein mutiges und grafisches Element hinzufügen können.  Insgesamt ist ein Teppich mit geometrischen Akzenten eine stilvolle und vielseitige Designwahl, die jedem Raum im Haus visuelles Interesse und Textur verleihen kann.",
      "en-GB": "The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.",
      "en-US": "The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#808080",
      "label": {
        "de-DE": "Grau",
        "en-GB": "Gray",
        "en-US": "Gray"
      }
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-GB": "- 5ft x 3ft",
      "de-DE": "- 5 Fuß x 3 Fuß",
      "en-US": "- 5ft x 3ft"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cobblestone%20Rug-n-Cz7uBo.jpeg",
    "dimensions": {
      "w": 7006,
      "h": 2820
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
      "centAmount": 12999,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 12999,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 12999,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Strukturteppich "Kopfsteinpflaster"",
            "en-GB": "Cobblestone Rug",
            "en-US": "Cobblestone Rug"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "kopfsteinpflaster",
            "en-GB": "cobblestone-rug",
            "en-US": "cobblestone-rug"
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
