import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherKids from './other-kids';

describe(`with otherKids preset`, () => {
  it('should provide an otherKids preset', () => {
    const otherKidsCategoryDraft = otherKids().build<TCategoryDraft>();

    expect(otherKidsCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "other-kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Other",
          "fr": undefined,
        },
        "orderHint": "0.25",
        "parent": {
          "key": "kids",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "other_kids",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide an otherKids preset when built for graphql', () => {
    const otherKidsCategoryDraftGraphql =
      otherKids().buildGraphql<TCategoryDraftGraphql>();

    expect(otherKidsCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "other-kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Other",
          },
        ],
        "orderHint": "0.25",
        "parent": {
          "key": "kids",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-US",
            "value": "other_kids",
          },
        ],
      }
    `);
  });
});
