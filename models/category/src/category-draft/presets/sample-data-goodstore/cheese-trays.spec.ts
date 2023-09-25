import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import cheeseTrays from './cheese-trays';
describe(`with cheeseTrays preset`, () => {
  it('should create a cheeseTrays category type draft', () => {
    const cheeseTraysPreset = cheeseTrays().build<TCategoryDraft>();
    expect(cheeseTraysPreset).toMatchObject(
      JSON.parse(`{
  "key": "cheese-trays",
  "name": {
    "en-GB": "Cheese Trays",
    "de-DE": "Käseplatten",
    "en-US": "Cheese Trays"
  },
  "orderHint": ".12",
  "parent": {
    "key": "serveware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "cheese-trays",
    "de-DE": "cheese-trays",
    "en-US": "cheese-trays"
  }
}`)
    );
  });
});
