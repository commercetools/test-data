import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import roomDecor from './room-decor';
describe(`with roomDecor preset`, () => {
  it('should create a roomDecor category type draft', () => {
    const roomDecorPreset = roomDecor().build<TCategoryDraft>();
    expect(roomDecorPreset).toMatchObject(
      JSON.parse(`{
  "key": "room-decor",
  "name": {
    "en-GB": "Room Decor",
    "de-DE": "Zimmerdekoration",
    "en-US": "Room Decor"
  },
  "orderHint": ".8",
  "parent": {
    "key": "home-decor",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "room-decor",
    "de-DE": "zimmerdekoration",
    "en-US": "room-decor"
  }
}`)
    );
  });
});
