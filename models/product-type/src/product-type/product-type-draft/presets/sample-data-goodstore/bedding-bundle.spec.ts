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
        "en-GB": "product-description"
      },
      "inputTip": {
        "en-GB": "description of the bundle product"
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
        "en-GB": "Product Spec"
      },
      "inputTip": {
        "de-DE": "",
        "en-GB": "",
        "en-US": ""
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
        "de-DE": "Produkte dieses Bundles"
      },
      "inputTip": {
        "de-DE": "",
        "en-GB": "",
        "en-US": ""
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
});
