import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import storageAndTables from './storage-and-tables';

describe(`with storageTables preset`, () => {
  it('should create a storageTables category type draft', () => {
    const storageTablesPreset = storageAndTables().build<TCategoryDraft>();
    expect(storageTablesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "storage-and-tables",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kommoden",
          "en": undefined,
          "en-GB": "Storage and Tables",
          "en-US": "Storage and Tables",
          "fr": undefined,
        },
        "orderHint": ".1",
        "parent": {
          "key": "bedroom-furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "kommoden",
          "en": undefined,
          "en-GB": "storage-and-tables",
          "en-US": "storage-and-tables",
          "fr": undefined,
        },
      }
    `);
  });
  it('should create a storageTables category type draft when built for Graphql', () => {
    const storageTablesPresetGraphql =
      storageAndTables().buildGraphql<TCategoryDraftGraphql>();
    expect(storageTablesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "storage-and-tables",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Storage and Tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Storage and Tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Kommoden",
          },
        ],
        "orderHint": ".1",
        "parent": {
          "__typename": "Reference",
          "key": "bedroom-furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "storage-and-tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "storage-and-tables",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "kommoden",
          },
        ],
      }
    `);
  });
});
