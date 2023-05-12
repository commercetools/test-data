import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsKids from './bottoms-kids';

describe(`with bottomsKids preset`, () => {
  it('should provide a bottomsKids preset', () => {
    const bottomsKidsCategoryDraft = bottomsKids().build<TCategoryDraft>();

    expect(bottomsKidsCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Bottoms",
          "fr": undefined,
        },
        "externalId": undefined,
        "key": "bottoms_kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Bottoms",
          "fr": undefined,
        },
        "orderHint": "0.3",
        "parent": {
          "key": "clothing-kids",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "bottoms_kids",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a bottomsKids preset when built for graphql', () => {
    const bottomsKidsCategoryDraftGraphql =
      bottomsKids().buildGraphql<TCategoryDraftGraphql>();

    expect(bottomsKidsCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bottoms",
          },
        ],
        "descriptionAllLocales": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bottoms",
          },
        ],
        "externalId": undefined,
        "key": "bottoms_kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bottoms",
          },
        ],
        "nameAllLocales": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bottoms",
          },
        ],
        "orderHint": "0.3",
        "parent": {
          "__typename": "Reference",
          "key": "clothing-kids",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "bottoms_kids",
          },
        ],
      }
    `);
  });
});
