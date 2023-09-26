import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theMinimalist from './the-minimalist';

describe(`with theMinimalist preset`, () => {
  it('should create a theMinimalist category type draft', () => {
    const theMinimalistPreset = theMinimalist().build<TCategoryDraft>();
    expect(theMinimalistPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "the-minimalist",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "The Minimalist",
          "en": undefined,
          "en-GB": "The Minimalist",
          "en-US": "The Minimalist",
          "fr": undefined,
        },
        "orderHint": ".003",
        "parent": {
          "key": "collections",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "the-minimalist",
          "en": undefined,
          "en-GB": "the-minimalist",
          "en-US": "the-minimalist",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a theMinimalist category type draft when built for Graphql', () => {
    const theMinimalistPresetGraphql =
      theMinimalist().buildGraphql<TCategoryDraftGraphql>();
    expect(theMinimalistPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "the-minimalist",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "The Minimalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "The Minimalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "The Minimalist",
          },
        ],
        "orderHint": ".003",
        "parent": {
          "__typename": "Reference",
          "key": "collections",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "the-minimalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "the-minimalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "the-minimalist",
          },
        ],
      }
    `);
  });
});
