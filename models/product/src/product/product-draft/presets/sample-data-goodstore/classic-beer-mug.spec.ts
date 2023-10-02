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
        "description": {
          "de": undefined,
          "de-DE": "Dieser klassische Bierkrug hat einen robusten Griff, der das Halten erleichtert und verhindert, dass die Hand des Trinkers das Bier erwärmt. Als Material wird hochwertiges Glas eingesetzt. Durch dieses Design kann das Bier seinen vollen Geschmack und sein volles Aroma entfalten. Die robusten Wände des Krugs bilden eine Art Isolationsschicht und halten somit länger das Bier länger kalt.  Der Becher fasst normalerweise zwischen 12 und 20 Unzen Bier. Der Becher ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.",
          "en": undefined,
          "en-GB": "This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.",
          "en-US": "This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.",
          "fr": undefined,
        },
        "key": "classic-beer-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Das Set enthält 6 Tassen",
                "en-GB": "- Set includes 6 mugs",
                "en-US": "- Set includes 6 mugs",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5409,
                "w": 3606,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Classic%20Beer%20Mug-vv3guWkc.jpeg",
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3599,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CBM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Klassisches Bierglas",
          "en": undefined,
          "en-GB": "Classic Beer Mug",
          "en-US": "Classic Beer Mug",
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
          "de-DE": "klassischer-bierkrug",
          "en": undefined,
          "en-GB": "classic-beer-mug",
          "en-US": "classic-beer-mug",
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

  it(`should return a classicBeerMug preset when built for graphql`, () => {
    const classicBeerMugPresetGraphql =
      classicBeerMug().buildGraphql<TProductDraft>();
    expect(classicBeerMugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "glassware",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "This Classic Beer Mug has a thick and sturdy handle that makes it easy to hold and prevents the drinker's hand from warming the beer. The mug is made of glass. This design allows the beer to settle and develop its full flavor and aroma. The thick walls of the mug help to insulate the beer and keep it cold for longer.  The mug typically holds between 12 and 20 ounces of beer. The mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Dieser klassische Bierkrug hat einen robusten Griff, der das Halten erleichtert und verhindert, dass die Hand des Trinkers das Bier erwärmt. Als Material wird hochwertiges Glas eingesetzt. Durch dieses Design kann das Bier seinen vollen Geschmack und sein volles Aroma entfalten. Die robusten Wände des Krugs bilden eine Art Isolationsschicht und halten somit länger das Bier länger kalt.  Der Becher fasst normalerweise zwischen 12 und 20 Unzen Bier. Der Becher ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.",
          },
        ],
        "key": "classic-beer-mug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Set includes 6 mugs","de-DE":"- Das Set enthält 6 Tassen","en-US":"- Set includes 6 mugs"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5409,
                "width": 3606,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Classic%20Beer%20Mug-vv3guWkc.jpeg",
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3599,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3599,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3599,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CBM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Classic Beer Mug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Classic Beer Mug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Klassisches Bierglas",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "classic-beer-mug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "classic-beer-mug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "klassischer-bierkrug",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
