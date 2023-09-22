import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import homeDecor from './home-decor';
describe(`with homeDecor preset`, () => {
  it('should create a homeDecor category type draft', () => {
    const homeDecorPreset = homeDecor().build<TCategoryDraft>();
    expect(homeDecorPreset).toMatchObject(
      JSON.parse(`{
  "key": "home-decor",
  "name": {
    "en-GB": "Home Decor",
    "de-DE": "Dekoration"
  },
  "orderHint": "0.1",
  "slug": {
    "en-GB": "home-decor",
    "de-DE": "home-decor"
  }
}`)
    );
  });
});
