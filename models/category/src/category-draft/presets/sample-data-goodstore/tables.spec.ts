import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import tables from './tables';
describe(`with tables preset`, () => {
  it('should create a tables category type draft', () => {
    const tablesPreset = tables().build<TCategoryDraft>();
    expect(tablesPreset).toMatchObject(
      JSON.parse(`{
  "key": "tables",
  "name": {
    "en-GB": "Tables",
    "de-DE": "Tische"
  },
  "orderHint": ".25",
  "parent": {
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "living-room-tables",
    "de-DE": "coffee-tables"
  }
}`)
    );
  });
});
