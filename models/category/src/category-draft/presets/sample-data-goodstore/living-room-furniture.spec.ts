import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import livingRoomFurniture from './living-room-furniture';

describe(`with livingRoomFurniture preset`, () => {
  it('should create a livingRoomFurniture category type draft', () => {
    const livingRoomFurniturePreset =
      livingRoomFurniture().build<TCategoryDraft>();
    expect(livingRoomFurniturePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "living-room-furniture",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Wohnzimmer",
          "en": undefined,
          "en-GB": "Living Room Furniture",
          "en-US": "Living Room Furniture",
          "fr": undefined,
        },
        "orderHint": ".9",
        "parent": {
          "key": "furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "living-room-furniture",
          "en": undefined,
          "en-GB": "living-room-furniture",
          "en-US": "living-room-furniture",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a livingRoomFurniture category type draft when built for Graphql', () => {
    const livingRoomFurniturePresetGraphql =
      livingRoomFurniture().buildGraphql<TCategoryDraftGraphql>();
    expect(livingRoomFurniturePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "living-room-furniture",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Living Room Furniture",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Living Room Furniture",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Wohnzimmer",
          },
        ],
        "orderHint": ".9",
        "parent": {
          "__typename": "Reference",
          "key": "furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "living-room-furniture",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "living-room-furniture",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "living-room-furniture",
          },
        ],
      }
    `);
  });
});
