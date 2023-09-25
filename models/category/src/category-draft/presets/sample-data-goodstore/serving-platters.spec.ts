import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import servingPlatters from './serving-platters';
describe(`with servingPlatters preset`, () => {
  it('should create a servingPlatters category type draft', () => {
    const servingPlattersPreset = servingPlatters().build<TCategoryDraft>();
    expect(servingPlattersPreset).toMatchObject(
      JSON.parse(`{
  "key": "serving-platters",
  "name": {
    "en-GB": "Serving Platters",
    "de-DE": "Servierplatten",
    "en-US": "Serving Platters"
  },
  "orderHint": ".0004",
  "parent": {
    "key": "serveware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "serving-platters",
    "de-DE": "serving-platters",
    "en-US": "serving-platters"
  }
}`)
    );
  });
});
