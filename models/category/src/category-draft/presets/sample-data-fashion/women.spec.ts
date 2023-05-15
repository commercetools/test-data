import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import women from './women';

describe(`with women preset`, () => {
  it('should provide a women preset', () => {
    const womenCategoryDraft = women().build<TCategoryDraft>();

    expect(womenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Items for women",
          "fr": undefined,
        },
        "externalId": undefined,
        "key": "women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Women",
          "fr": undefined,
        },
        "orderHint": "0.5",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "women",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a women preset when built for graphql', () => {
    const womenCategoryDraftGraphql =
      women().buildGraphql<TCategoryDraftGraphql>();

    expect(womenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Items for women",
          },
        ],
        "externalId": undefined,
        "key": "women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Women",
          },
        ],
        "orderHint": "0.5",
        "parent": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "women",
          },
        ],
      }
    `);
  });
});
