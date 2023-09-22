import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bowls from './bowls';
describe(`with bowls preset`, () => {
  it('should create a bowls category type draft', () => {
    const bowlsPreset = bowls().build<TCategoryDraft>();
    expect(bowlsPreset).toMatchObject(
      JSON.parse(`{
  "key": "bowls",
  "name": {
    "en-GB": "Bowls",
    "de-DE": "Schalen"
  },
  "orderHint": ".56",
  "parent": {
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bowls",
    "de-DE": "bowls"
  }
}`)
    );
  });
});
