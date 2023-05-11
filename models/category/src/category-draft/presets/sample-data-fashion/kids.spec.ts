import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import kids from './kids';

describe(`with kids preset`, () => {
  it('should provide a kids preset', () => {
    const kidsCategoryDraft = kids().build<TCategoryDraft>();

    expect(kidsCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Items for kids",
          "fr": undefined,
        },
        "externalId": undefined,
        "key": "kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Kids",
          "fr": undefined,
        },
        "orderHint": "0.25",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "kids",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a kids preset when built for graphql', () => {
    const kidsCategoryDraftGraphql =
      kids().buildGraphql<TCategoryDraftGraphql>();

    expect(kidsCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Items for kids",
          },
        ],
        "descriptionAllLocales": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Items for kids",
          },
        ],
        "externalId": undefined,
        "key": "kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Kids",
          },
        ],
        "nameAllLocales": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Kids",
          },
        ],
        "orderHint": "0.25",
        "parent": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "kids",
          },
        ],
      }
    `);
  });
});
