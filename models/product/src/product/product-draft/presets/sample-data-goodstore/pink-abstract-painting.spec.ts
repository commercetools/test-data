import type { TProductDraft } from '../../../types';
import pinkAbstractPainting from './pink-abstract-painting';
describe(`with pinkAbstractPainting preset`, () => {
  it('should return a sample pinkAbstractPainting product preset', () => {
    const pinkAbstractPaintingPreset =
      pinkAbstractPainting().build<TProductDraft>();
    expect(pinkAbstractPaintingPreset).toMatchInlineSnapshot(`
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
      "key": "pink-abstract-painting",
      "name": {
            "de-DE": "Rosa abstrakte Malerei",
            "en-GB": "Pink Abstract Painting",
            "en-US": "Pink Abstract Painting"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "rosa-abstrakte-malerei",
            "en-GB": "pink-abstract-painting",
            "en-US": "pink-abstract-painting"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Acrylic on canvas\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\n- 2ft by 2ft"}},{"name":"product-description","value":{"en-GB":"A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.","en-US":"A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.","de-DE":"Ein rosa abstraktes Gemälde ist ein lebendiges und auffälliges Kunstwerk, das eine Reihe von Emotionen und Interpretationen hervorrufen kann. Das Gemälde entsteht mit Acrylfarben auf Leinwand.  Die Komposition des Gemäldes ist abstrakt, ohne erkennbare Objekte oder Figuren. Die Verwendung von Rosa im Gemälde kann symbolisch sein und Liebe, Weiblichkeit oder Energie darstellen.  Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Statement an die Wand gehängt werden. Das rosa Farbschema des Gemäldes kann einen starken Brennpunkt schaffen, den Blick darauf lenken und ein Gefühl von Energie erzeugen.  Insgesamt ist ein rosa abstraktes Gemälde ein kühnes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Vitalität und Aufregung verleihen kann. Sein lebendiges Farbschema und seine abstrakte Komposition können ein Gefühl von Mysterium und Faszination erzeugen und den Betrachter dazu einladen, das Gemälde auf seine eigene Weise zu interpretieren und sich mit ihm zu verbinden."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});