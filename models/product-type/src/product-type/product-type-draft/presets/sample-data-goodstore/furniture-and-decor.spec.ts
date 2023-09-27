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
        "de-DE": "Produktspezifikationen",
        "en-US": "Product Specifications"
      },
      "inputTip": {
        "en-GB": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
        "en-US": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points."
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
        "de-DE": "Farbe",
        "en-US": "Color"
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
        "de-DE": " Fertig",
        "en-US": "Finish"
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
        "de-DE": "Farbetikett",
        "en-US": "Color Label"
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
        "de-DE": " Fertiges Etikett",
        "en-US": "Finish Label"
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
        "de-DE": "Neuankömmling",
        "en-US": "New Arrival"
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
        "en-GB": "Size",
        "de-DE": "Größe",
        "en-US": "Size"
      },
      "inputTip": {
        "en-GB": "size set as a string value",
        "de-DE": "Größe als String-Wert",
        "en-US": "size set as a string value"
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
        "en-GB": "Product Description",
        "de-DE": "Productbeschreibung",
        "en-US": "Product Description"
      },
      "inputTip": {
        "en-GB": "Product description, made a custom attribute so product description is not used for search results.",
        "de-DE": "Produktbeschreibung, als custom attribute, so dass die Produktbeschreibung nicht für Suchergebnisse verwendet wird.",
        "en-US": "Product description, made a custom attribute so product description is not used for search results."
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
        "en-GB": "Color Filter",
        "de-DE": "Farbfilter",
        "en-US": "Color Filter"
      },
      "inputTip": {
        "en-GB": "used to set the colors and labels displayed in the color filter on PLP",
        "de-DE": "zum Einstellen der Farben und Beschriftungen, die im Farbfilter von PLP angezeigt werden",
        "en-US": "used to set the colors and labels displayed in the color filter on PLP"
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

  it('should create a furnitureAndDecor product type draft for graphql', () => {
    const furnitureAndDecorPreset =
      furnitureAndDecor().buildGraphql<TProductTypeDraftGraphql>();
    expect(furnitureAndDecorPreset).toMatchObject(
      JSON.parse(`{
  "__typename": "ProductTypeDraft",
  "attributeDefinitions": [
    {
      "attributeConstraint": "SameForAll",
      "inputHint": "MultiLine",
      "inputTip": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points."
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points."
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "productspec",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Product Specifications"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produktspezifikationen"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Product Specifications"
        }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "isRequired": false,
      "isSearchable": false,
      "name": "color",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Color"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Farbe"
        },
        { "__typename": "LocalizedString", "locale": "en-US", "value": "Color" }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "isRequired": false,
      "isSearchable": false,
      "name": "finish",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Finish"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": " Fertig"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Finish"
        }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "isRequired": false,
      "isSearchable": true,
      "name": "colorlabel",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Color Label"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Farbetikett"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Color Label"
        }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "isRequired": false,
      "isSearchable": true,
      "name": "finishlabel",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Finish Label"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": " Fertiges Etikett"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Finish Label"
        }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "isRequired": false,
      "isSearchable": false,
      "name": "new-arrival",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "New Arrival"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Neuankömmling"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "New Arrival"
        }
      ],
      "type": { "boolean": { "dummy": null } }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "inputTip": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "size set as a string value"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Größe als String-Wert"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "size set as a string value"
        }
      ],
      "isRequired": false,
      "isSearchable": true,
      "name": "size",
      "label": [
        { "__typename": "LocalizedString", "locale": "en-GB", "value": "Size" },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Größe"
        },
        { "__typename": "LocalizedString", "locale": "en-US", "value": "Size" }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "SameForAll",
      "inputHint": "SingleLine",
      "inputTip": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Product description, made a custom attribute so product description is not used for search results."
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produktbeschreibung, als custom attribute, so dass die Produktbeschreibung nicht für Suchergebnisse verwendet wird."
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Product description, made a custom attribute so product description is not used for search results."
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-description",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Product Description"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Productbeschreibung"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Product Description"
        }
      ],
      "type": {
        "__typename": "LocalizableTextAttributeDefinitionType",
        "name": "ltext"
      }
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "inputTip": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "used to set the colors and labels displayed in the color filter on PLP"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "zum Einstellen der Farben und Beschriftungen, die im Farbfilter von PLP angezeigt werden"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "used to set the colors and labels displayed in the color filter on PLP"
        }
      ],
      "isRequired": false,
      "isSearchable": true,
      "name": "color-filter",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Color Filter"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Farbfilter"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Color Filter"
        }
      ],
      "type": {
        "lenum": {
          "values": [
            {
              "key": "#FFF",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "White"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Weiss"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "White"
                }
              ]
            },
            {
              "key": "#000",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Black"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Schwarz"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Black"
                }
              ]
            },
            {
              "key": "#808080",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Gray"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Grau"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Gray"
                }
              ]
            },
            {
              "key": "#0000FF",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Blue"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Blau"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Blue"
                }
              ]
            },
            {
              "key": "#00FF00",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Green"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Grün"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Green"
                }
              ]
            },
            {
              "key": "#A020F0",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Purple"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Lila"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Purple"
                }
              ]
            },
            {
              "key": "#C4A484",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Light Brown"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Hellbraun"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Light Brown"
                }
              ]
            },
            {
              "key": "#F5F5DC",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Beige"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Beige"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Beige"
                }
              ]
            },
            {
              "key": "#D2B48C",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Tan"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Bräunen"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Tan"
                }
              ]
            },
            {
              "key": "#FFFFF0",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Ivory"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Elfenbein"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Ivory"
                }
              ]
            },
            {
              "key": "#FFD700",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Gold"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Gold"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Gold"
                }
              ]
            },
            {
              "key": "#964B00",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Dark Brown"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Dunkelbraun"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Dark Brown"
                }
              ]
            },
            {
              "key": "#C0C0C0",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Silver"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Silber"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Silver"
                }
              ]
            },
            {
              "key": "#FFC0CB",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Pink"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Rosa"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Pink"
                }
              ]
            },
            {
              "key": "#FFA500",
              "label": [
                {
                  "__typename": "LocalizedString",
                  "locale": "en-GB",
                  "value": "Orange"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "de-DE",
                  "value": "Orange"
                },
                {
                  "__typename": "LocalizedString",
                  "locale": "en-US",
                  "value": "Orange"
                }
              ]
            }
          ]
        }
      }
    }
  ],
  "description": "items with color, fabric, size, finish and/or product spec attributes",
  "key": "furniture-and-decor",
  "name": "Furniture and decor"
}
`)
    );
  });
});
