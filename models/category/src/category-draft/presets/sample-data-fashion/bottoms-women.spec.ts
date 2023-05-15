import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsWomen from './bottoms-women';

describe(`with bottomsWomen preset`, () => {
  it('should provide a bottomsWomen preset', () => {
    const bottomsWomenCategoryDraft = bottomsWomen().build<TCategoryDraft>();

    expect(bottomsWomenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bottoms-women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Bottoms",
          "fr": undefined,
        },
        "orderHint": "0.4",
        "parent": {
          "key": "women",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "bottoms_women",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a bottomsWomen preset when built for graphql', () => {
    const bottomsWomenCategoryDraftGraphql =
      bottomsWomen().buildGraphql<TCategoryDraftGraphql>();

    expect(bottomsWomenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bottoms-women",
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
        "orderHint": "0.4",
        "parent": {
          "__typename": "Reference",
          "key": "women",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "bottoms_women",
          },
        ],
      }
    `);
  });
});
