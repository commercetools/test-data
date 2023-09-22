import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import sofas from './sofas';
describe(`with sofas preset`, () => {
  it('should create a sofas category type draft', () => {
    const sofasPreset = sofas().build<TCategoryDraft>();
    expect(sofasPreset).toMatchObject(
      JSON.parse(`{
  "key": "sofas",
  "name": {
    "en-GB": "Sofas",
    "de-DE": "Sofas"
  },
  "orderHint": ".3",
  "parent": {
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "sofas",
    "de-DE": "sofas"
  }
}`)
    );
  });
});
