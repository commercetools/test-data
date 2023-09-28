import type { TProductDraft } from '../../../types';
import artDecoChair from './art-deco-chair';

describe(`with artDecoChair preset`, () => {
  it(`should return a artDecoChair preset`, () => {
    const artDecoChairPreset = artDecoChair().build<TProductDraft>();
    expect(artDecoChairPreset).toMatchInlineSnapshot(`
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
        "key": "art-deco-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Assembly on delivery",
      "de-DE": "- Selbstmontage",
      "en-US": "- Assembly on delivery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
      "en-US": "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
      "de-DE": "n Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Insgesamt ist dieser Stuhl ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht."
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Gray",
      "de-DE": "Grau",
      "en-US": "Gray"
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
    "name": "color",
    "value": {
      "en-GB": "#DAD7D0",
      "de-DE": "#DAD7D0",
      "en-US": "#DAD7D0"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_423223088-xpBtdxux.jpeg",
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
      "centAmount": 39900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 39900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 39900,
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
            "de-DE": "Art-Deco-Sessel",
            "en-GB": "Art Deco Chair",
            "en-US": "Art Deco Chair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "art-deco-stuhl",
            "en-GB": "art-deco-chair",
            "en-US": "art-deco-chair"
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
