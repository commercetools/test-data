import type { TProductDraft } from '../../../types';
import sunnaiGlassBowl from './sunnai-glass-bowl';

describe(`with sunnaiGlassBowl preset`, () => {
  it(`should return a sunnaiGlassBowl preset`, () => {
    const sunnaiGlassBowlPreset = sunnaiGlassBowl().build<TProductDraft>();
    expect(sunnaiGlassBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
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
          {
            "key": "bakeware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
      "description": {
            "de-DE": "Diese Glasschalen sind ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.

Das Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gereingt werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.

Insgesamt ist eine Glasschale eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Seine Transparenz und Einfachheit machen es zu einem vielseitigen und zeitlosen Stück, das für eine Vielzahl von Anlässen verwendet werden kann.",
            "en-GB": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.",
            "en-US": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings."
          },
        "key": "sunnai-glass-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "type",
    "value": [
      {
        "en-GB": "Round"
      }
    ]
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_354085817-BK7aLsjs.jpeg",
    "dimensions": {
      "w": 5381,
      "h": 3739
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
      "centAmount": 799,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 799,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 799,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaDescription": {
            "de-DE": "Diese Glasschalen sind ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.

Das Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gereingt werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.

Insgesamt ist eine Glasschale eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Seine Transparenz und Einfachheit machen es zu einem vielseitigen und zeitlosen Stück, das für eine Vielzahl von Anlässen verwendet werden kann.",
            "en-GB": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.",
            "en-US": "These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.

The glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.

Overall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings."
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Sunnai Glasschale",
            "en-GB": "Sunnai Glass Bowl",
            "en-US": "Sunnai Glass Bowl"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "product-sets",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "sunnai-glaskugel",
            "en-GB": "sunnai-glass-bowl",
            "en-US": "sunnai-glass-bowl"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": [
[object Promise]
       ]
      }
    `);
  });
});
