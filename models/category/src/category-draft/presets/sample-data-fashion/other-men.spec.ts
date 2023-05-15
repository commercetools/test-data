import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherMen from './other-men';

describe(`with otherMen preset`, () => {
  it('should provide an otherMen preset', () => {
    const otherMenCategoryDraft = otherMen().build<TCategoryDraft>();

    expect(otherMenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "other-men",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Other",
          "fr": undefined,
        },
        "orderHint": "0.3",
        "parent": {
          "key": "men",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "other_men",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide an otherMen preset when built for graphql', () => {
    const otherMenCategoryDraftGraphql =
      otherMen().buildGraphql<TCategoryDraftGraphql>();

    expect(otherMenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "other-men",
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
        "orderHint": "0.3",
        "parent": {
          "__typename": "Reference",
          "key": "men",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "other_men",
          },
        ],
      }
    `);
  });
});
