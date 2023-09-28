import type { TProductDraft } from '../../../types';
import classicBeerMug from './classic-beer-mug';

describe(`with classicBeerMug preset`, () => {
  it(`should return a classicBeerMug preset`, () => {
    const classicBeerMugPreset = classicBeerMug().build<TProductDraft>();
    expect(classicBeerMugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "classic-beer-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Set includes 6 mugs",
      "de-DE": "- Set enthält 6 Gläser",
      "en-US": "- Set includes 6 mugs"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.",
      "en-US": "This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.",
      "de-DE": "Dieser klassische Bierkrug hat einen dicken und robusten Griff, der das Halten erleichtert und verhindert, dass die Hand des Trinkers das Bier erwärmt. Der Becher ist aus Glas. Durch dieses Design kann sich das Bier absetzen und seinen vollen Geschmack und sein volles Aroma entwickeln. Die dicken Wände des Krugs helfen, das Bier zu isolieren und länger kalt zu halten.  Der Becher fasst normalerweise zwischen 12 und 20 Unzen Bier. Der Becher ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Classic%20Beer%20Mug-vv3guWkc.jpeg",
    "dimensions": {
      "w": 3606,
      "h": 5409
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
      "centAmount": 3599,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 3599,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 3599,
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
            "de-DE": "Klassischer Bierglas",
            "en-GB": "Classic Beer Mug",
            "en-US": "Classic Beer Mug"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "klassischer-bierkrug",
            "en-GB": "classic-beer-mug",
            "en-US": "classic-beer-mug"
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
