import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import men from './men';

describe(`with men preset`, () => {
  it('should provide a men preset', () => {
    const menCategoryDraft = men().build<TCategoryDraft>();

    expect(menCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Items for men",
          "fr": undefined,
        },
        "externalId": undefined,
        "key": "men",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Men",
          "fr": undefined,
        },
        "orderHint": "0.75",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "men",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a men preset when built for graphql', () => {
    const menCategoryDraftGraphql = men().buildGraphql<TCategoryDraftGraphql>();

    expect(menCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Items for men",
          },
        ],
        "externalId": undefined,
        "key": "men",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Men",
          },
        ],
        "orderHint": "0.75",
        "parent": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "men",
          },
        ],
      }
    `);
  });
});
