import type { TProductDraft } from '../../../types';
import redModernPainting from './red-modern-painting';
describe(`with redModernPainting preset`, () => {
  it('should return a sample redModernPainting product preset', () => {
    const redModernPaintingPreset = redModernPainting().build<TProductDraft>();
    expect(redModernPaintingPreset).toMatchInlineSnapshot(`
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
      "key": "red-modern-painting",
      "name": {
            "de-DE": "Rote moderne Malerei",
            "en-GB": "Red Modern Painting",
            "en-US": "Red Modern Painting"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "rote-moderne-malerei",
            "en-GB": "red-modern-painting",
            "en-US": "red-modern-painting"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Acrylic on canvas\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\n- 2ft by 2ft"}},{"name":"product-description","value":{"en-GB":"A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.","en-US":"A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.","de-DE":"Ein rotes modernes Gemälde auf Leinwand ist ein kühnes und markantes Kunstwerk, das jedem Raum ein zeitgenössisches Flair verleihen kann. Das Gemälde wird mit Acrylfarben auf einer gespannten Leinwand erstellt und weist eine Reihe von Rottönen auf.  Die Größe des Gemäldes kann variieren, von einem kleinen Stück, das als Teil einer Galeriegruppe an eine Wand gehängt werden kann, bis zu einem großen Statement-Stück, das den Raum dominiert. Das rote Farbschema des Gemäldes kann einen starken Brennpunkt schaffen, den Blick darauf lenken und ein Gefühl von Dramatik erzeugen.  Der Stil des Gemäldes ist zeitgenössisch, wobei der Schwerpunkt darauf liegt, Emotionen und Ideen durch Farbe und Form auszudrücken. Die rote Farbe kann je nach Absicht des Künstlers symbolisch sein und Leidenschaft, Stärke oder Energie darstellen.  Insgesamt ist ein rotes modernes Gemälde auf Leinwand ein lebendiges und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Dramatik und Aufregung verleihen kann."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
