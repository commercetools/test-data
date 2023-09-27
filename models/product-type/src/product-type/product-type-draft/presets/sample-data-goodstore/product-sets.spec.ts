import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import productSets from './product-sets';
describe(`with productSets preset`, () => {
  it('should create a productSets product type draft', () => {
    const productSetsPreset = productSets().build<TProductTypeDraft>();
    expect(productSetsPreset).toMatchObject(
      JSON.parse(`{
  "attributes": [
    {
      "name": "type",
      "label": {
        "en-GB": "Type",
        "de-DE": "Typ",
        "en-US": "Type"
      },
      "isRequired": false,
      "type": {
        "name": "set",
        "elementType": {
          "name": "ltext"
        }
      },
      "attributeConstraint": "None",
      "isSearchable": true,
      "inputHint": "SingleLine"
    }
  ],
  "description": "products also sold as sets with their variants",
  "key": "product-sets",
  "name": "Product sets"
}`)
    );
  });

  it('should create a productSets product type draft for graphql', () => {
    const productSetsPreset =
      productSets().buildGraphql<TProductTypeDraftGraphql>();
    expect(productSetsPreset).toMatchObject(
      JSON.parse(`{
  "__typename": "ProductTypeDraft",
  "attributeDefinitions": [
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "isRequired": false,
      "isSearchable": true,
      "name": "type",
      "label": [
        { "__typename": "LocalizedString", "locale": "en-GB", "value": "Type" },
        { "__typename": "LocalizedString", "locale": "de-DE", "value": "Typ" },
        { "__typename": "LocalizedString", "locale": "en-US", "value": "Type" }
      ],
      "type": {
        "set": {
          "elementType": {
            "__typename": "LocalizableTextAttributeDefinitionType",
            "name": "ltext"
          }
        }
      }
    }
  ],
  "description": "products also sold as sets with their variants",
  "key": "product-sets",
  "name": "Product sets"
}
`)
    );
  });
});
