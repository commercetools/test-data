import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import glassware from './glassware';
describe(`with glassware preset`, () => {
  it('should create a glassware category type draft', () => {
    const glasswarePreset = glassware().build<TCategoryDraft>();
    expect(glasswarePreset).toMatchObject(
      JSON.parse(`{
  "key": "glassware",
  "name": {
    "en-GB": "Glassware",
    "de-DE": "Gläser"
  },
  "orderHint": ".23",
  "parent": {
    "key": "bar-glassware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "glassware",
    "de-DE": "glassware"
  }
}`)
    );
  });
});
