import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import * as productSetsPresets from './product-sets';
describe(`with productSets preset`, () => {
  it('should create a productSets product type draft', () => {
    const productSetsPreset = productSetsPresets
      .restPreset()
      .build<TProductTypeDraft>();
    expect(productSetsPreset).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Typ",
              "en": undefined,
              "en-GB": "Type",
              "en-US": "Type",
              "fr": undefined,
            },
            "name": "type",
            "type": {
              "elementType": {
                "name": "ltext",
              },
              "name": "set",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "de-DE": "Farbe, die für die Facettierung auf Produktlistenseiten verwendet wird",
              "en": undefined,
              "en-GB": "Colour used for faceting on Product Listing Pages",
              "en-US": "Color used for faceting on Product Listing Pages",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Suchfarbe",
              "en": undefined,
              "en-GB": "Search Colour",
              "en-US": "Search Color",
              "fr": undefined,
            },
            "name": "search-color",
            "type": {
              "name": "lenum",
              "values": [
                {
                  "key": "black",
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
                  "key": "gray",
                  "label": {
                    "de": undefined,
                    "de-DE": "Grau",
                    "en": undefined,
                    "en-GB": "Grey",
                    "en-US": "Gray",
                    "fr": undefined,
                  },
                },
                {
                  "key": "white",
                  "label": {
                    "de": undefined,
                    "de-DE": "Weiß",
                    "en": undefined,
                    "en-GB": "White",
                    "en-US": "White",
                    "fr": undefined,
                  },
                },
                {
                  "key": "blue",
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
                  "key": "brown",
                  "label": {
                    "de": undefined,
                    "de-DE": "Braun",
                    "en": undefined,
                    "en-GB": "Brown",
                    "en-US": "Brown",
                    "fr": undefined,
                  },
                },
                {
                  "key": "green",
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
                  "key": "red",
                  "label": {
                    "de": undefined,
                    "de-DE": "Rot",
                    "en": undefined,
                    "en-GB": "Red",
                    "en-US": "Red",
                    "fr": undefined,
                  },
                },
                {
                  "key": "purple",
                  "label": {
                    "de": undefined,
                    "de-DE": "Violett",
                    "en": undefined,
                    "en-GB": "Purple",
                    "en-US": "Purple",
                    "fr": undefined,
                  },
                },
                {
                  "key": "pink",
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
                  "key": "yellow",
                  "label": {
                    "de": undefined,
                    "de-DE": "Gelb",
                    "en": undefined,
                    "en-GB": "Yellow",
                    "en-US": "Yellow",
                    "fr": undefined,
                  },
                },
                {
                  "key": "gold",
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
                  "key": "silver",
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
                  "key": "multicolored",
                  "label": {
                    "de": undefined,
                    "de-DE": "Mehrfarbig",
                    "en": undefined,
                    "en-GB": "Multicoloured",
                    "en-US": "Multicolored",
                    "fr": undefined,
                  },
                },
                {
                  "key": "transparent",
                  "label": {
                    "de": undefined,
                    "de-DE": "Transparent",
                    "en": undefined,
                    "en-GB": "Transparent",
                    "en-US": "Transparent",
                    "fr": undefined,
                  },
                },
                {
                  "key": "glass",
                  "label": {
                    "de": undefined,
                    "de-DE": "Glas",
                    "en": undefined,
                    "en-GB": "Glass",
                    "en-US": "Glass",
                    "fr": undefined,
                  },
                },
              ],
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "de-DE": "Oberfläche, die für die Facettierung auf Produktlistenseiten verwendet wird",
              "en": undefined,
              "en-GB": "Finish used for facetting on Product Listing Pages",
              "en-US": "Finish used for facetting on Product Listing Pages",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Suchfarbe",
              "en": undefined,
              "en-GB": "Search Finish",
              "en-US": "Search Finish",
              "fr": undefined,
            },
            "name": "search-finish",
            "type": {
              "name": "lenum",
              "values": [
                {
                  "key": "black",
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
                  "key": "gray",
                  "label": {
                    "de": undefined,
                    "de-DE": "Grau",
                    "en": undefined,
                    "en-GB": "Grey",
                    "en-US": "Gray",
                    "fr": undefined,
                  },
                },
                {
                  "key": "white",
                  "label": {
                    "de": undefined,
                    "de-DE": "Weiß",
                    "en": undefined,
                    "en-GB": "White",
                    "en-US": "White",
                    "fr": undefined,
                  },
                },
                {
                  "key": "blue",
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
                  "key": "brown",
                  "label": {
                    "de": undefined,
                    "de-DE": "Braun",
                    "en": undefined,
                    "en-GB": "Brown",
                    "en-US": "Brown",
                    "fr": undefined,
                  },
                },
                {
                  "key": "green",
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
                  "key": "red",
                  "label": {
                    "de": undefined,
                    "de-DE": "Rot",
                    "en": undefined,
                    "en-GB": "Red",
                    "en-US": "Red",
                    "fr": undefined,
                  },
                },
                {
                  "key": "purple",
                  "label": {
                    "de": undefined,
                    "de-DE": "Violett",
                    "en": undefined,
                    "en-GB": "Purple",
                    "en-US": "Purple",
                    "fr": undefined,
                  },
                },
                {
                  "key": "pink",
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
                  "key": "yellow",
                  "label": {
                    "de": undefined,
                    "de-DE": "Gelb",
                    "en": undefined,
                    "en-GB": "Yellow",
                    "en-US": "Yellow",
                    "fr": undefined,
                  },
                },
                {
                  "key": "gold",
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
                  "key": "silver",
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
                  "key": "multicolored",
                  "label": {
                    "de": undefined,
                    "de-DE": "Mehrfarbig",
                    "en": undefined,
                    "en-GB": "Multicoloured",
                    "en-US": "Multicolored",
                    "fr": undefined,
                  },
                },
                {
                  "key": "transparent",
                  "label": {
                    "de": undefined,
                    "de-DE": "Transparent",
                    "en": undefined,
                    "en-GB": "Transparent",
                    "en-US": "Transparent",
                    "fr": undefined,
                  },
                },
                {
                  "key": "glass",
                  "label": {
                    "de": undefined,
                    "de-DE": "Glas",
                    "en": undefined,
                    "en-GB": "Glass",
                    "en-US": "Glass",
                    "fr": undefined,
                  },
                },
              ],
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "de-DE": "Spezifische Farbe Beschreibung",
              "en": undefined,
              "en-GB": "Specific colour description for product details page",
              "en-US": "Specific color description for product details page",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Spezifische Farbe",
              "en": undefined,
              "en-GB": "Colour Label",
              "en-US": "Color Label",
              "fr": undefined,
            },
            "name": "color-label",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "de-DE": "Spezifische Oberflächen Beschreibung",
              "en": undefined,
              "en-GB": "Specific finish colour description for product details page",
              "en-US": "Specific finish color description for product details page",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Spezifische Oberflächen Beschreibung",
              "en": undefined,
              "en-GB": "Finish Label",
              "en-US": "Finish Label",
              "fr": undefined,
            },
            "name": "finish-label",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "de-DE": "Spezifischer Farbcode, der auf der Produktdetailseite angezeigt wird",
              "en": undefined,
              "en-GB": "Specific colour code to be displayed on product details page",
              "en-US": "Specific color code to be displayed on product details page",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Farbcode",
              "en": undefined,
              "en-GB": "Colour Code",
              "en-US": "Color Code",
              "fr": undefined,
            },
            "name": "color-code",
            "type": {
              "name": "text",
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "de-DE": "Spezifischer Oberflächen-Farbcode, der auf der Produktdetailseite angezeigt wird",
              "en": undefined,
              "en-GB": "Specific finish colour code to be displayed on product details page",
              "en-US": "Specific finish color code to be displayed on product details page",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Oberflächen-Farbcode",
              "en": undefined,
              "en-GB": "Finish Colour Code",
              "en-US": "Finish Color Code",
              "fr": undefined,
            },
            "name": "finish-code",
            "type": {
              "name": "text",
            },
          },
        ],
        "description": "products also sold as sets with their variants",
        "key": "product-sets",
        "name": "Product sets",
      }
    `);
  });

  it('should create a productSets product type draft for graphql', () => {
    const productSetsPreset = productSetsPresets
      .graphqlPreset()
      .buildGraphql<TProductTypeDraftGraphql>();
    expect(productSetsPreset).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-GB",
                "value": "Type",
              },
              {
                "locale": "en-US",
                "value": "Type",
              },
              {
                "locale": "de-DE",
                "value": "Typ",
              },
            ],
            "level": "Variant",
            "name": "type",
            "type": {
              "set": {
                "elementType": {
                  "ltext": {
                    "dummy": null,
                  },
                },
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Color used for faceting on Product Listing Pages",
              },
              {
                "locale": "en-GB",
                "value": "Colour used for faceting on Product Listing Pages",
              },
              {
                "locale": "de-DE",
                "value": "Farbe, die für die Facettierung auf Produktlistenseiten verwendet wird",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Search Color",
              },
              {
                "locale": "en-GB",
                "value": "Search Colour",
              },
              {
                "locale": "de-DE",
                "value": "Suchfarbe",
              },
            ],
            "level": "Variant",
            "name": "search-color",
            "type": {
              "lenum": {
                "values": [
                  {
                    "key": "black",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Black",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Black",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Schwarz",
                      },
                    ],
                  },
                  {
                    "key": "gray",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Gray",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Grey",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Grau",
                      },
                    ],
                  },
                  {
                    "key": "white",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "White",
                      },
                      {
                        "locale": "en-GB",
                        "value": "White",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Weiß",
                      },
                    ],
                  },
                  {
                    "key": "blue",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Blue",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Blue",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Blau",
                      },
                    ],
                  },
                  {
                    "key": "brown",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Brown",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Brown",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Braun",
                      },
                    ],
                  },
                  {
                    "key": "green",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Green",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Green",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Grün",
                      },
                    ],
                  },
                  {
                    "key": "red",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Red",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Red",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Rot",
                      },
                    ],
                  },
                  {
                    "key": "purple",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Purple",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Purple",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Violett",
                      },
                    ],
                  },
                  {
                    "key": "pink",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Pink",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Pink",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Rosa",
                      },
                    ],
                  },
                  {
                    "key": "yellow",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Yellow",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Yellow",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Gelb",
                      },
                    ],
                  },
                  {
                    "key": "gold",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Gold",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Gold",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Gold",
                      },
                    ],
                  },
                  {
                    "key": "silver",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Silver",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Silver",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Silber",
                      },
                    ],
                  },
                  {
                    "key": "multicolored",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Multicolored",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Multicoloured",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Mehrfarbig",
                      },
                    ],
                  },
                  {
                    "key": "transparent",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Transparent",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Transparent",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Transparent",
                      },
                    ],
                  },
                  {
                    "key": "glass",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Glass",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Glass",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Glas",
                      },
                    ],
                  },
                ],
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Finish used for facetting on Product Listing Pages",
              },
              {
                "locale": "en-GB",
                "value": "Finish used for facetting on Product Listing Pages",
              },
              {
                "locale": "de-DE",
                "value": "Oberfläche, die für die Facettierung auf Produktlistenseiten verwendet wird",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Search Finish",
              },
              {
                "locale": "en-GB",
                "value": "Search Finish",
              },
              {
                "locale": "de-DE",
                "value": "Suchfarbe",
              },
            ],
            "level": "Variant",
            "name": "search-finish",
            "type": {
              "lenum": {
                "values": [
                  {
                    "key": "black",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Black",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Black",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Schwarz",
                      },
                    ],
                  },
                  {
                    "key": "gray",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Gray",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Grey",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Grau",
                      },
                    ],
                  },
                  {
                    "key": "white",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "White",
                      },
                      {
                        "locale": "en-GB",
                        "value": "White",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Weiß",
                      },
                    ],
                  },
                  {
                    "key": "blue",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Blue",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Blue",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Blau",
                      },
                    ],
                  },
                  {
                    "key": "brown",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Brown",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Brown",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Braun",
                      },
                    ],
                  },
                  {
                    "key": "green",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Green",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Green",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Grün",
                      },
                    ],
                  },
                  {
                    "key": "red",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Red",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Red",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Rot",
                      },
                    ],
                  },
                  {
                    "key": "purple",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Purple",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Purple",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Violett",
                      },
                    ],
                  },
                  {
                    "key": "pink",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Pink",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Pink",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Rosa",
                      },
                    ],
                  },
                  {
                    "key": "yellow",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Yellow",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Yellow",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Gelb",
                      },
                    ],
                  },
                  {
                    "key": "gold",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Gold",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Gold",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Gold",
                      },
                    ],
                  },
                  {
                    "key": "silver",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Silver",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Silver",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Silber",
                      },
                    ],
                  },
                  {
                    "key": "multicolored",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Multicolored",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Multicoloured",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Mehrfarbig",
                      },
                    ],
                  },
                  {
                    "key": "transparent",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Transparent",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Transparent",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Transparent",
                      },
                    ],
                  },
                  {
                    "key": "glass",
                    "label": [
                      {
                        "locale": "en-US",
                        "value": "Glass",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Glass",
                      },
                      {
                        "locale": "de-DE",
                        "value": "Glas",
                      },
                    ],
                  },
                ],
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Specific color description for product details page",
              },
              {
                "locale": "en-GB",
                "value": "Specific colour description for product details page",
              },
              {
                "locale": "de-DE",
                "value": "Spezifische Farbe Beschreibung",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Color Label",
              },
              {
                "locale": "en-GB",
                "value": "Colour Label",
              },
              {
                "locale": "de-DE",
                "value": "Spezifische Farbe",
              },
            ],
            "level": "Variant",
            "name": "color-label",
            "type": {
              "ltext": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Specific finish color description for product details page",
              },
              {
                "locale": "en-GB",
                "value": "Specific finish colour description for product details page",
              },
              {
                "locale": "de-DE",
                "value": "Spezifische Oberflächen Beschreibung",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Finish Label",
              },
              {
                "locale": "en-GB",
                "value": "Finish Label",
              },
              {
                "locale": "de-DE",
                "value": "Spezifische Oberflächen Beschreibung",
              },
            ],
            "level": "Variant",
            "name": "finish-label",
            "type": {
              "ltext": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Specific color code to be displayed on product details page",
              },
              {
                "locale": "en-GB",
                "value": "Specific colour code to be displayed on product details page",
              },
              {
                "locale": "de-DE",
                "value": "Spezifischer Farbcode, der auf der Produktdetailseite angezeigt wird",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Color Code",
              },
              {
                "locale": "en-GB",
                "value": "Colour Code",
              },
              {
                "locale": "de-DE",
                "value": "Farbcode",
              },
            ],
            "level": "Variant",
            "name": "color-code",
            "type": {
              "text": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Specific finish color code to be displayed on product details page",
              },
              {
                "locale": "en-GB",
                "value": "Specific finish colour code to be displayed on product details page",
              },
              {
                "locale": "de-DE",
                "value": "Spezifischer Oberflächen-Farbcode, der auf der Produktdetailseite angezeigt wird",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Finish Color Code",
              },
              {
                "locale": "en-GB",
                "value": "Finish Colour Code",
              },
              {
                "locale": "de-DE",
                "value": "Oberflächen-Farbcode",
              },
            ],
            "level": "Variant",
            "name": "finish-code",
            "type": {
              "text": {
                "dummy": null,
              },
            },
          },
        ],
        "description": "products also sold as sets with their variants",
        "key": "product-sets",
        "name": "Product sets",
      }
    `);
  });
});
