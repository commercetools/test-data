import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bedding from './bedding';
describe(`with bedding preset`, () => {
  it('should create a bedding category type draft', () => {
    const beddingPreset = bedding().build<TCategoryDraft>();
    expect(beddingPreset).toMatchObject(
      JSON.parse(`{
  "key": "bedding",
  "name": {
    "en-GB": "Bedding",
    "de-DE": "Bettwäsche",
    "en-US": "Bedding"
  },
  "orderHint": ".5",
  "parent": {
    "key": "home-decor",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bedding",
    "de-DE": "bettwsche",
    "en-US": "bedding"
  }
}`)
    );
  });
});
