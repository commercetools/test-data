import type { TProductDraft } from '../../../types';
import cocoaPillowCover from './cocoa-pillow-cover';
describe(`with cocoaPillowCover preset`, () => {
  it('should return a sample cocoaPillowCover product preset', () => {
    const cocoaPillowCoverPreset = cocoaPillowCover().build<TProductDraft>();
    expect(cocoaPillowCoverPreset).toMatchInlineSnapshot(`
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
      "key": "cocoa-pillow-cover",
      "name": {
            "de-DE": "Kakao-Kissenbezug",
            "en-GB": "Cocoa Pillow Cover",
            "en-US": "Cocoa Pillow Cover"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "kakao-kissenbezug",
            "en-GB": "cocoa-pillow-cover",
            "en-US": "cocoa-pillow-cover"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Machine washable\n- Pillow not included","de-DE":"- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\n- Pillow not included"}},{"name":"product-description","value":{"en-GB":"A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.","en-US":"A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.","de-DE":"Ein quadratischer Kissenbezug aus Leinen ist eine Art Textilbezug für ein quadratisches Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse und Textur zu verleihen. Es besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein quadratisches Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat.  Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind mit einem sauberen Saum oder einer Paspelierung versehen, was dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Insgesamt ist ein quadratischer Kissenbezug aus Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann."}},{"name":"color-filter","value":{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}},{"name":"color","value":{"en-GB":"#A1947C ","de-DE":"#A1947C ","en-US":"#A1947C "}},{"name":"colorlabel","value":{"en-GB":"Tweed","de-DE":"Tweed","en-US":"Tweed"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
