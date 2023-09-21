import type { TProductDraft } from '../../../types';
import purpleLandscapePainting from './purple-landscape-painting';
describe(`with purpleLandscapePainting preset`, () => {
  it('should return a sample purpleLandscapePainting product preset', () => {
    const purpleLandscapePaintingPreset =
      purpleLandscapePainting().build<TProductDraft>();
    expect(purpleLandscapePaintingPreset).toMatchInlineSnapshot(`
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
      "key": "purple-landscape-painting",
      "name": {
            "de-DE": "Lila Landschaftsmalerei",
            "en-GB": "Purple Landscape Painting",
            "en-US": "Purple Landscape Painting"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "lila-landschaftsmalerei",
            "en-GB": "purple-landscape-painting",
            "en-US": "purple-landscape-painting"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Oil painting on canvas\n- Frame not included\n- Size: 4ft by 3ft","de-DE":"- Ölgemälde auf Leinwand\n- Rahmen nicht im Lieferumfang enthalten\n- Größe: 4 Fuß x 3 Fuß","en-US":"- Oil painting on canvas\n- Frame not included\n- Size: 4ft by 3ft"}},{"name":"product-description","value":{"en-GB":"A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.","en-US":"A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.","de-DE":"Ein lila Landschaftsgemälde auf Leinwand ist ein visuell beeindruckendes Kunstwerk, das eine Reihe von Emotionen und Gefühlen hervorrufen kann. Das Gemälde wurde mit Ölfarben auf einer gespannten Leinwand erstellt und weist eine Reihe von Violetttönen auf, von tiefem Indigo bis zu hellem Lavendel.  Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung wie einen Wald, eine Bergkette oder ein Feld darstellt. Die Verwendung von Lila im Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Mysterium darstellen.  Der Künstler hat möglicherweise eine Vielzahl von Techniken verwendet, wie z. B. Schichten, Mischen oder Tüpfeln, um ein dynamisches und visuell interessantes Stück zu schaffen. Die Textur des Gemäldes kann auch durch sichtbare Pinselstriche oder dicke pastose Bereiche betont werden.  Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Statement an die Wand gehängt werden. Das violette Farbschema des Gemäldes kann einen starken Brennpunkt schaffen, den Blick darauf lenken und ein Gefühl von Dramatik erzeugen.  Insgesamt ist ein lila Landschaftsgemälde auf Leinwand ein fesselndes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Staunen und Verzauberung verleihen kann."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
