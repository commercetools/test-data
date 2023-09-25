import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bedroomFurniture from './bedroom-furniture';
describe(`with bedroomFurniture preset`, () => {
  it('should create a bedroomFurniture category type draft', () => {
    const bedroomFurniturePreset = bedroomFurniture().build<TCategoryDraft>();
    expect(bedroomFurniturePreset).toMatchObject(
      JSON.parse(`{
  "key": "bedroom-furniture",
  "name": {
    "en-GB": "Bedroom Furniture",
    "de-DE": "Schlafzimmer"
  },
  "orderHint": "9",
  "parent": {
    "key": "furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bedroom-furniture",
    "de-DE": "bedroom-furniture"
  }
}`)
    );
  });
});
