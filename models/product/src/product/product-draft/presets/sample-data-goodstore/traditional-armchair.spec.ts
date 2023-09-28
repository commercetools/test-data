import type { TProductDraft } from '../../../types';
import traditionalArmchair from './traditional-armchair';

describe(`with traditionalArmchair preset`, () => {
  it(`should return a traditionalArmchair preset`, () => {
    const traditionalArmchairPreset =
      traditionalArmchair().build<TProductDraft>();
    expect(traditionalArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "traditional-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Cotton upholstery",
      "de-DE": "- Baumwollpolsterung",
      "en-US": "- Cotton upholstery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
      "en-US": "A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.",
      "de-DE": "Ein traditioneller Sessel mit geometrischem Muster hat ein klassisches Design mit einem Hauch von modernem Flair. Der Stuhl hat einen Rahmen und Beine aus Holz. Der Stuhl hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet ein weiches Gefühl für Sitz und Rückenlehne. Das geometrische Muster fügt dem Gesamtbild des Stuhls ein visuelles Interesse und eine Textur hinzu und verleiht dem Dekor des Raums ein subtiles, aber auffälliges Element.  Insgesamt könnte ein traditioneller Sessel mit geometrischem Muster eine großartige Ergänzung für ein Wohn-, Arbeits- oder Schlafzimmer sein und dem Raum sowohl Komfort als auch Stil verleihen."
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
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#D0C1B0",
      "de-DE": "#D0C1B0",
      "en-US": "#D0C1B0"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Eggshell",
      "de-DE": "Eierschale",
      "en-US": "Eggshell"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688619-r47M4s9Q.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305687866-ED2hLSUD.jpeg",
    "dimensions": {
      "w": 2500,
      "h": 2500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688508-6hRWGih2.jpeg",
    "dimensions": {
      "w": 5760,
      "h": 3840
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
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 29900,
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
            "de-DE": "Traditioneller Sessel",
            "en-GB": "Traditional Armchair",
            "en-US": "Traditional Armchair"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "traditioneller-sessel",
            "en-GB": "traditional-armchair",
            "en-US": "traditional-armchair"
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
