import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import livingRoomFurniture from './living-room-furniture';
describe(`with livingRoomFurniture preset`, () => {
  it('should create a livingRoomFurniture category type draft', () => {
    const livingRoomFurniturePreset =
      livingRoomFurniture().build<TCategoryDraft>();
    expect(livingRoomFurniturePreset).toMatchObject(
      JSON.parse(`{
  "key": "living-room-furniture",
  "name": {
    "en-GB": "Living Room Furniture",
    "de-DE": "Wohnzimmer",
    "en-US": "Living Room Furniture"
  },
  "orderHint": ".9",
  "parent": {
    "key": "furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "living-room-furniture",
    "de-DE": "living-room-furniture",
    "en-US": "living-room-furniture"
  }
}`)
    );
  });
});
