import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barGlassware from './bar-glassware';
describe(`with barGlassware preset`, () => {
  it('should create a barGlassware category type draft', () => {
    const barGlasswarePreset = barGlassware().build<TCategoryDraft>();
    expect(barGlasswarePreset).toMatchObject(
      JSON.parse(`{
  "key": "bar-glassware",
  "name": {
    "en-GB": "Bar and Glassware",
    "de-DE": "Gläser und Barzubehör"
  },
  "orderHint": ".82",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bar-and-glassware",
    "de-DE": "bar-and-glassware"
  }
}`)
    );
  });
});
