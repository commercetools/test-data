import type { TProductDraft } from '../../../types';
import sparkleChampagneGlass from './sparkle-champagne-glass';

describe(`with sparkleChampagneGlass preset`, () => {
  it(`should return a sparkleChampagneGlass preset`, () => {
    const sparkleChampagneGlassPreset =
      sparkleChampagneGlass().build<TProductDraft>();
    expect(sparkleChampagneGlassPreset).toMatchInlineSnapshot(`
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
        "key": "sparkle-champagne-glass",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "product-description",
    "value": {
      "de-DE": "Ein konisches Champagnerglas, auch als Champagnerflöte bekannt, ist eine Art Stielglas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Das Glas hat einen hohen, schmalen Kelch, der sich nach oben hin verjüngt, sodass der Trinker sehen kann, wie die Bläschen an die Oberfläche des Getränks aufsteigen.  Der hohe, schlanke Stiel des Glases hält die Hand des Trinkers von der Schale fern und verhindert, dass sich der Champagner durch Körperwärme erwärmt. Die Basis des Glases ist typischerweise breit und flach und sorgt für Stabilität und Balance.  Das Design des konisch zulaufenden Sektglases soll das Aroma und den Geschmack des Getränks verstärken. Der schmale Kelch konzentriert die Bläschen und das Aroma des Champagners und lenkt es zur Nase des Trinkers. Dadurch kann der Trinker das Aroma und den Geschmack des Champagners voll und ganz genießen.  Das konische Sektglas wird typischerweise zum Servieren von Sekt oder anderen Schaumweinen verwendet, kann aber auch für andere kohlensäurehaltige Getränke oder Cocktails verwendet werden. Es ist leicht zu reinigen und zu pflegen und kann von Hand oder in der Spülmaschine gewaschen werden.  Insgesamt ist das konische Champagnerglas ein stilvolles und elegantes Stielglas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Sein einzigartiges Design und die Liebe zum Detail machen es zu einer beliebten Wahl für besondere Anlässe und Feiern.",
      "en-US": "A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.",
      "en-GB": "A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations."
    }
  },
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Set includes 6 glasses",
      "de-DE": "- Das Set enthält 6 Gläser",
      "en-US": "- Set includes 6 glasses"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sparkle%20Champagne%20Gl-84bdD-ZE.jpeg",
    "dimensions": {
      "w": 3000,
      "h": 3000
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
      "centAmount": 4599,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 4599,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 4599,
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
            "de-DE": "Funkelndes Champagnerglas",
            "en-GB": "Sparkle Champagne Glass",
            "en-US": "Sparkle Champagne Glass"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "funkelndes-champagnerglas",
            "en-GB": "sparkle-champagne-glass",
            "en-US": "sparkle-champagne-glass"
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
