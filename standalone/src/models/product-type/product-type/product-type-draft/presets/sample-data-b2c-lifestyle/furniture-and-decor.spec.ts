import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import * as furnitureAndDecorPresets from './furniture-and-decor';

describe(`with furnitureAndDecor preset`, () => {
  it('should create a furnitureAndDecor product type draft', () => {
    const furnitureAndDecorPreset = furnitureAndDecorPresets
      .restPreset()
      .build<TProductTypeDraft>();
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
              "name": "ltext",
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
              "name": "ltext",
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
    const furnitureAndDecorPreset = furnitureAndDecorPresets
      .graphqlPreset()
      .buildGraphql<TProductTypeDraftGraphql>();

    expect(furnitureAndDecorPreset).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "MultiLine",
            "inputTip": [
              {
                "locale": "en-GB",
                "value": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
              },
              {
                "locale": "en-US",
                "value": "Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-GB",
                "value": "Product Specifications",
              },
              {
                "locale": "en-US",
                "value": "Product Specifications",
              },
              {
                "locale": "de-DE",
                "value": "Produktspezifikationen",
              },
            ],
            "level": "Variant",
            "name": "productspec",
            "type": {
              "ltext": {
                "dummy": null,
              },
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
                "locale": "en-GB",
                "value": "New Arrival",
              },
              {
                "locale": "en-US",
                "value": "New Arrival",
              },
              {
                "locale": "de-DE",
                "value": "Neuankömmling",
              },
            ],
            "level": "Variant",
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
                "locale": "en-GB",
                "value": "size set as a string value",
              },
              {
                "locale": "en-US",
                "value": "size set as a string value",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-GB",
                "value": "Size",
              },
              {
                "locale": "en-US",
                "value": "Size",
              },
            ],
            "level": "Variant",
            "name": "size",
            "type": {
              "ltext": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-GB",
                "value": "Product description, made a custom attribute so product description is not used for search results.",
              },
              {
                "locale": "en-US",
                "value": "Product description, made a custom attribute so product description is not used for search results.",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-GB",
                "value": "Product Description",
              },
              {
                "locale": "en-US",
                "value": "Product Description",
              },
            ],
            "level": "Variant",
            "name": "product-description",
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
              "ltext": {
                "dummy": null,
              },
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
