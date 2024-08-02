import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import stoneServingTray from './stone-serving-tray';

describe(`with stoneServingTray preset`, () => {
  it(`should return a stoneServingTray preset`, () => {
    const stoneServingTrayPreset = stoneServingTray().build<TProductDraft>();
    expect(stoneServingTrayPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "kitchen",
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
      "key": "cheese-trays",
      "typeId": "category",
    },
    {
      "key": "serving-platters",
      "typeId": "category",
    },
    {
      "key": "bakeware",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Dieses Serviertablett besteht aus Naturstein und wurde zum Servieren und Präsentieren von Speisen designt. Das Tablett besteht aus stabilem Schiefer.  Das Gewicht und die Textur des Steinmaterials verleihen dem Tablett Stabilität und ein Gefühl von Luxus. Sie machen es darüber hinaus zum idealen Utensil zum Servieren einer Vielzahl von Speisen, wie zum Beispiel Käse, Obst oder Brot. Das Natursteinmaterial des Tabletts macht es zudem zu einer ausgezeichneten Wahl für den Einsatz im Freien, z. B. bei einem Picknick oder beim Grillen.  Ein Serviertablett aus Stein ist leicht zu reinigen und zu pflegen. Es kann mit Wasser und Seife gewaschen werden und sollte nach Gebrauch gründlich getrocknet werden, um das Eindringen von Feuchtigkeit ins Innere zu vermeiden.  Ein Serviertablett aus Stein ist ein funktionales und ästhetisch ansprechendes Element, das jeder Umgebung einen Hauch von natürlicher Eleganz verleiht. Seine Haltbarkeit, Stabilität und sein einzigartiges Design machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen und Getränken.",
    "en": undefined,
    "en-GB": "The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.",
    "en-US": "The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.",
    "fr": undefined,
  },
  "key": "stone-serving-tray",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": {
          "de-DE": "- Zerbrechlich",
          "en-GB": "- Fragile",
          "en-US": "- Fragile",
        },
      },
      {
        "name": "color",
        "value": {
          "de-DE": "Schiefer grau:#708090",
          "en-GB": "Dark Slate Grey:#2F4F4F",
          "en-US": "Slate Gray:#708090",
        },
      },
    ],
    "images": [
      {
        "dimensions": {
          "h": 2358,
          "w": 4125,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Stone_Serving_Tray-1.1.jpeg",
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
          "centAmount": 2499,
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
          "centAmount": 2499,
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
          "centAmount": 2499,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "SST-02",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Serviertablett aus Stein",
    "en": undefined,
    "en-GB": "Stone Serving Tray",
    "en-US": "Stone Serving Tray",
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
    "de-DE": "serviertablett-aus-stein",
    "en": undefined,
    "en-GB": "stone-serving-tray",
    "en-US": "stone-serving-tray",
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

  it(`should return a stoneServingTray preset when built for graphql`, () => {
    const stoneServingTrayPresetGraphql =
      stoneServingTray().buildGraphql<TProductDraftGraphql>();
    expect(stoneServingTrayPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "kitchen",
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
      "key": "cheese-trays",
      "typeId": "category",
    },
    {
      "key": "serving-platters",
      "typeId": "category",
    },
    {
      "key": "bakeware",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "en-US",
      "value": "The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.",
    },
    {
      "locale": "de-DE",
      "value": "Dieses Serviertablett besteht aus Naturstein und wurde zum Servieren und Präsentieren von Speisen designt. Das Tablett besteht aus stabilem Schiefer.  Das Gewicht und die Textur des Steinmaterials verleihen dem Tablett Stabilität und ein Gefühl von Luxus. Sie machen es darüber hinaus zum idealen Utensil zum Servieren einer Vielzahl von Speisen, wie zum Beispiel Käse, Obst oder Brot. Das Natursteinmaterial des Tabletts macht es zudem zu einer ausgezeichneten Wahl für den Einsatz im Freien, z. B. bei einem Picknick oder beim Grillen.  Ein Serviertablett aus Stein ist leicht zu reinigen und zu pflegen. Es kann mit Wasser und Seife gewaschen werden und sollte nach Gebrauch gründlich getrocknet werden, um das Eindringen von Feuchtigkeit ins Innere zu vermeiden.  Ein Serviertablett aus Stein ist ein funktionales und ästhetisch ansprechendes Element, das jeder Umgebung einen Hauch von natürlicher Eleganz verleiht. Seine Haltbarkeit, Stabilität und sein einzigartiges Design machen es zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen und Getränken.",
    },
    {
      "locale": "en-GB",
      "value": "The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.",
    },
  ],
  "key": "stone-serving-tray",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Fragile","en-US":"- Fragile","de-DE":"- Zerbrechlich"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Dark Slate Grey:#2F4F4F","en-US":"Slate Gray:#708090","de-DE":"Schiefer grau:#708090"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 2358,
          "width": 4125,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Stone_Serving_Tray-1.1.jpeg",
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
            "centAmount": 2499,
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
            "centAmount": 2499,
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
            "centAmount": 2499,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "SST-02",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Stone Serving Tray",
    },
    {
      "locale": "en-GB",
      "value": "Stone Serving Tray",
    },
    {
      "locale": "de-DE",
      "value": "Serviertablett aus Stein",
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
      "value": "stone-serving-tray",
    },
    {
      "locale": "en-GB",
      "value": "stone-serving-tray",
    },
    {
      "locale": "de-DE",
      "value": "serviertablett-aus-stein",
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
