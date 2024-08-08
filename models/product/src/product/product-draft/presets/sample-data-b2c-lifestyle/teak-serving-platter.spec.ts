import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import teakServingPlatter from './teak-serving-platter';

describe(`with teakServingPlatter preset`, () => {
  it(`should return a teakServingPlatter preset`, () => {
    const teakServingPlatterPreset =
      teakServingPlatter().build<TProductDraft>();
    expect(teakServingPlatterPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "cheese-trays",
      "typeId": "category",
    },
    {
      "key": "serving-platters",
      "typeId": "category",
    },
    {
      "key": "kitchen",
      "typeId": "category",
    },
    {
      "key": "serveware",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Dieses Serviertablett aus Holz ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Teakholz sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.  Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Ein Serviertablett aus Holz ist ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit und Designvielfalt machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und Gegenständen.",
    "en": undefined,
    "en-GB": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The teak material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
    "en-US": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The teak material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
    "fr": undefined,
  },
  "key": "teak-serving-platter",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": {
          "de-DE": "- Hergestellt aus natürlichem Teakholz
- Handwäsche nur",
          "en-GB": "- Made of natural teak
- Hand wash only",
          "en-US": "- Made of natural teak
- Hand wash only",
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
          "h": 2389,
          "w": 4331,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Teak_Serving_Platter-1.1.jpeg",
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
          "centAmount": 1299,
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
          "centAmount": 1299,
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
          "centAmount": 1299,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "TST-02",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Servierplatte aus Teakholz",
    "en": undefined,
    "en-GB": "Teak Serving Platter",
    "en-US": "Teak Serving Platter",
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
    "de-DE": "servierplatte-aus-teakholz",
    "en": undefined,
    "en-GB": "teak-serving-platter",
    "en-US": "teak-serving-platter",
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

  it(`should return a teakServingPlatter preset when built for graphql`, () => {
    const teakServingPlatterPresetGraphql =
      teakServingPlatter().buildGraphql<TProductDraftGraphql>();
    expect(teakServingPlatterPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "cheese-trays",
      "typeId": "category",
    },
    {
      "key": "serving-platters",
      "typeId": "category",
    },
    {
      "key": "kitchen",
      "typeId": "category",
    },
    {
      "key": "serveware",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "en-US",
      "value": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The teak material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
    },
    {
      "locale": "de-DE",
      "value": "Dieses Serviertablett aus Holz ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Teakholz sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.  Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Ein Serviertablett aus Holz ist ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit und Designvielfalt machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und Gegenständen.",
    },
    {
      "locale": "en-GB",
      "value": "This wooden serving tray is a versatile and functional item that can be used in a variety of settings. The teak material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.",
    },
  ],
  "key": "teak-serving-platter",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Made of natural teak\\n- Hand wash only","en-US":"- Made of natural teak\\n- Hand wash only","de-DE":"- Hergestellt aus natürlichem Teakholz\\n- Handwäsche nur"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Brown:#a52a2a","de-DE":"Braun:#a52a2a","en-US":"Brown:#a52a2a"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 2389,
          "width": 4331,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Teak_Serving_Platter-1.1.jpeg",
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
            "centAmount": 1299,
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
            "centAmount": 1299,
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
            "centAmount": 1299,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "TST-02",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Teak Serving Platter",
    },
    {
      "locale": "en-GB",
      "value": "Teak Serving Platter",
    },
    {
      "locale": "de-DE",
      "value": "Servierplatte aus Teakholz",
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
      "value": "teak-serving-platter",
    },
    {
      "locale": "en-GB",
      "value": "teak-serving-platter",
    },
    {
      "locale": "de-DE",
      "value": "servierplatte-aus-teakholz",
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
