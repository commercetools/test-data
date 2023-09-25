import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import rugs from './rugs';
describe(`with rugs preset`, () => {
  it('should create a rugs category type draft', () => {
    const rugsPreset = rugs().build<TCategoryDraft>();
    expect(rugsPreset).toMatchObject(
      JSON.parse(`{
  "key": "rugs",
  "name": {
    "en-GB": "Rugs",
    "de-DE": "Teppiche"
  },
  "orderHint": ".4",
  "parent": {
    "key": "room-decor",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "rugs",
    "de-DE": "teppiche",
    "en-US": "rugs"
  }
}`)
    );
  });
});
