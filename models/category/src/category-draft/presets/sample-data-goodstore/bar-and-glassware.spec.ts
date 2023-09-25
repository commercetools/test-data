import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barAndGlassware from './bar-and-glassware';
describe(`with barAndGlassware preset`, () => {
  it('should create a barAndGlassware category type draft', () => {
    const barAndGlasswarePreset = barAndGlassware().build<TCategoryDraft>();
    expect(barAndGlasswarePreset).toMatchObject(
      JSON.parse(`{
  "key": "bar-and-glassware",
  "name": {
    "en-GB": "Bar and Glassware",
    "de-DE": "Gläser und Barzubehör",
    "en-US": "Bar and Glassware"
  },
  "orderHint": ".82",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bar-and-glassware",
    "de-DE": "bar-and-glassware",
    "en-US": "bar-and-glassware"
  }
}`)
    );
  });
});
