import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsWomen from './tops-women';

describe(`with topsWomen preset`, () => {
  it('should provide a topsWomen preset', () => {
    const topsWomenCategoryDraft = topsWomen().build<TCategoryDraft>();

    expect(topsWomenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tops-women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Tops",
          "fr": undefined,
        },
        "orderHint": "0.3",
        "parent": {
          "key": "women",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "tops_women",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a topsWomen preset when built for graphql', () => {
    const topsWomenCategoryDraftGraphql =
      topsWomen().buildGraphql<TCategoryDraftGraphql>();

    expect(topsWomenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tops-women",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Tops",
          },
        ],
        "orderHint": "0.3",
        "parent": {
          "key": "women",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-US",
            "value": "tops_women",
          },
        ],
      }
    `);
  });
});
