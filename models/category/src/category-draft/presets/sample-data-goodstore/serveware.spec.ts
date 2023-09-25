import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import serveware from './serveware';
describe(`with serveware preset`, () => {
  it('should create a serveware category type draft', () => {
    const servewarePreset = serveware().build<TCategoryDraft>();
    expect(servewarePreset).toMatchObject(
      JSON.parse(`{
  "key": "serveware",
  "name": {
    "en-GB": "Collections",
    "de-DE": "Alles zum Servieren",
    "en-US": "Serveware"
  },
  "orderHint": ".86",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "kitchen-collections",
    "de-DE": "serveware",
    "en-US": "kitchen-collections"
  }
}`)
    );
  });
});
