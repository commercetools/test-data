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
            "isSearchable": true,
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
            "isSearchable": true,
            "label": [
              {
                "locale": "en-GB",
                "value": "Color",
              },
              {
                "locale": "en-US",
                "value": "Color",
              },
              {
                "locale": "de-DE",
                "value": "Farbe",
              },
            ],
            "level": "Variant",
            "name": "color",
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
                "value": "Finish",
              },
              {
                "locale": "en-US",
                "value": "Finish",
              },
              {
                "locale": "de-DE",
                "value": "Fertig",
              },
            ],
            "level": "Variant",
            "name": "finish",
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
        ],
        "description": "items with color, fabric, size, finish and/or product spec attributes",
        "key": "furniture-and-decor",
        "name": "Furniture and decor",
      }
    `);
  });
});
