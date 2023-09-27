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

  it('should create a livingRoomFurniture category type draft when built for Graphql', () => {
    const livingRoomFurniturePresetGraphql =
      livingRoomFurniture().buildGraphql<TCategoryDraftGraphql>();
    expect(livingRoomFurniturePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "living-room-furniture",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Living Room Furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Wohnzimmer"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Living Room Furniture"
    }
  ],
  "orderHint": ".9",
  "parent": {
    "__typename": "Reference",
    "key": "furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "living-room-furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "living-room-furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "living-room-furniture"
    }
  ]
}`)
    );
  });
});
