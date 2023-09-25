import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import collections from './collections';
describe(`with collections preset`, () => {
  it('should create a collections category type draft', () => {
    const collectionsPreset = collections().build<TCategoryDraft>();
    expect(collectionsPreset).toMatchObject(
      JSON.parse(`{
  "key": "collections",
  "name": {
    "en-GB": "Collections",
    "de-DE": "Sonderkollektionen"
  },
  "orderHint": ".7",
  "parent": {
    "key": "furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "furniture-collections",
    "de-DE": "collections"
  }
}`)
    );
  });
});
