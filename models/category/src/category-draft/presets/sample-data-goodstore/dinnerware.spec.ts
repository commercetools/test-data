import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import dinnerware from './dinnerware';
describe(`with dinnerware preset`, () => {
  it('should create a dinnerware category type draft', () => {
    const dinnerwarePreset = dinnerware().build<TCategoryDraft>();
    expect(dinnerwarePreset).toMatchObject(
      JSON.parse(`{
  "key": "dinnerware",
  "name": {
    "en-GB": "Serving & Tableware",
    "de-DE": "Geschirr",
    "en-US": "Dinnerware"
  },
  "orderHint": ".75",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "serving-and-tableware",
    "de-DE": "dinnerware",
    "en-US": "serving-and-tableware"
  }
}`)
    );
  });
});
