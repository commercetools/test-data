import type { TProductDraft } from '../../../types';
import purpleMinimalistAbstractPainting from './purple-minimalist-abstract-painting';
describe(`with purpleMinimalistAbstractPainting preset`, () => {
  it('should return a sample purpleMinimalistAbstractPainting product preset', () => {
    const purpleMinimalistAbstractPaintingPreset =
      purpleMinimalistAbstractPainting().build<TProductDraft>();
    expect(purpleMinimalistAbstractPaintingPreset).toMatchInlineSnapshot(`
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
      "key": "purple-minimalist-abstract-painting",
      "name": {
            "de-DE": "Lila minimalistische abstrakte Malerei",
            "en-GB": "Purple Minimalist Abstract Painting",
            "en-US": "Purple Minimalist Abstract Painting"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "lila-minimalistische-abstrakte-malerei",
            "en-GB": "purple-minimalist-abstract-painting",
            "en-US": "purple-minimalist-abstract-painting"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Acrylic on canvas\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\n- 2ft by 2ft"}},{"name":"product-description","value":{"de-DE":"Ein violettes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das auf der Verwendung minimaler Elemente und einer begrenzten Farbpalette beruht, um eine auffällige visuelle Wirkung zu erzielen. Das Gemälde entsteht mit Acrylfarben auf Leinwand.  Das Farbschema des Gemäldes ist überwiegend lila, mit wenig oder gar keiner Verwendung anderer Farben. Die Verwendung von Lila im Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Mysterium darstellen.  Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Die minimalistische Natur des Gemäldes ermöglicht es, sich nahtlos in eine Vielzahl von Einrichtungsstilen und Farbschemata einzufügen.  Insgesamt ist ein purpurfarbenes minimalistisches abstraktes Gemälde ein raffiniertes und dezentes Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Seine einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.","en-GB":"A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.","en-US":"A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting."}},{"name":"color-filter","value":{"key":"#A020F0","label":{"de-DE":"Lila","en-GB":"Purple","en-US":"Purple"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
