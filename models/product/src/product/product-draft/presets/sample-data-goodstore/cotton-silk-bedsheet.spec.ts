import type { TProductDraft } from '../../../types';
import cottonSilkBedsheet from './cotton-silk-bedsheet';

describe(`with cottonSilkBedsheet preset`, () => {
  it(`should return a cottonSilkBedsheet preset`, () => {
    const cottonSilkBedsheetPreset =
      cottonSilkBedsheet().build<TProductDraft>();
    expect(cottonSilkBedsheetPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "cotton-silk-bedsheet",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet",
      "en-US": "- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet",
      "de-DE": "- Maschinenwaschbar\n- Fadenanzahl: 600\n- Beinhaltet 1 Spannbetttuch"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "White",
      "de-DE": "Weiß",
      "en-US": "White"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#FFF",
      "de-DE": "#FFF",
      "en-US": "#FFF"
    }
  },
  {
    "name": "new-arrival",
    "value": false
  },
  {
    "name": "size",
    "value": {
      "en-GB": "Queen"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. ",
      "en-US": "Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. ",
      "de-DE": "Bettwäsche aus Baumwollseide besteht aus einer Mischung aus Baumwoll- und Seidenfasern. Baumwolle ist für ihre Strapazierfähigkeit, Atmungsaktivität und Pflegeleichtigkeit bekannt. Seide hingegen ist bekannt für ihre Geschmeidigkeit, ihren strahlenden Glanz und ihr luxuriöses Gefühl. Durch die Kombination beider bieten wir ein Produkt an, das Haltbarkeit, Atmungsaktivität und Luxus in Einklang bringt.  Bettwäsche aus Baumwollseide hat oft einen dezenten Seidenglanz, der sie luxuriöser aussehen lässt."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#FFF",
      "label": {
        "de-DE": "Weiss",
        "en-GB": "White",
        "en-US": "White"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_452514843-L0ubiJAn.jpeg",
    "dimensions": {
      "w": 7500,
      "h": 4500
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
      "centAmount": 1599,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 1599,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 1599,
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
            "de-DE": "Bettwäsche aus Baumwollseide",
            "en-GB": "Cotton Silk Bedsheet",
            "en-US": "Cotton Silk Bedsheet"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": {"en-GB":[]},
        "slug": {
            "de-DE": "bettwsche-aus-baumwollseide",
            "en-GB": "cotton-silk-bedsheet",
            "en-US": "cotton-silk-bedsheet"
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
[object Promise],
[object Promise],
[object Promise]
       ]
      }
    `);
  });
});
