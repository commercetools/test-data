import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import furnitureAndDecor from './furniture-and-decor';
describe(`with furnitureAndDecor preset`, () => {
  it('should create a furnitureAndDecor product type draft', () => {
    const furnitureAndDecorPreset =
      furnitureAndDecor().build<TProductTypeDraft>();
    expect(furnitureAndDecorPreset).toMatchObject(
      JSON.parse(`{
  "attributes": [
    {
      "name": "productspec",
      "label": {
        "en-GB": "Product Specifications",
        "de-DE": "Produktspezifikationen"
      },
      "inputTip": {
        "en-GB": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points."
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "SameForAll",
      "isSearchable": false,
      "inputHint": "MultiLine"
    },
    {
      "name": "color",
      "label": {
        "en-GB": "Color",
        "de-DE": "Farbe"
      },
      "inputTip": {
        "de-DE": "",
        "en-US": ""
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "None",
      "isSearchable": false,
      "inputHint": "SingleLine"
    },
    {
      "name": "finish",
      "label": {
        "en-GB": "Finish",
        "de-DE": " Fertig"
      },
      "inputTip": {
        "de-DE": "",
        "en-US": ""
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "None",
      "isSearchable": false,
      "inputHint": "SingleLine"
    },
    {
      "name": "colorlabel",
      "label": {
        "en-GB": "Color Label",
        "de-DE": "Farbetikett"
      },
      "inputTip": {
        "de-DE": "",
        "en-US": ""
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "None",
      "isSearchable": true,
      "inputHint": "SingleLine"
    },
    {
      "name": "finishlabel",
      "label": {
        "en-GB": "Finish Label",
        "de-DE": " Fertiges Etikett"
      },
      "inputTip": {
        "de-DE": "",
        "en-US": ""
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "None",
      "isSearchable": true,
      "inputHint": "SingleLine"
    },
    {
      "name": "new-arrival",
      "label": {
        "en-GB": "New Arrival",
        "de-DE": "Neuankömmling"
      },
      "inputTip": {
        "de-DE": "",
        "en-GB": "",
        "en-US": ""
      },
      "isRequired": false,
      "type": {
        "name": "boolean"
      },
      "attributeConstraint": "None",
      "isSearchable": false,
      "inputHint": "SingleLine"
    },
    {
      "name": "size",
      "label": {
        "en-GB": "Size"
      },
      "inputTip": {
        "en-GB": "size set as a string value"
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "None",
      "isSearchable": true,
      "inputHint": "SingleLine"
    },
    {
      "name": "product-description",
      "label": {
        "en-GB": "Product Description"
      },
      "inputTip": {
        "en-GB": "Product description, made a custom attribute so product description is not used for search results."
      },
      "isRequired": false,
      "type": {
        "name": "ltext"
      },
      "attributeConstraint": "SameForAll",
      "isSearchable": false,
      "inputHint": "SingleLine"
    },
    {
      "name": "color-filter",
      "label": {
        "en-GB": "Color Filter"
      },
      "inputTip": {
        "en-GB": "used to set the colors and labels displayed in the color filter on PLP"
      },
      "isRequired": false,
      "type": {
        "name": "lenum",
        "values": [
          {
            "key": "#FFF",
            "label": {
              "de-DE": "Weiss",
              "en-GB": "White",
              "en-US": "White"
            }
          },
          {
            "key": "#000",
            "label": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black"
            }
          },
          {
            "key": "#808080",
            "label": {
              "de-DE": "Grau",
              "en-GB": "Gray",
              "en-US": "Gray"
            }
          },
          {
            "key": "#0000FF",
            "label": {
              "de-DE": "Blau",
              "en-GB": "Blue",
              "en-US": "Blue"
            }
          },
          {
            "key": "#00FF00",
            "label": {
              "de-DE": "Grün",
              "en-GB": "Green",
              "en-US": "Green"
            }
          },
          {
            "key": "#A020F0",
            "label": {
              "de-DE": "Lila",
              "en-GB": "Purple",
              "en-US": "Purple"
            }
          },
          {
            "key": "#C4A484",
            "label": {
              "de-DE": "Hellbraun",
              "en-GB": "Light Brown",
              "en-US": "Light Brown"
            }
          },
          {
            "key": "#F5F5DC",
            "label": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige"
            }
          },
          {
            "key": "#D2B48C",
            "label": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan"
            }
          },
          {
            "key": "#FFFFF0",
            "label": {
              "de-DE": "Elfenbein",
              "en-GB": "Ivory",
              "en-US": "Ivory"
            }
          },
          {
            "key": "#FFD700",
            "label": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold"
            }
          },
          {
            "key": "#964B00",
            "label": {
              "de-DE": "Dunkelbraun",
              "en-GB": "Dark Brown",
              "en-US": "Dark Brown"
            }
          },
          {
            "key": "#C0C0C0",
            "label": {
              "de-DE": "Silber",
              "en-GB": "Silver",
              "en-US": "Silver"
            }
          },
          {
            "key": "#FFC0CB",
            "label": {
              "de-DE": "Rosa",
              "en-GB": "Pink",
              "en-US": "Pink"
            }
          },
          {
            "key": "#FFA500",
            "label": {
              "de-DE": "Orange",
              "en-GB": "Orange",
              "en-US": "Orange"
            }
          }
        ]
      },
      "attributeConstraint": "None",
      "isSearchable": true,
      "inputHint": "SingleLine"
    }
  ],
  "description": "items with color, fabric, size, finish and/or product spec attributes",
  "key": "furniture-and-decor",
  "name": "Furniture and decor"
}`)
    );
  });
});
