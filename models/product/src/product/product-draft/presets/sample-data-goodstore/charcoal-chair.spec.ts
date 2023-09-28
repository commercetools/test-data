import type { TProductDraft } from '../../../types';
import charcoalChair from './charcoal-chair';

describe(`with charcoalChair preset`, () => {
  it(`should return a charcoalChair preset`, () => {
    const charcoalChairPreset = charcoalChair().build<TProductDraft>();
    expect(charcoalChairPreset).toMatchInlineSnapshot(`
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
        "key": "charcoal-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Includes 1 chair",
      "de-DE": "- Lieferumfang: 1 Stuhl",
      "en-US": "- Includes 1 chair"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
      "en-US": "This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.",
      "de-DE": "Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.  Der Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.  Insgesamt ist ein Stuhl mit Lederpolsterung typischerweise elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum."
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#000",
      "de-DE": "#000",
      "en-US": "#000"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Charcoal",
      "de-DE": "Holzkohle",
      "en-US": "Charcoal"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#000",
      "label": {
        "de-DE": "Schwarz",
        "en-GB": "Black",
        "en-US": "Black"
      }
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Oak",
      "de-DE": "Eiche",
      "en-US": "Oak"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#E2C897",
      "de-DE": "#E2C897",
      "en-US": "#E2C897"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246579-uvZeDfRx.jpeg",
    "dimensions": {
      "w": 3300,
      "h": 5309
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532246581-FUm1-Kr_.jpeg",
    "dimensions": {
      "w": 5906,
      "h": 5906
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
      "centAmount": 9900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 9900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 9900,
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
            "de-DE": "Stuhl "Hokzkohle"",
            "en-GB": "Charcoal Chair",
            "en-US": "Charcoal Chair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "holzkohle-stuhl",
            "en-GB": "charcoal-chair",
            "en-US": "charcoal-chair"
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
