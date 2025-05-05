import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import beddingBundle from './bedding-bundle';
describe(`with beddingBundle preset`, () => {
  it('should create a beddingBundle product type draft', () => {
    const beddingBundlePreset = beddingBundle().build<TProductTypeDraft>();
    expect(beddingBundlePreset).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-GB": "description of the bundle product",
              "en-US": "description of the bundle product",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-GB": "product-description",
              "en-US": "product-description",
              "fr": undefined,
            },
            "name": "product-description",
            "type": {
              "name": "ltext",
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-GB": "Product Spec",
              "en-US": "Product Spec",
              "fr": undefined,
            },
            "name": "product-spec",
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
              "de-DE": "Produkte dieses Bundles",
              "en": undefined,
              "en-GB": "Products of this bundle",
              "en-US": "Products of this bundle",
              "fr": undefined,
            },
            "name": "product-ref",
            "type": {
              "elementType": {
                "name": "reference",
                "referenceTypeId": "product",
              },
              "name": "set",
            },
          },
        ],
        "description": "Product type used to bundle bedding components",
        "key": "bedding-bundle",
        "name": "Bedding Bundle",
      }
    `);
  });

  it('should create a beddingBundle product type draft for graphql', () => {
    const beddingBundlePreset =
      beddingBundle().buildGraphql<TProductTypeDraftGraphql>();
    expect(beddingBundlePreset).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-GB",
                "value": "description of the bundle product",
              },
              {
                "locale": "en-US",
                "value": "description of the bundle product",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-GB",
                "value": "product-description",
              },
              {
                "locale": "en-US",
                "value": "product-description",
              },
            ],
            "name": "product-description",
            "type": {
              "dummy": null,
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-GB",
                "value": "Product Spec",
              },
              {
                "locale": "en-US",
                "value": "Product Spec",
              },
            ],
            "name": "product-spec",
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
                "value": "Products of this bundle",
              },
              {
                "locale": "en-US",
                "value": "Products of this bundle",
              },
              {
                "locale": "de-DE",
                "value": "Produkte dieses Bundles",
              },
            ],
            "name": "product-ref",
            "type": {
              "set": {
                "elementType": {
                  "reference": {
                    "referenceTypeId": "product",
                  },
                },
              },
            },
          },
        ],
        "description": "Product type used to bundle bedding components",
        "key": "bedding-bundle",
        "name": "Bedding Bundle",
      }
    `);
  });
});
