import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import roomDecor from './room-decor';

describe(`with roomDecor preset`, () => {
  it('should create a roomDecor category type draft', () => {
    const roomDecorPreset = roomDecor().build<TCategoryDraft>();
    expect(roomDecorPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "room-decor",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Zimmerdekoration",
          "en": undefined,
          "en-GB": "Room Decor",
          "en-US": "Room Decor",
          "fr": undefined,
        },
        "orderHint": ".8",
        "parent": {
          "key": "home-decor",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "zimmerdekoration",
          "en": undefined,
          "en-GB": "room-decor",
          "en-US": "room-decor",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a roomDecor category type draft when built for Graphql', () => {
    const roomDecorPresetGraphql =
      roomDecor().buildGraphql<TCategoryDraftGraphql>();
    expect(roomDecorPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "room-decor",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Room Decor",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Room Decor",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Zimmerdekoration",
          },
        ],
        "orderHint": ".8",
        "parent": {
          "key": "home-decor",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "room-decor",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "room-decor",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "zimmerdekoration",
          },
        ],
      }
    `);
  });
});
