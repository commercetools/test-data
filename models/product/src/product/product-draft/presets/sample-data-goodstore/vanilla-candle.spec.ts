import type { TProductDraft } from '../../../types';
import vanillaCandle from './vanilla-candle';
describe(`with vanillaCandle preset`, () => {
  it('should return a sample vanillaCandle product preset', () => {
    const vanillaCandlePreset = vanillaCandle().build<TProductDraft>();
    expect(vanillaCandlePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "vanilla-candle",
      "name": {
            "de-DE": "Kerze mit Vanilleduft",
            "en-GB": "Vanilla Candle",
            "en-US": "Vanilla Candle"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "vanille-kerze",
            "en-GB": "vanilla-candle",
            "en-US": "vanilla-candle"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Comes in glass jar\n- 300 grams","de-DE":"- Wird im Glas geliefert\n- 300 Gramm","en-US":"- Comes in glass jar\n- 300 grams"}},{"name":"product-description","value":{"en-GB":"A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.","en-US":"A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.","de-DE":"Eine Kerze mit Vanilleduft ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichhaltigem und cremigen Vanilleduft versehen ist.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht. Wenn die Kerze angezündet wird, verströmt sie ein beruhigendes Aroma und erfüllt den Raum mit dem süßen Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für eine gemütliche Nacht oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnzimmer zu schaffen.  Diese Kerze ist eine klassische und beruhigende Wahl, um jedem Zuhause einen Hauch von Wärme und Gemütlichkeit zu verleihen. Sein süßes und beruhigendes Aroma kann dazu beitragen, eine entspannte und einladende Atmosphäre zu schaffen, was es zu einer beliebten Wahl für den Einsatz in Schlafzimmern, Wohnzimmern und Badezimmern macht."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
