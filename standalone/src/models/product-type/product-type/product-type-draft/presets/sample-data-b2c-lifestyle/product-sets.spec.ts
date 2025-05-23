import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import productSets from './product-sets';
describe(`with productSets preset`, () => {
  it('should create a productSets product type draft', () => {
    const productSetsPreset = productSets().build<TProductTypeDraft>();
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
        ],
        "description": "products also sold as sets with their variants",
        "key": "product-sets",
        "name": "Product sets",
      }
    `);
  });

  it('should create a productSets product type draft for graphql', () => {
    const productSetsPreset =
      productSets().buildGraphql<TProductTypeDraftGraphql>();
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
            "name": "type",
            "type": {
              "elementType": {
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
            "name": "color",
            "type": {
              "dummy": null,
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
            "name": "finish",
            "type": {
              "dummy": null,
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
