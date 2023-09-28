import type { TProductDraft } from '../../../types';
import cocktailStirringSpoon from './cocktail-stirring-spoon';

describe(`with cocktailStirringSpoon preset`, () => {
  it(`should return a cocktailStirringSpoon preset`, () => {
    const cocktailStirringSpoonPreset =
      cocktailStirringSpoon().build<TProductDraft>();
    expect(cocktailStirringSpoonPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
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
        "key": "cocktail-stirring-spoon",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Stainless steel\n- Dishwasher safe",
      "de-DE": "- Edelstahl\n- Spülmaschinenfest",
      "en-US": "- Stainless steel\n- Dishwasher safe"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.",
      "en-US": "A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.",
      "de-DE": "Ein Cocktail-Rührlöffel ist ein langes und schlankes Utensil aus Edelstahl, das zum Rühren und Mixen von Cocktails verwendet wird. Es ist normalerweise etwa 8 Zoll lang mit einem kleinen, flachen, scheibenförmigen Ende zum Vermischen von Zutaten und einem gedrehten oder spiralförmigen Griff zum einfachen Greifen. Der gedrehte Griff dient nicht nur der Dekoration, sondern verhilft auch zu einem besseren Halt beim Mixen von Cocktails."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_138383562-Ewqpr7_V.jpeg",
    "dimensions": {
      "w": 5757,
      "h": 4555
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
      "centAmount": 199,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 199,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 199,
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
            "de-DE": "Cocktail-Rührlöffel",
            "en-GB": "Cocktail Stirring Spoon",
            "en-US": "Cocktail Stirring Spoon"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "cocktail-rhrlffel",
            "en-GB": "cocktail-stirring-spoon",
            "en-US": "cocktail-stirring-spoon"
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
