import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherWomen from './other-women';

describe(`with otherWomen preset`, () => {
  it('should provide an otherWomen preset', () => {
    const otherWomenCategoryDraft = otherWomen().build<TCategoryDraft>();

    expect(otherWomenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": [],
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "other-women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Other",
          "fr": undefined,
        },
        "orderHint": "0.5",
        "parent": {
          "key": "women",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "other_women",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide an otherWomen preset when built for graphql', () => {
    const otherWomenCategoryDraftGraphql =
      otherWomen().buildGraphql<TCategoryDraftGraphql>();

    expect(otherWomenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": [],
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "other-women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Other",
          },
        ],
        "orderHint": "0.5",
        "parent": {
          "__typename": "Reference",
          "key": "women",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "other_women",
          },
        ],
      }
    `);
  });
});
