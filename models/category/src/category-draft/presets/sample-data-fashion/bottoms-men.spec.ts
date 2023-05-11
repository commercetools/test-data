import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsMen from './bottoms-men';

describe(`with bottomsMen preset`, () => {
  it('should provide a bottomsMen preset', () => {
    const bottomsMenCategoryDraft = bottomsMen().build<TCategoryDraft>();

    expect(bottomsMenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bottoms-men",
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
          "key": "men",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "bottoms_men",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a bottomsMen preset when built for graphql', () => {
    const bottomsMenCategoryDraftGraphql =
      bottomsMen().buildGraphql<TCategoryDraftGraphql>();

    expect(bottomsMenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "descriptionAllLocales": null,
        "externalId": undefined,
        "key": "bottoms-men",
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
        "orderHint": "0.4",
        "parent": {
          "__typename": "Reference",
          "key": "men",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "bottoms_men",
          },
        ],
      }
    `);
  });
});
