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
