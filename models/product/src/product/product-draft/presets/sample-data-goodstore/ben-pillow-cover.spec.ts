import type { TProductDraft } from '../../../types';
import benPillowCover from './ben-pillow-cover';
describe(`with benPillowCover preset`, () => {
  it('should return a sample benPillowCover product preset', () => {
    const benPillowCoverPreset = benPillowCover().build<TProductDraft>();
    expect(benPillowCoverPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "ben-pillow-cover",
      "name": {
            "de-DE": "Ben Kissenbezug",
            "en-GB": "Ben Pillow Cover",
            "en-US": "Ben Pillow Cover"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "ben-kissenbezug",
            "en-GB": "ben-pillow-cover",
            "en-US": "ben-pillow-cover"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Machine-washable\n- Cover is removable\n- Does not include pillow","de-DE":"- Waschmaschinenfest\n- Bezug ist abnehmbar\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine-washable\n- Cover is removable\n- Does not include pillow"}},{"name":"product-description","value":{"en-GB":"The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.","en-US":"The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.","de-DE":"Der Ben-Kissenbezug ist ein dekorativer Kissenbezug aus braunem Leinen, der verwendet wird, um einem Raum visuelles Interesse und Struktur zu verleihen. Es besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein rechteckiges dekoratives Kissen in Standardgröße passt. Es verfügt über eine neutrale braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird oft verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann allein verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Insgesamt ist ein dekorativer Kissenbezug aus braunem Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann."}},{"name":"color-filter","value":{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}},{"name":"color","value":{"en-GB":"#A69465","de-DE":"#A69465","en-US":"#A69465"}},{"name":"colorlabel","value":{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
