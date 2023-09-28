import type { TProductDraft } from '../../../types';
import nalaTwoSeaterSofa from './nala-two-seater-sofa';

describe(`with nalaTwoSeaterSofa preset`, () => {
  it(`should return a nalaTwoSeaterSofa preset`, () => {
    const nalaTwoSeaterSofaPreset = nalaTwoSeaterSofa().build<TProductDraft>();
    expect(nalaTwoSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
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
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "nala-two-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "color",
    "value": {
      "en-GB": "#5B5858",
      "de-DE": "#5B5858",
      "en-US": "#5B5858"
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#090909",
      "de-DE": "#090909",
      "en-US": "#090909"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Steel Gray",
      "de-DE": "Stahlgrau",
      "en-US": "Steel Gray"
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Ebony",
      "de-DE": "Ebenholz",
      "en-US": "Ebony"
    }
  },
  {
    "name": "new-arrival",
    "value": true
  },
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Two-seater sofa\n- Cotton linen upholstery",
      "de-DE": "- Zweisitzer-Sofa\n- Polsterung aus Baumwollleinen",
      "en-US": "- Two-seater sofa\n- Cotton linen upholstery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
      "en-US": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood or metal, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
      "de-DE": "Dieses moderne 2-Sitzer-Sofa ist eine stilvolle und komfortable Ergänzung für jeden Wohnraum. Das Sofa zeichnet sich durch ein schlankes und minimalistisches Design mit klaren Linien und einer zeitgemäßen Ästhetik aus. Es ist mit hochwertigem Baumwollstoff bezogen, der sich weich anfühlt und leicht zu reinigen ist. Die beiden Sitzkissen sind weich und stützend und bieten einen bequemen Platz zum Sitzen und Entspannen. Die Rückenlehne ist gut gepolstert und bietet reichlich Rückenunterstützung, während die Armlehnen für ein bequemes und entspanntes Gefühl sanft geschwungen sind. Das Gestell des Sofas besteht aus stabilem Holz oder Metall, sodass es viele Jahre hält. Mit einem modernen und minimalistischen Stil fügt sich dieses Sofa nahtlos in jede moderne Einrichtung ein, während die bequeme und hochwertige Polsterung es zu einem großartigen Ort zum Entspannen und Erholen macht."
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
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969001-vPDGxuEM.jpeg",
    "dimensions": {
      "w": 6000,
      "h": 3376
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286520-Il0fLxCr.jpeg",
    "dimensions": {
      "w": 6000,
      "h": 3376
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
      "centAmount": 129900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 129900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 129900,
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
            "de-DE": "Nala Zweisitzer-Sofa",
            "en-GB": "Nala Two-Seater Sofa",
            "en-US": "Nala Two-Seater Sofa"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "nala-zweisitzer-sofa",
            "en-GB": "nala-two-seater-sofa",
            "en-US": "nala-two-seater-sofa"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": [
[object Promise],
[object Promise],
[object Promise],
[object Promise],
[object Promise],
[object Promise]
       ]
      }
    `);
  });
});
