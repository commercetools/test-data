import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import tables from './tables';

describe(`with tables preset`, () => {
  it('should create a tables category type draft', () => {
    const tablesPreset = tables().build<TCategoryDraft>();
    expect(tablesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tables",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Tische",
          "en": undefined,
          "en-GB": "Tables",
          "en-US": "Tables",
          "fr": undefined,
        },
        "orderHint": ".25",
        "parent": {
          "key": "living-room-furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "tische",
          "en": undefined,
          "en-GB": "living-room-tables",
          "en-US": "living-room-tables",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a tables category type draft when built for Graphql', () => {
    const tablesPresetGraphql = tables().buildGraphql<TCategoryDraftGraphql>();
    expect(tablesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tables",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Tische",
          },
        ],
        "orderHint": ".25",
        "parent": {
          "__typename": "Reference",
          "key": "living-room-furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "living-room-tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "living-room-tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "tische",
          },
        ],
      }
    `);
  });
});
