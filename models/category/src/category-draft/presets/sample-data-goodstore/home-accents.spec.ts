import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import homeAccents from './home-accents';
describe(`with homeAccents preset`, () => {
  it('should create a homeAccents category type draft', () => {
    const homeAccentsPreset = homeAccents().build<TCategoryDraft>();
    expect(homeAccentsPreset).toMatchObject(
      JSON.parse(`{
  "key": "home-accents",
  "name": {
    "en-GB": "Home Accents",
    "de-DE": "Accessoires"
  },
  "orderHint": ".5",
  "parent": {
    "key": "room-decor",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "home-accents",
    "de-DE": "home-akzente",
    "en-US": "home-accents"
  }
}`)
    );
  });
});
