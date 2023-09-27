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

  it('should create a roomDecor category type draft when built for Graphql', () => {
    const roomDecorPresetGraphql =
      roomDecor().buildGraphql<TCategoryDraftGraphql>();
    expect(roomDecorPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "room-decor",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Room Decor"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Zimmerdekoration"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Room Decor"
    }
  ],
  "orderHint": ".8",
  "parent": {
    "__typename": "Reference",
    "key": "home-decor",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "room-decor"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "zimmerdekoration"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "room-decor"
    }
  ]
}`)
    );
  });
});
