import type { TProductDraft } from '../../../types';
import roundServingTray from './round-serving-tray';

describe(`with roundServingTray preset`, () => {
  it(`should return a roundServingTray preset`, () => {
    const roundServingTrayPreset = roundServingTray().build<TProductDraft>();
    expect(roundServingTrayPreset).toMatchInlineSnapshot(`
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
            "key": "cheese-trays",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das runde Serviertablett aus Holz ist ein vielseitiger und langlebiger Gegenstand, der in einer Vielzahl von Gelegenheiten zum Einsatz kommt. Das für das Tablett verwendete Holz mit seiner warmen und natürlichen Ästhetik sorgt für den rustikalen Charme. Runde Holztabletts sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden. Nach dem Gebrauch sollten sie gründlich getrocknet werden, damit keine Feuchtigkeit im Inneren eingeschlossen wird. Ein rundes Serviertablett aus Holz ist ein praktisches und zugleich attraktives Designelement, das jedes Ambiente mit seiner natürlichen Eleganz komplementiert. Es ist langlebig und vielseitig einsetzbar zum Servieren und Präsentieren von Speisen und Getränken, oder aber als Designelement zum Hervorheben einzelner Gegenstände.",
          "en": undefined,
          "en-GB": "This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          "en-US": "This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          "fr": undefined,
        },
        "key": "round-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Handwäsche nur",
                "en-GB": "- Hand wash only",
                "en-US": "- Hand wash only",
              },
            },
            {
              "name": "search-color",
              "value": "brown",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            },
            {
              "name": "color-code",
              "value": "#a52a2a",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3537,
                "w": 3537,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Round_Serving_Tray-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 1719,
                "w": 3283,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Round_Serving_Tray-1.2.jpeg",
            },
          ],
          "key": "roundServingTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RST-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rundes Serviertablett",
          "en": undefined,
          "en-GB": "Round Serving Tray",
          "en-US": "Round Serving Tray",
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
          "de-DE": "rundes-serviertablett",
          "en": undefined,
          "en-GB": "round-serving-tray",
          "en-US": "round-serving-tray",
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

  it(`should return a roundServingTray preset when built for graphql`, () => {
    const roundServingTrayPresetGraphql =
      roundServingTray().buildGraphql<TProductDraft>();
    expect(roundServingTrayPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "key": "cheese-trays",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          },
          {
            "locale": "en-US",
            "value": "This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          },
          {
            "locale": "de-DE",
            "value": "Das runde Serviertablett aus Holz ist ein vielseitiger und langlebiger Gegenstand, der in einer Vielzahl von Gelegenheiten zum Einsatz kommt. Das für das Tablett verwendete Holz mit seiner warmen und natürlichen Ästhetik sorgt für den rustikalen Charme. Runde Holztabletts sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden. Nach dem Gebrauch sollten sie gründlich getrocknet werden, damit keine Feuchtigkeit im Inneren eingeschlossen wird. Ein rundes Serviertablett aus Holz ist ein praktisches und zugleich attraktives Designelement, das jedes Ambiente mit seiner natürlichen Eleganz komplementiert. Es ist langlebig und vielseitig einsetzbar zum Servieren und Präsentieren von Speisen und Getränken, oder aber als Designelement zum Hervorheben einzelner Gegenstände.",
          },
        ],
        "key": "round-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Hand wash only","en-US":"- Hand wash only","de-DE":"- Handwäsche nur"}",
            },
            {
              "name": "search-color",
              "value": ""brown"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Brown","de-DE":"Braun","en-US":"Brown"}",
            },
            {
              "name": "color-code",
              "value": ""#a52a2a"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3537,
                "width": 3537,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Round_Serving_Tray-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 1719,
                "width": 3283,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Round_Serving_Tray-1.2.jpeg",
            },
          ],
          "key": "roundServingTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
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
              "key": "499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
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
              "key": "499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 499,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RST-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Round Serving Tray",
          },
          {
            "locale": "en-GB",
            "value": "Round Serving Tray",
          },
          {
            "locale": "de-DE",
            "value": "Rundes Serviertablett",
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
            "value": "round-serving-tray",
          },
          {
            "locale": "en-GB",
            "value": "round-serving-tray",
          },
          {
            "locale": "de-DE",
            "value": "rundes-serviertablett",
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
