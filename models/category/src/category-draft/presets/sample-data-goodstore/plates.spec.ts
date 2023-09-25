import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import plates from './plates';
describe(`with plates preset`, () => {
  it('should create a plates category type draft', () => {
    const platesPreset = plates().build<TCategoryDraft>();
    expect(platesPreset).toMatchObject(
      JSON.parse(`{
  "key": "plates",
  "name": {
    "en-GB": "Plates",
    "de-DE": "Platten",
    "en-US": "Plates"
  },
  "orderHint": ".82",
  "parent": {
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "plates",
    "de-DE": "plates",
    "en-US": "plates"
  }
}`)
    );
  });
});
