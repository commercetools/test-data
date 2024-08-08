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
              "set": {
                "elementType": {
                  "ltext": {
                    "dummy": null,
                  },
                },
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
