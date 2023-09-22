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
        "de-DE": "Typ"
      },
      "inputTip": {
        "de-DE": "",
        "en-US": ""
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
});
