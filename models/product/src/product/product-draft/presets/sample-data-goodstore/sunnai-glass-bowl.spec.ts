import type { TProductDraft } from '../../../types';
import sunnaiGlassBowl from './sunnai-glass-bowl';
describe(`with sunnaiGlassBowl preset`, () => {
  it('should return a sample sunnaiGlassBowl product preset', () => {
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
          }
        ],
      "categoryOrderHints": {},
      "key": "sunnai-glass-bowl",
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
      "name": {
            "de-DE": "Sunnai Glasschale",
            "en-GB": "Sunnai Glass Bowl",
            "en-US": "Sunnai Glass Bowl"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "sunnai-glaskugel",
            "en-GB": "sunnai-glass-bowl",
            "en-US": "sunnai-glass-bowl"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "product-sets",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"type","value":[{"en-GB":"Round"}]}],
        },
        "variants": [
        {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"type","value":[{"en-GB":"Deep"}]}],
        }
       ]
      }
    `);
  });
});
