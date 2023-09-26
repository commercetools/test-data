import type { TProductDraft } from '../../../types';
import smallWoodenBowl from './small-wooden-bowl';
describe(`with smallWoodenBowl preset`, () => {
  it('should return a sample smallWoodenBowl product preset', () => {
    const smallWoodenBowlPreset = smallWoodenBowl().build<TProductDraft>();
    expect(smallWoodenBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
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
          }
        ],
      "categoryOrderHints": {},
      "key": "small-wooden-bowl",
      "name": {
            "de-DE": "Kleine Holzschale",
            "en-GB": "Small Wooden Bowl",
            "en-US": "Small Wooden Bowl"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "kleine-holzschale",
            "en-GB": "small-wooden-bowl",
            "en-US": "small-wooden-bowl"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel","en-US":"- Includes 1 bowl"}},{"name":"product-description","value":{"en-GB":"This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.","en-US":"This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.","de-DE":"Diese Holzschale ist so konzipiert, dass sie kleine Portionen Essen oder andere kleine Gegenstände aufnehmen kann. Er eignet sich ideal zum Servieren kleiner Portionen wie Nüsse, Bonbons, Dips oder Saucen.  Es kann auch als Dekorationsartikel verwendet werden, da sein natürliches Material und seine einzigartige Textur jeder Umgebung Wärme und Charakter verleihen. Es kann als eigenständiges Stück oder als Teil eines größeren Sets verwendet werden und kann mit anderen Holzstücken gestylt werden, um einen zusammenhängenden Look zu schaffen.  Die Schüssel ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen oder mit einem feuchten Tuch abgewischt werden. Es sollte vor Gebrauch gründlich trocknen, um ein Verziehen oder Reißen zu vermeiden.  Insgesamt ist eine kleine runde Holzschale ein vielseitiges und funktionales Geschirr, das jeder Umgebung einen Hauch von natürlicher Wärme und Charakter verleiht. Seine Einfachheit und Haltbarkeit machen es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern."}},{"name":"color-filter","value":{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
