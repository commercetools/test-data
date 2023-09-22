import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barAccessories from './bar-accessories';
describe(`with barAccessories preset`, () => {
  it('should create a barAccessories category type draft', () => {
    const barAccessoriesPreset = barAccessories().build<TCategoryDraft>();
    expect(barAccessoriesPreset).toMatchObject(
      JSON.parse(`{
  "key": "bar-accessories",
  "name": {
    "en-GB": "Bar Accessories",
    "de-DE": "Barzubehör"
  },
  "orderHint": ".36",
  "parent": {
    "key": "bar-glassware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bar-accessories",
    "de-DE": "bar-accessories"
  }
}`)
    );
  });
});
