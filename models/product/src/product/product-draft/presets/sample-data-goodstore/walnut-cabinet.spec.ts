import type { TProductDraft } from '../../../types';
import walnutCabinet from './walnut-cabinet';

describe(`with walnutCabinet preset`, () => {
  it(`should return a walnutCabinet preset`, () => {
    const walnutCabinetPreset = walnutCabinet().build<TProductDraft>();
    expect(walnutCabinetPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "walnut-cabinet",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Assembly included in delivery",
      "de-DE": "- Montage im Lieferumfang enthalten",
      "en-US": "- Assembly included in delivery"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.",
      "en-US": "This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.",
      "de-DE": "Dieser Nussbaumschrank hat viele Schubladen, die in Reihen angeordnet sind, mit mehreren Schubladen pro Reihe. Die Schubladen sind groß und tief und bieten viel Stauraum. Die Schubladen können einfache Griffe haben.  Die Oberseite des Sideboards ist flach und glatt und kann zur Präsentation von Dekorationsgegenständen wie Vasen oder Kerzen verwendet werden.  Insgesamt ist ein großes Sideboard mit vielen Schubladen ein funktionales und praktisches Möbelstück, das jedem Raum Stil und Stauraum verleiht."
    }
  },
  {
    "name": "finishlabel",
    "value": {
      "en-GB": "Walnut",
      "de-DE": "Nussbaum",
      "en-US": "Walnut"
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#964B00",
      "label": {
        "de-DE": "Dunkelbraun",
        "en-GB": "Dark Brown",
        "en-US": "Dark Brown"
      }
    }
  },
  {
    "name": "finish",
    "value": {
      "en-GB": "#7A5905",
      "de-DE": "#7A5905",
      "en-US": "#7A5905"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35902325-W9YJNJS_.jpeg",
    "dimensions": {
      "w": 4400,
      "h": 2935
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35911040-3WO5GjjU.jpeg",
    "dimensions": {
      "w": 4400,
      "h": 2935
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
      "centAmount": 159900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 159900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 159900,
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
            "de-DE": "Nussbaum Schrank",
            "en-GB": "Walnut Cabinet",
            "en-US": "Walnut Cabinet"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "nussbaum-schrank",
            "en-GB": "walnut-cabinet",
            "en-US": "walnut-cabinet"
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
