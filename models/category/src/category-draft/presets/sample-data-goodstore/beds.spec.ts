import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import beds from './beds';
describe(`with beds preset`, () => {
  it('should create a beds category type draft', () => {
    const bedsPreset = beds().build<TCategoryDraft>();
    expect(bedsPreset).toMatchObject(
      JSON.parse(`{
  "key": "beds",
  "name": {
    "en-GB": "Beds",
    "de-DE": "Betten"
  },
  "orderHint": ".4",
  "parent": {
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "beds",
    "de-DE": "beds"
  }
}`)
    );
  });
});
