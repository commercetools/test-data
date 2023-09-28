import type { TProductDraft } from '../../../types';
import sallyArmchair from './sally-armchair';

describe(`with sallyArmchair preset`, () => {
  it(`should return a sallyArmchair preset`, () => {
    const sallyArmchairPreset = sallyArmchair().build<TProductDraft>();
    expect(sallyArmchairPreset).toMatchInlineSnapshot(`
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
        "key": "sally-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Comes with matching throw pillow",
      "de-DE": "- Wird mit passendem Dekokissen geliefert",
      "en-US": "- Comes with matching throw pillow"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
      "en-US": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
      "de-DE": "Ein getufteter Sessel mit Holzbeinen ist ein elegantes und bequemes Möbelstück. Der Stuhl verfügt über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem Plüschmaterial bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Holzbeine einen Hauch von Weichheit und Wärme hinzufügen. Die Beine sind dünn und verjüngt, was dem Stuhl ein schlankes und modernes Aussehen verleiht. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich."
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Baby Pink",
      "de-DE": "Baby Pink",
      "en-US": "Baby Pink"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#FFE0E0",
      "de-DE": "#FFE0E0",
      "en-US": "#FFE0E0"
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
      "en-GB": "#FAE7C6",
      "de-DE": "#FAE7C6",
      "en-US": "#FAE7C6"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#FFC0CB",
      "label": {
        "de-DE": "Rosa",
        "en-GB": "Pink",
        "en-US": "Pink"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_434126551-_8wicI2h.jpeg",
    "dimensions": {
      "w": 5000,
      "h": 4000
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
      "centAmount": 19900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 19900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 19900,
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
            "de-DE": "Sally Sessel",
            "en-GB": "Sally Armchair",
            "en-US": "Sally Armchair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "sally-sessel",
            "en-GB": "sally-armchair",
            "en-US": "sally-armchair"
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
