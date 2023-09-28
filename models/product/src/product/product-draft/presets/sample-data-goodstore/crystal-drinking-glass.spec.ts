import type { TProductDraft } from '../../../types';
import crystalDrinkingGlass from './crystal-drinking-glass';

describe(`with crystalDrinkingGlass preset`, () => {
  it(`should return a crystalDrinkingGlass preset`, () => {
    const crystalDrinkingGlassPreset =
      crystalDrinkingGlass().build<TProductDraft>();
    expect(crystalDrinkingGlassPreset).toMatchInlineSnapshot(`
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
        "key": "crystal-drinking-glass",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Set includes 6 glasses",
      "de-DE": "- Set enthält 6 Gläser",
      "en-US": "- Set includes 6 glasses"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.",
      "en-US": "This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.",
      "de-DE": "Dieses Kristall-Trinkglas besteht aus hochwertigem, bleifreiem Kristallglas, das dünn und zart, aber dennoch stark und langlebig ist. Das Kristallmaterial des Longdrinkglases wertet das Getränk auf und lässt es funkelnder und farbenfroher erscheinen. Es verbessert auch das Aroma und den Geschmack des Getränks und ermöglicht es dem Trinker, die Komplexität der Zutaten voll zu schätzen.  Das Design des Glases soll die Zugabe von Eis, Soda oder anderen Mixern ermöglichen und dennoch viel Platz für das Getränk selbst lassen. Die weite Öffnung des Glases lässt den Trinker das Aroma des Getränks riechen, während die geraden Seiten und die glatte Oberfläche das Trinken und Genießen erleichtern.  Das Kristall-Highballglas ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist das Highball-Glas aus Kristall ein stilvolles und elegantes Glasgeschirr, das sich perfekt zum Servieren von großen Mixgetränken eignet. Sein zartes Kristallmaterial und sein kompliziertes Design machen es zu einer beliebten Wahl für besondere Anlässe und gehobene Speiseerlebnisse."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Crystal%20Drinking%20Gla-8ynxF_aM.jpeg",
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
      "centAmount": 3499,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 3499,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 3499,
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
            "de-DE": "Kristall-Glas",
            "en-GB": "Crystal Drinking Glass",
            "en-US": "Crystal Drinking Glass"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "kristall-trinkglas",
            "en-GB": "crystal-drinking-glass",
            "en-US": "crystal-drinking-glass"
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
