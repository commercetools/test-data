import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import furnitureAndDecor from './furniture-and-decor';
describe(`with furnitureAndDecor preset`, () => {
  it('should create a furnitureAndDecor product type draft', () => {
    const furnitureAndDecorPreset =
      furnitureAndDecor().build<TProductTypeDraft>();
    expect(furnitureAndDecorPreset).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "MultiLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-GB": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
              "en-US": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "de-DE": "Produktspezifikationen",
              "en": undefined,
              "en-GB": "Product Specifications",
              "en-US": "Product Specifications",
              "fr": undefined,
            },
            "name": "productspec",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "de-DE": "Farbe",
              "en": undefined,
              "en-GB": "Color",
              "en-US": "Color",
              "fr": undefined,
            },
            "name": "color",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "de-DE": "Fertig",
              "en": undefined,
              "en-GB": "Finish",
              "en-US": "Finish",
              "fr": undefined,
            },
            "name": "finish",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Farbetikett",
              "en": undefined,
              "en-GB": "Color Label",
              "en-US": "Color Label",
              "fr": undefined,
            },
            "name": "colorlabel",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Fertiges Etikett",
              "en": undefined,
              "en-GB": "Finish Label",
              "en-US": "Finish Label",
              "fr": undefined,
            },
            "name": "finishlabel",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "de-DE": "Neuankömmling",
              "en": undefined,
              "en-GB": "New Arrival",
              "en-US": "New Arrival",
              "fr": undefined,
            },
            "name": "new-arrival",
            "type": {
              "name": "boolean",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-GB": "size set as a string value",
              "en-US": "size set as a string value",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-GB": "Size",
              "en-US": "Size",
              "fr": undefined,
            },
            "name": "size",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-GB": "Product description, made a custom attribute so product description is not used for search results.",
              "en-US": "Product description, made a custom attribute so product description is not used for search results.",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-GB": "Product Description",
              "en-US": "Product Description",
              "fr": undefined,
            },
            "name": "product-description",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-GB": "used to set the colors and labels displayed in the color filter on PLP",
              "en-US": "used to set the colors and labels displayed in the color filter on PLP",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-GB": "Color Filter",
              "en-US": "Color Filter",
              "fr": undefined,
            },
            "name": "color-filter",
            "type": {
              "values": [
                {
                  "key": "#FFF",
                  "label": {
                    "de": undefined,
                    "de-DE": "Weiss",
                    "en": undefined,
                    "en-GB": "White",
                    "en-US": "White",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#000",
                  "label": {
                    "de": undefined,
                    "de-DE": "Schwarz",
                    "en": undefined,
                    "en-GB": "Black",
                    "en-US": "Black",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#808080",
                  "label": {
                    "de": undefined,
                    "de-DE": "Grau",
                    "en": undefined,
                    "en-GB": "Gray",
                    "en-US": "Gray",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#0000FF",
                  "label": {
                    "de": undefined,
                    "de-DE": "Blau",
                    "en": undefined,
                    "en-GB": "Blue",
                    "en-US": "Blue",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#00FF00",
                  "label": {
                    "de": undefined,
                    "de-DE": "Grün",
                    "en": undefined,
                    "en-GB": "Green",
                    "en-US": "Green",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#A020F0",
                  "label": {
                    "de": undefined,
                    "de-DE": "Lila",
                    "en": undefined,
                    "en-GB": "Purple",
                    "en-US": "Purple",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#C4A484",
                  "label": {
                    "de": undefined,
                    "de-DE": "Hellbraun",
                    "en": undefined,
                    "en-GB": "Light Brown",
                    "en-US": "Light Brown",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#F5F5DC",
                  "label": {
                    "de": undefined,
                    "de-DE": "Beige",
                    "en": undefined,
                    "en-GB": "Beige",
                    "en-US": "Beige",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#D2B48C",
                  "label": {
                    "de": undefined,
                    "de-DE": "Bräunen",
                    "en": undefined,
                    "en-GB": "Tan",
                    "en-US": "Tan",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#FFFFF0",
                  "label": {
                    "de": undefined,
                    "de-DE": "Elfenbein",
                    "en": undefined,
                    "en-GB": "Ivory",
                    "en-US": "Ivory",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#FFD700",
                  "label": {
                    "de": undefined,
                    "de-DE": "Gold",
                    "en": undefined,
                    "en-GB": "Gold",
                    "en-US": "Gold",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#964B00",
                  "label": {
                    "de": undefined,
                    "de-DE": "Dunkelbraun",
                    "en": undefined,
                    "en-GB": "Dark Brown",
                    "en-US": "Dark Brown",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#C0C0C0",
                  "label": {
                    "de": undefined,
                    "de-DE": "Silber",
                    "en": undefined,
                    "en-GB": "Silver",
                    "en-US": "Silver",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#FFC0CB",
                  "label": {
                    "de": undefined,
                    "de-DE": "Rosa",
                    "en": undefined,
                    "en-GB": "Pink",
                    "en-US": "Pink",
                    "fr": undefined,
                  },
                },
                {
                  "key": "#FFA500",
                  "label": {
                    "de": undefined,
                    "de-DE": "Orange",
                    "en": undefined,
                    "en-GB": "Orange",
                    "en-US": "Orange",
                    "fr": undefined,
                  },
                },
              ],
            },
          },
        ],
        "description": "items with color, fabric, size, finish and/or product spec attributes",
        "key": "furniture-and-decor",
        "name": "Furniture and decor",
      }
    `);
  });

  it(`should create a furnitureAndDecor product type draft when built for graphql`, () => {
    const furnitureAndDecorPreset =
      furnitureAndDecor().buildGraphql<TProductTypeDraftGraphql>();

    expect(furnitureAndDecorPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ProductTypeDraft",
        "attributeDefinitions": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "MultiLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Product Specifications",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Product Specifications",
              },
              {
                "__typename": "LocalizedString",
                "locale": "de-DE",
                "value": "Produktspezifikationen",
              },
            ],
            "name": "productspec",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Color",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Color",
              },
              {
                "__typename": "LocalizedString",
                "locale": "de-DE",
                "value": "Farbe",
              },
            ],
            "name": "color",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Finish",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Finish",
              },
              {
                "__typename": "LocalizedString",
                "locale": "de-DE",
                "value": "Fertig",
              },
            ],
            "name": "finish",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Color Label",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Color Label",
              },
              {
                "__typename": "LocalizedString",
                "locale": "de-DE",
                "value": "Farbetikett",
              },
            ],
            "name": "colorlabel",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Finish Label",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Finish Label",
              },
              {
                "__typename": "LocalizedString",
                "locale": "de-DE",
                "value": "Fertiges Etikett",
              },
            ],
            "name": "finishlabel",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "New Arrival",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "New Arrival",
              },
              {
                "__typename": "LocalizedString",
                "locale": "de-DE",
                "value": "Neuankömmling",
              },
            ],
            "name": "new-arrival",
            "type": {
              "boolean": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "size set as a string value",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "size set as a string value",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Size",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Size",
              },
            ],
            "name": "size",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Product description, made a custom attribute so product description is not used for search results.",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Product description, made a custom attribute so product description is not used for search results.",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Product Description",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Product Description",
              },
            ],
            "name": "product-description",
            "type": {
              "__typename": "LocalizableTextAttributeDefinitionType",
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "used to set the colors and labels displayed in the color filter on PLP",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "used to set the colors and labels displayed in the color filter on PLP",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-GB",
                "value": "Color Filter",
              },
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Color Filter",
              },
            ],
            "name": "color-filter",
            "type": {
              "values": [
                {
                  "key": "#FFF",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Weiss",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "White",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "White",
                    },
                  ],
                },
                {
                  "key": "#000",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Schwarz",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Black",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Black",
                    },
                  ],
                },
                {
                  "key": "#808080",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Grau",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Gray",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Gray",
                    },
                  ],
                },
                {
                  "key": "#0000FF",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Blau",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Blue",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Blue",
                    },
                  ],
                },
                {
                  "key": "#00FF00",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Grün",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Green",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Green",
                    },
                  ],
                },
                {
                  "key": "#A020F0",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Lila",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Purple",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Purple",
                    },
                  ],
                },
                {
                  "key": "#C4A484",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Hellbraun",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Light Brown",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Light Brown",
                    },
                  ],
                },
                {
                  "key": "#F5F5DC",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Beige",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Beige",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Beige",
                    },
                  ],
                },
                {
                  "key": "#D2B48C",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Bräunen",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Tan",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Tan",
                    },
                  ],
                },
                {
                  "key": "#FFFFF0",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Elfenbein",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Ivory",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Ivory",
                    },
                  ],
                },
                {
                  "key": "#FFD700",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Gold",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Gold",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Gold",
                    },
                  ],
                },
                {
                  "key": "#964B00",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Dunkelbraun",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Dark Brown",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Dark Brown",
                    },
                  ],
                },
                {
                  "key": "#C0C0C0",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Silber",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Silver",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Silver",
                    },
                  ],
                },
                {
                  "key": "#FFC0CB",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Rosa",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Pink",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Pink",
                    },
                  ],
                },
                {
                  "key": "#FFA500",
                  "label": [
                    {
                      "__typename": "LocalizedString",
                      "locale": "de-DE",
                      "value": "Orange",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-GB",
                      "value": "Orange",
                    },
                    {
                      "__typename": "LocalizedString",
                      "locale": "en-US",
                      "value": "Orange",
                    },
                  ],
                },
              ],
            },
          },
        ],
        "description": "items with color, fabric, size, finish and/or product spec attributes",
        "key": "furniture-and-decor",
        "name": "Furniture and decor",
      }
    `);
  });
});
