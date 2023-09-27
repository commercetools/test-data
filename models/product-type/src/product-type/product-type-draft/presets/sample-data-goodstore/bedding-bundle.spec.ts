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
        "en-GB": "product-description",
        "de-DE": "Productbeschreibung",
        "en-US": "product-description"
      },
      "inputTip": {
        "en-GB": "description of the bundle product",
        "de-DE": "Beschreibung des Bundles",
        "en-US": "description of the bundle product"
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
        "en-GB": "Product Spec",
        "de-DE": "Product Spezifikation",
        "en-US": "Product Spec"
      },
      "inputTip": {
        "en-GB": "Product Spec",
        "de-DE": "Produktspezifikation",
        "en-US": "Product Spec"
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
        "en-GB": "Products of this bundle",
        "de-DE": "Produkte dieses Bundles",
        "en-US": "Products of this bundle"
      },
      "inputTip": {
        "en-GB": "Products of this bundle",
        "de-DE": "Produkte dieses Bundles",
        "en-US": "Products of this bundle"
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
          "locale": "en-GB",
          "value": "description of the bundle product"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Beschreibung des Bundles"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "description of the bundle product"
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-description",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "product-description"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Productbeschreibung"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "product-description"
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
          "locale": "en-GB",
          "value": "Product Spec"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produktspezifikation"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Product Spec"
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-spec",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Product Spec"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Product Spezifikation"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Product Spec"
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
          "value": "Products of this bundle"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produkte dieses Bundles"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Products of this bundle"
        }
      ],
      "isRequired": false,
      "isSearchable": false,
      "name": "product-ref",
      "label": [
        {
          "__typename": "LocalizedString",
          "locale": "en-GB",
          "value": "Products of this bundle"
        },
        {
          "__typename": "LocalizedString",
          "locale": "de-DE",
          "value": "Produkte dieses Bundles"
        },
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Products of this bundle"
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
