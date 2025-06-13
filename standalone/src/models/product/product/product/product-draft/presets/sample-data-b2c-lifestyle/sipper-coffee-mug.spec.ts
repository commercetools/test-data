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
        "description": {
          "de": undefined,
          "de-DE": "Die Sipper-Tasse besteht aus Keramik und besticht durch ihr schlichtes Design mit seitlichem Henkel, der ein bequemes Halten und Trinken ermöglicht.  Das grundlegende Design ist minimalistisch und funktional. Der Körper des Bechers ist glatt abgerundet und hat eine breite Trinköffnung, die das Eingießen und Trinken von Heißgetränken erleichtert.  Der Sipper-Kaffeebecher ist leicht zu reinigen und zu pflegen. Er kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Sipper-Kaffeetasse ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Tee- oder Kaffeegenuss zu Hause oder auf der Arbeit eignet. Ihr schlichtes Design und die benutzerfreundliche Handhabung machen sie zu einer beliebten Wahl für Kaffeeliebhaber aller Art.",
          "en": undefined,
          "en-GB": "The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
          "en-US": "The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
          "fr": undefined,
        },
        "key": "sipper-coffee-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Tasse",
                "en-GB": "- Includes 1 mug",
                "en-US": "- Includes 1 mug",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Weiß",
                  "en-GB": "White",
                  "en-US": "White",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#FFFFFF",
                "en-GB": "#FFFFFF",
                "en-US": "#FFFFFF",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sipper_Coffee_Mug-1.1.jpeg",
            },
          ],
          "key": "sipperCoffeeMug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SCM-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sipper-Kaffeetasse",
          "en": undefined,
          "en-GB": "Sipper Coffee Mug",
          "en-US": "Sipper Coffee Mug",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "sipper-kaffeetasse",
          "en": undefined,
          "en-GB": "sipper-coffee-mug",
          "en-US": "sipper-coffee-mug",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a sipperCoffeeMug preset when built for graphql`, () => {
    const sipperCoffeeMugPresetGraphql =
      sipperCoffeeMug().buildGraphql<TProductDraft>();
    expect(sipperCoffeeMugPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
        "description": [
          {
            "locale": "en-GB",
            "value": "The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
          },
          {
            "locale": "en-US",
            "value": "The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
          },
          {
            "locale": "de-DE",
            "value": "Die Sipper-Tasse besteht aus Keramik und besticht durch ihr schlichtes Design mit seitlichem Henkel, der ein bequemes Halten und Trinken ermöglicht.  Das grundlegende Design ist minimalistisch und funktional. Der Körper des Bechers ist glatt abgerundet und hat eine breite Trinköffnung, die das Eingießen und Trinken von Heißgetränken erleichtert.  Der Sipper-Kaffeebecher ist leicht zu reinigen und zu pflegen. Er kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Sipper-Kaffeetasse ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Tee- oder Kaffeegenuss zu Hause oder auf der Arbeit eignet. Ihr schlichtes Design und die benutzerfreundliche Handhabung machen sie zu einer beliebten Wahl für Kaffeeliebhaber aller Art.",
          },
        ],
        "key": "sipper-coffee-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 mug","en-US":"- Includes 1 mug","de-DE":"- Enthält 1 Tasse"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"White","de-DE":"Weiß","en-US":"White"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#FFFFFF","en-GB":"#FFFFFF","de-DE":"#FFFFFF"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sipper_Coffee_Mug-1.1.jpeg",
            },
          ],
          "key": "sipperCoffeeMug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SCM-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sipper Coffee Mug",
          },
          {
            "locale": "en-GB",
            "value": "Sipper Coffee Mug",
          },
          {
            "locale": "de-DE",
            "value": "Sipper-Kaffeetasse",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sipper-coffee-mug",
          },
          {
            "locale": "en-GB",
            "value": "sipper-coffee-mug",
          },
          {
            "locale": "de-DE",
            "value": "sipper-kaffeetasse",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
