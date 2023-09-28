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
        "key": "charlie-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Dry clean only",
      "de-DE": "- Nur chemische Reinigung",
      "en-US": "- Dry clean only"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
      "en-US": "A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.",
      "de-DE": "Ein Cordstuhl mit Holzbeinen hat eine gemütliche und rustikale Ausstrahlung. Der Stuhl hat einen stabilen Holzrahmen und vier gerade, sich verjüngende Beine, die den Sitz und die Rückenlehne tragen. Die Kordsamtpolsterung ist ein weicher und plüschiger Stoff mit einer unverwechselbaren gerippten Textur, die dem Stuhl visuelles Interesse und Tiefe verleiht. Die Farbe des Cords ist ein warmer und erdiger Ton. Die Holzbeine sind in einer natürlichen Holzbeize ausgeführt. Der Stuhl hat ein einfaches und dezentes Design, das zu einer Vielzahl von Einrichtungsstilen passt."
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Terracotta",
      "de-DE": "Terrakotta",
      "en-US": "Terracotta"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#D57912",
      "de-DE": "#D57912",
      "en-US": "#D57912"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Cedar",
      "de-DE": "Zeder",
      "en-US": "Cedar"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#ECD0B2",
      "de-DE": "#ECD0B2",
      "en-US": "#ECD0B2"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#FFA500",
      "label": {
        "de-DE": "Orange",
        "en-GB": "Orange",
        "en-US": "Orange"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_303920112-eT2e5OWo.jpeg",
    "dimensions": {
      "w": 5500,
      "h": 4400
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
      "centAmount": 49900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 49900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 49900,
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
            "de-DE": "Sessel "Charlie"",
            "en-GB": "Charlie Armchair",
            "en-US": "Charlie Armchair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "charlie-sessel",
            "en-GB": "charlie-armchair",
            "en-US": "charlie-armchair"
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
