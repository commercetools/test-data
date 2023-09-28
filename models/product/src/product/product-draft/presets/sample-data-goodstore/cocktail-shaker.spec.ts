import type { TProductDraft } from '../../../types';
import cocktailShaker from './cocktail-shaker';

describe(`with cocktailShaker preset`, () => {
  it(`should return a cocktailShaker preset`, () => {
    const cocktailShakerPreset = cocktailShaker().build<TProductDraft>();
    expect(cocktailShakerPreset).toMatchInlineSnapshot(`
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
        "key": "cocktail-shaker",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Includes built in strainer\n- Stainless steel\n- Dishwasher safe",
      "de-DE": "- Inklusive eingebautem Sieb\n- Edelstahl\n- Spülmaschinenfest",
      "en-US": "- Includes built in strainer\n- Stainless steel\n- Dishwasher safe"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.",
      "en-US": "A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.",
      "de-DE": "Ein Cocktailshaker ist ein Werkzeug, das zum Mischen und Zubereiten von alkoholischen Getränken wie Cocktails verwendet wird. Es ist ein Metallbehälter mit einem Deckel, der dicht abschließt, um ein Verschütten zu verhindern. Der Behälter hat eine sich verjüngende Form mit einer breiteren Basis und einer schmaleren Oberseite. Dieses Design ermöglicht ein einfaches Mischen der Zutaten durch Schütteln. Der Deckel hat ein eingebautes Sieb, um die Flüssigkeit vom Eis und anderen festen Zutaten zu trennen. Der Shaker ist aus Edelstahl."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74255917-W96v6fME.jpeg",
    "dimensions": {
      "w": 3850,
      "h": 5500
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74620379%20-og0Draq4.jpeg",
    "dimensions": {
      "w": 5000,
      "h": 3750
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
      "centAmount": 699,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 699,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 699,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "name": {
            "de-DE": "Cocktail Shaker",
            "en-GB": "Cocktail Shaker",
            "en-US": "Cocktail Shaker"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "cocktail-shaker",
            "en-GB": "cocktail-shaker",
            "en-US": "cocktail-shaker"
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
