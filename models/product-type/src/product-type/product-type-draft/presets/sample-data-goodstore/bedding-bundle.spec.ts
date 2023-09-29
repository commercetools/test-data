import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import beddingBundle from './bedding-bundle';
describe(`with beddingBundle preset`, () => {
  it('should create a beddingBundle product type draft', () => {
    const beddingBundlePreset = beddingBundle().build<TProductTypeDraft>();
    expect(beddingBundlePreset).toMatchObject(
      JSON.parse(`{
  "attributes": [
    {
      "name": "product-description",
      "label": {
        "en-US": "product-description",
        "en-GB": "product-description",
        "de-DE": "Productbeschreibung"
      },
      "inputTip": {
        "en-US": "description of the bundle product",
        "en-GB": "description of the bundle product",
        "de-DE": "Beschreibung des Bundles"
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
      "name": "product-spec",
      "label": {
        "en-US": "Product Spec",
        "en-GB": "Product Spec",
        "de-DE": "Product Spezifikation"
      },
      "inputTip": {
        "en-US": "Product Spec",
        "en-GB": "Product Spec",
        "de-DE": "Produktspezifikation"
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
      "name": "product-ref",
      "label": {
        "en-US": "Products of this bundle",
        "en-GB": "Products of this bundle",
        "de-DE": "Produkte dieses Bundles"
      },
      "inputTip": {
        "en-US": "Products of this bundle",
        "en-GB": "Products of this bundle",
        "de-DE": "Produkte dieses Bundles"
      },
      "isRequired": false,
      "type": {
        "name": "set",
        "elementType": {
          "name": "reference",
          "referenceTypeId": "product"
        }
      },
      "attributeConstraint": "None",
      "isSearchable": false,
      "inputHint": "SingleLine"
    }
  ],
  "description": "Product type used to bundle bedding components",
  "key": "bedding-bundle",
  "name": "Bedding Bundle"
}`)
    );
  });

  it('should create a beddingBundle product type draft for graphql', () => {
    const beddingBundlePreset =
      beddingBundle().buildGraphql<TProductTypeDraftGraphql>();
    expect(beddingBundlePreset).toMatchObject(
      JSON.parse(`{
  "__typename": "ProductTypeDraft",
  "attributeDefinitions": [
    {
      "attributeConstraint": "SameForAll",
      "inputHint": "SingleLine",
      "inputTip": [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "description of the bundle product"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "description of the bundle product"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Beschreibung des Bundles"
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-description",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "product-description"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "product-description"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Productbeschreibung"
        }
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
          "locale": "en-US",
          "value": "Product Spec"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Product Spec"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produktspezifikation"
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-spec",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Product Spec"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Product Spec"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Product Spezifikation"
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
          "locale": "en-US",
          "value": "Products of this bundle"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Products of this bundle"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produkte dieses Bundles"
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-ref",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Products of this bundle"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Products of this bundle"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produkte dieses Bundles"
        }
      ],
      "type": {
        "set": {
          "elementType": { "reference": { "referenceTypeId": "product" } }
        }
      }
    }
  ],
  "description": "Product type used to bundle bedding components",
  "key": "bedding-bundle",
  "name": "Bedding Bundle"
}
`)
    );
  });
});
