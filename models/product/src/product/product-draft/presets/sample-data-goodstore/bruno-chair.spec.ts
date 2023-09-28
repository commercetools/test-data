import type { TProductDraft } from '../../../types';
import brunoChair from './bruno-chair';

describe(`with brunoChair preset`, () => {
  it(`should return a brunoChair preset`, () => {
    const brunoChairPreset = brunoChair().build<TProductDraft>();
    expect(brunoChairPreset).toMatchInlineSnapshot(`
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
        "key": "bruno-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Includes 1 chair",
      "de-DE": "- Beinhaltet 1 Stuhl",
      "en-US": "- Includes 1 chair"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.",
      "en-US": "A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.",
      "de-DE": "Ein moderner Stuhl aus Leinen und Holz zeichnet sich durch ein einfaches, aber stilvolles Design aus. Der Stuhl hat einen schlanken Holzrahmen, der in einem natürlichen Holzfinish gebeizt ist. Der Sitz und die Rückenlehne bestehen aus einem weichen Leinenstoff, der für Komfort gepolstert ist. Der Leinenstoff ist ein neutrales Beige.  Die Rückenlehne des Stuhls ist leicht angewinkelt, was dem Benutzer zusätzlichen Komfort und Unterstützung bietet. Die Beine des Stuhls sind leicht konisch und haben schützende Fußpolster, um Schäden am Bodenbelag zu vermeiden.  Insgesamt ist dieser moderne Leinen- und Holzstuhl eine vielseitige und elegante Ergänzung für jedes Wohnzimmer, Esszimmer oder Büro."
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#B29880",
      "de-DE": "#B29880",
      "en-US": "#B29880"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Beige",
      "de-DE": "Beige",
      "en-US": "Beige"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Birch",
      "de-DE": "Birke",
      "en-US": "Birch"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#FFC28D",
      "de-DE": "#FFC28D",
      "en-US": "#FFC28D"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#F5F5DC",
      "label": {
        "de-DE": "Beige",
        "en-GB": "Beige",
        "en-US": "Beige"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Bruno%20Chair-I8CgximE.jpeg",
    "dimensions": {
      "w": 6473,
      "h": 4315
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
      "centAmount": 7999,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 7999,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 7999,
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
            "de-DE": "Sessel "Bruno"",
            "en-GB": "Bruno Chair",
            "en-US": "Bruno Chair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "bruno-stuhl",
            "en-GB": "bruno-chair",
            "en-US": "bruno-chair"
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
