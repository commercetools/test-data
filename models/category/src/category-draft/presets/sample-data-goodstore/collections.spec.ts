import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import collections from './collections';

describe(`with collections preset`, () => {
  it('should create a collections category type draft', () => {
    const collectionsPreset = collections().build<TCategoryDraft>();
    expect(collectionsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "collections",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sonderkollektionen",
          "en": undefined,
          "en-GB": "Collections",
          "en-US": "Collections",
          "fr": undefined,
        },
        "orderHint": ".7",
        "parent": {
          "key": "furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "collections",
          "en": undefined,
          "en-GB": "furniture-collections",
          "en-US": "furniture-collections",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a collections category type draft when built for Graphql', () => {
    const collectionsPresetGraphql =
      collections().buildGraphql<TCategoryDraftGraphql>();
    expect(collectionsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "collections",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Collections",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Collections",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Sonderkollektionen",
          },
        ],
        "orderHint": ".7",
        "parent": {
          "__typename": "Reference",
          "key": "furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "furniture-collections",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "furniture-collections",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "collections",
          },
        ],
      }
    `);
  });
});
