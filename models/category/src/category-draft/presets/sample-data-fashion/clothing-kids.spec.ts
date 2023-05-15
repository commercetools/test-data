import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import clothingKids from './clothing-kids';

describe(`with clothingKids preset`, () => {
  it('should provide a clothingKids preset', () => {
    const clothingKidsCategoryDraft = clothingKids().build<TCategoryDraft>();

    expect(clothingKidsCategoryDraft).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "clothing-kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Clothing",
          "fr": undefined,
        },
        "orderHint": "0.8",
        "parent": {
          "key": "kids",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "clothing_kids",
          "fr": undefined,
        },
      }
    `);
  });

  it('should provide a clothingKids preset when built for graphql', () => {
    const clothingKidsCategoryDraftGraphql =
      clothingKids().buildGraphql<TCategoryDraftGraphql>();

    expect(clothingKidsCategoryDraftGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "CategoryDraft",
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "clothing-kids",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Clothing",
          },
        ],
        "orderHint": "0.8",
        "parent": {
          "__typename": "Reference",
          "key": "kids",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "clothing_kids",
          },
        ],
      }
    `);
  });
});
