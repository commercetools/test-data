import type { TProductDraft } from '../../../types';
import rectangleServingTray from './rectangle-serving-tray';

describe(`with rectangleServingTray preset`, () => {
  it(`should return a rectangleServingTray preset`, () => {
    const rectangleServingTrayPreset =
      rectangleServingTray().build<TProductDraft>();
    expect(rectangleServingTrayPreset).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das Serviertablett aus Holz ist ein vielseitiger und funktionaler Gegenstand, der in einer Vielzahl von Gelegenheiten zum Einsatz kommt. Das für das Tablett verwendete Holz mit seiner warmen und natürlichen Ästhetik sorgt für den rustikalen Charme. Holztabletts sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden. Nach dem Gebrauch sollten sie gründlich getrocknet werden, damit keine Feuchtigkeit im Inneren eingeschlossen wird. Ein Serviertablett aus Holz ist ein praktisches und zugleich attraktives Designelement, das jedes Ambiente mit seiner natürlichen Eleganz komplementiert. Es ist langlebig und vielseitig einsetzbar zum Servieren und Präsentieren von Speisen und Getränken, oder aber als Designelement zum Hervorheben einzelner Gegenstände.",
          "en": undefined,
          "en-GB": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          "en-US": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          "fr": undefined,
        },
        "key": "rectangle-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Handwäsche nur
      - Naturholz",
                "en-GB": "- Hand wash only
      - Natural wood",
                "en-US": "- Hand wash only
      - Natural wood",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Braun:#a52a2a",
                "en-GB": "Brown:#a52a2a",
                "en-US": "Brown:#a52a2a",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4024,
                "w": 6048,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rectangle_Serving_Tray-1.1.jpeg",
            },
          ],
          "key": "rectangleServingTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599EUR",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599GBP",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 599,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599USD",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RST-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rechteckiges Serviertablett",
          "en": undefined,
          "en-GB": "Rectangle Serving Tray",
          "en-US": "Rectangle Serving Tray",
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
          "de-DE": "rechteckiges-serviertablett",
          "en": undefined,
          "en-GB": "rectangle-serving-tray",
          "en-US": "rectangle-serving-tray",
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

  it(`should return a rectangleServingTray preset when built for graphql`, () => {
    const rectangleServingTrayPresetGraphql =
      rectangleServingTray().buildGraphql<TProductDraft>();
    expect(rectangleServingTrayPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
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
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          },
          {
            "locale": "en-US",
            "value": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
          },
          {
            "locale": "de-DE",
            "value": "Das Serviertablett aus Holz ist ein vielseitiger und funktionaler Gegenstand, der in einer Vielzahl von Gelegenheiten zum Einsatz kommt. Das für das Tablett verwendete Holz mit seiner warmen und natürlichen Ästhetik sorgt für den rustikalen Charme. Holztabletts sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden. Nach dem Gebrauch sollten sie gründlich getrocknet werden, damit keine Feuchtigkeit im Inneren eingeschlossen wird. Ein Serviertablett aus Holz ist ein praktisches und zugleich attraktives Designelement, das jedes Ambiente mit seiner natürlichen Eleganz komplementiert. Es ist langlebig und vielseitig einsetzbar zum Servieren und Präsentieren von Speisen und Getränken, oder aber als Designelement zum Hervorheben einzelner Gegenstände.",
          },
        ],
        "key": "rectangle-serving-tray",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Hand wash only\\n- Natural wood","en-US":"- Hand wash only\\n- Natural wood","de-DE":"- Handwäsche nur\\n- Naturholz"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Brown:#a52a2a","de-DE":"Braun:#a52a2a","en-US":"Brown:#a52a2a"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4024,
                "width": 6048,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rectangle_Serving_Tray-1.1.jpeg",
            },
          ],
          "key": "rectangleServingTray01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "599EUR",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
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
              "key": "599GBP",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
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
              "key": "599USD",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 599,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RST-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Rectangle Serving Tray",
          },
          {
            "locale": "en-GB",
            "value": "Rectangle Serving Tray",
          },
          {
            "locale": "de-DE",
            "value": "Rechteckiges Serviertablett",
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
            "value": "rectangle-serving-tray",
          },
          {
            "locale": "en-GB",
            "value": "rectangle-serving-tray",
          },
          {
            "locale": "de-DE",
            "value": "rechteckiges-serviertablett",
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
