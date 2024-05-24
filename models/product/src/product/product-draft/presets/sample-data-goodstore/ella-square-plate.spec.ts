import type { TProductDraft } from '../../../types';
import ellaSquarePlate from './ella-square-plate';
describe(`with ellaSquarePlate preset`, () => {
  it('should return a sample ellaSquarePlate product preset', () => {
    const ellaSquarePlatePreset = ellaSquarePlate().build<TProductDraft>();
    expect(ellaSquarePlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser quadratische Teller "Ella" ist ideal zum Servieren oder Präsentieren von Speisen, von Vorspeisen und Hauptgerichten bis hin zu Desserts und Snacks. Er kann sowohl für formelle als auch für ungezwungene Anlässe verwendet werden, und seine Einfachheit und Vielseitigkeit machen ihn zu einer beliebten Wahl für viele verschiedene Arten von Küchen.  Insgesamt ist ein quadratischer Keramikteller eine funktionale und stilvolle Wahl zum Servieren von Mahlzeiten und kann jedem Speiseerlebnis einen Hauch von Eleganz verleihen.",
          "en": undefined,
          "en-GB": "This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.",
          "en-US": "This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.",
          "fr": undefined,
        },
        "key": "ella-square-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Teller",
                "en-GB": "- Includes 1 plate",
                "en-US": "- Includes 1 plate",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#FFF",
                "en-GB": "#FFF",
                "en-US": "#FFF",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFF",
                "label": {
                  "de-DE": "Weiss",
                  "en-GB": "White",
                  "en-US": "White",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3412,
                "w": 5692,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ella_Square_Plate-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4912,
                "w": 7360,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ella_Square_Plate-1.2.jpeg",
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
                "centAmount": 1599,
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
                "centAmount": 1599,
                "currencyCode": "GBP",
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ESP-1",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Quadratischer Teller "Ella"",
          "en": undefined,
          "en-GB": "Ella Square Plate",
          "en-US": "Ella Square Plate",
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
          "de-DE": "ella-quadratische-platte",
          "en": undefined,
          "en-GB": "ella-square-plate",
          "en-US": "ella-square-plate",
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
