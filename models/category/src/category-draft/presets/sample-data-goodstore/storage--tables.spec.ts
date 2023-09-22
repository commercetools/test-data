import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import storageTables from './storage--tables';
describe(`with storageTables preset`, () => {
  it('should create a storageTables category type draft', () => {
    const storageTablesPreset = storageTables().build<TCategoryDraft>();
    expect(storageTablesPreset).toMatchObject(
      JSON.parse(`{
  "key": "storage--tables",
  "name": {
    "en-GB": "Storage & Tables",
    "de-DE": "Kommoden"
  },
  "orderHint": ".1",
  "parent": {
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "storage-and-tables",
    "de-DE": "dressers"
  }
}`)
    );
  });
});
