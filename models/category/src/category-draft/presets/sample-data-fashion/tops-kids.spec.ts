import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsKids from './tops-kids';

describe(`with topsKids preset`, () => {
  it('should provide a topsKids preset', () => {
    const topsKidsCategoryDraft = topsKids().build<TCategoryDraft>();

    expect(topsKidsCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Tops",
          "fr": undefined,
        },
        "externalId": undefined,
        "key": "tops-kids",
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
          "key": "clothing-kids",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "tops_kids",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a topsKids preset when built for graphql', () => {
    const topsKidsCategoryDraftGraphql =
      topsKids().buildGraphql<TCategoryDraftGraphql>();

    expect(topsKidsCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Tops",
          },
        ],
        "externalId": undefined,
        "key": "tops-kids",
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
        "orderHint": "0.3",
        "parent": {
          "key": "clothing-kids",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "tops_kids",
          },
        ],
      }
    `);
  });
});
