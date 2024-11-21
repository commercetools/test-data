import type { TProductDraft } from '../../../types';
import comfortCoffeeMug from './comfort-coffee-mug';
describe(`with comfortCoffeeMug preset`, () => {
  it('should return a sample comfortCoffeeMug product preset', () => {
    const comfortCoffeeMugPreset = comfortCoffeeMug().build<TProductDraft>();
    expect(comfortCoffeeMugPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Unsere Komfort-Kaffeestasse ist aus Keramik gefertigt. Das Design der Tasse die für ein optimales Trinkerlebenis optimiert - unter anderem durch einen Griff auf einer Seite für bequemen Halt.  Der Becher ist schlicht und sein zeitloses Design ist einfach und funktional. Die Komfort-Kaffeetasse ist leicht zu reinigen und zu pflegen. Sie kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Diese Komfort-Kaffeetasse ist ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Kaffeegenuss zu Hause oder am Arbeitsplatz eignet. Sein einfaches Design und seine Benutzerfreundlichkeit machen ihn zu einer beliebten Wahl für Kaffeeliebhaber.",
          "en": undefined,
          "en-GB": "The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
          "en-US": "The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.",
          "fr": undefined,
        },
        "key": "comfort-coffee-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Tasse
      - Spülmaschinen- und mikrowellengeeignet",
                "en-GB": "- Includes 1 mug
      - Dishwasher and microwave safe",
                "en-US": "- Includes 1 mug
      - Dishwasher and microwave safe",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Weiß:#FFFFFF",
                "en-GB": "White:#FFFFFF",
                "en-US": "White:#FFFFFF",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2256,
                "w": 2340,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Comfort_Coffee_Mug-1.1.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "149USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 149,
                "currencyCode": "USD",
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199USD_dist",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CCM-089",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Komfort-Kaffeetasse",
          "en": undefined,
          "en-GB": "Comfort Coffee Mug",
          "en-US": "Comfort Coffee Mug",
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
          "de-DE": "komfort-kaffeetasse",
          "en": undefined,
          "en-GB": "comfort-coffee-mug",
          "en-US": "comfort-coffee-mug",
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
});
