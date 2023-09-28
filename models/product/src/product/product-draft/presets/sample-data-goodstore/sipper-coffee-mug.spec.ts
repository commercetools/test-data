import type { TProductDraft } from '../../../types';
import sipperCoffeeMug from './sipper-coffee-mug';

describe(`with sipperCoffeeMug preset`, () => {
  it(`should return a sipperCoffeeMug preset`, () => {
    const sipperCoffeeMugPreset = sipperCoffeeMug().build<TProductDraft>();
    expect(sipperCoffeeMugPreset).toMatchInlineSnapshot(`
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
        "key": "sipper-coffee-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Includes 1 mug",
      "de-DE": "- Enthält 1 Tasse",
      "en-US": "- Includes 1 mug"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
      "en-US": "The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
      "de-DE": "Der Sipper Coffee Mug besteht aus Keramik. Das Design des Bechers soll das Halten und Trinken erleichtern, mit einem Griff auf einer Seite für bequemen Halt.  Der Becher ist schlicht, aber sein grundlegendes Design ist im Allgemeinen einfach und funktional. Der Körper des Bechers hat oft glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee erleichtert.  Der Sipper-Kaffeebecher ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist der Sipper Coffee Mug ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Kaffeegenuss zu Hause oder auf der Arbeit eignet. Sein einfaches Design und seine Benutzerfreundlichkeit machen ihn zu einer beliebten Wahl für Kaffeeliebhaber aller Art."
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
    "name": "colorlabel",
    "value": {
      "en-GB": "White",
      "de-DE": "Weiß",
      "en-US": "White"
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
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sipper%20Coffee%20Mug-nig73QDs.jpeg",
    "dimensions": {
      "w": 4500,
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
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 299,
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
            "de-DE": "Sipper-Kaffeetasse",
            "en-GB": "Sipper Coffee Mug",
            "en-US": "Sipper Coffee Mug"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "sipper-kaffeetasse",
            "en-GB": "sipper-coffee-mug",
            "en-US": "sipper-coffee-mug"
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
