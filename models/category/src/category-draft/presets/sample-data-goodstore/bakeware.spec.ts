import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bakeware from './bakeware';
describe(`with bakeware preset`, () => {
  it('should create a bakeware category type draft', () => {
    const bakewarePreset = bakeware().build<TCategoryDraft>();
    expect(bakewarePreset).toMatchObject(
      JSON.parse(`{
  "key": "bakeware",
  "name": {
    "en-GB": "Bakeware",
    "de-DE": "Backutensilien"
  },
  "orderHint": ".42",
  "parent": {
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bakeware",
    "de-DE": "bakeware"
  }
}`)
    );
  });
});
