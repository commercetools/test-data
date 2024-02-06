import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsMen from './tops-men';

describe(`with topsMen preset`, () => {
  it('should provide a topsMen preset', () => {
    const topsMenCategoryDraft = topsMen().build<TCategoryDraft>();

    expect(topsMenCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tops-men",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Tops",
          "fr": undefined,
        },
        "orderHint": "0.6",
        "parent": {
          "key": "men",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "tops_men",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a topsMen preset when built for graphql', () => {
    const topsMenCategoryDraftGraphql =
      topsMen().buildGraphql<TCategoryDraftGraphql>();

    expect(topsMenCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tops-men",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Tops",
          },
        ],
        "orderHint": "0.6",
        "parent": {
          "key": "men",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "tops_men",
          },
        ],
      }
    `);
  });
});
