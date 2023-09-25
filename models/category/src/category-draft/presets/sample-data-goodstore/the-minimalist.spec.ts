import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theMinimalist from './the-minimalist';
describe(`with theMinimalist preset`, () => {
  it('should create a theMinimalist category type draft', () => {
    const theMinimalistPreset = theMinimalist().build<TCategoryDraft>();
    expect(theMinimalistPreset).toMatchObject(
      JSON.parse(`{
  "key": "the-minimalist",
  "name": {
    "en-GB": "The Minimalist",
    "de-DE": "The Minimalist"
  },
  "orderHint": ".003",
  "parent": {
    "key": "collections",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "the-minimalist",
    "de-DE": "the-minimalist"
  }
}`)
    );
  });
});
