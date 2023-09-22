import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import armchairs from './armchairs';
describe(`with armchairs preset`, () => {
  it('should create a armchairs category type draft', () => {
    const armchairsPreset = armchairs().build<TCategoryDraft>();
    expect(armchairsPreset).toMatchObject(
      JSON.parse(`{
  "key": "armchairs",
  "name": {
    "en-GB": "Armchairs",
    "de-DE": "Stühle"
  },
  "orderHint": ".3",
  "parent": {
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "armchairs",
    "de-DE": "chairs"
  }
}`)
    );
  });
});
