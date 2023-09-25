import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import furniture from './furniture';
describe(`with furniture preset`, () => {
  it('should create a furniture category type draft', () => {
    const furniturePreset = furniture().build<TCategoryDraft>();
    expect(furniturePreset).toMatchObject(
      JSON.parse(`{
  "key": "furniture",
  "name": {
    "en-GB": "Furniture",
    "de-DE": "Möbel",
    "en-US": "Furniture"
  },
  "orderHint": "0.2",
  "slug": {
    "en-GB": "furniture",
    "de-DE": "furniture",
    "en-US": "furniture"
  }
}`)
    );
  });
});
