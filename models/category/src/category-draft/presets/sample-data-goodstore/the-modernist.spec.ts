import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theModernist from './the-modernist';
describe(`with theModernist preset`, () => {
  it('should create a theModernist category type draft', () => {
    const theModernistPreset = theModernist().build<TCategoryDraft>();
    expect(theModernistPreset).toMatchObject(
      JSON.parse(`{
  "key": "the-modernist",
  "name": {
    "en-GB": "The Modernist",
    "de-DE": "The Modernist",
    "en-US": "The Modernist"
  },
  "orderHint": ".0035",
  "parent": {
    "key": "collections",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "the-modernist",
    "de-DE": "the-modernist",
    "en-US": "the-modernist"
  }
}`)
    );
  });
});
