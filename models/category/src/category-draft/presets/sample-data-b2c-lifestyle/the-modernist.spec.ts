import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theModernist from './the-modernist';

describe(`with theModernist preset`, () => {
  it('should create a theModernist category type draft', () => {
    const theModernistPreset = theModernist().build<TCategoryDraft>();
    expect(theModernistPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "the-modernist",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "The Modernist",
          "en": undefined,
          "en-GB": "The Modernist",
          "en-US": "The Modernist",
          "fr": undefined,
        },
        "orderHint": ".0035",
        "parent": {
          "key": "collections",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "the-modernist",
          "en": undefined,
          "en-GB": "the-modernist",
          "en-US": "the-modernist",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a theModernist category type draft when built for Graphql', () => {
    const theModernistPresetGraphql =
      theModernist().buildGraphql<TCategoryDraftGraphql>();
    expect(theModernistPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "the-modernist",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "The Modernist",
          },
          {
            "locale": "en-US",
            "value": "The Modernist",
          },
          {
            "locale": "de-DE",
            "value": "The Modernist",
          },
        ],
        "orderHint": ".0035",
        "parent": {
          "key": "collections",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "the-modernist",
          },
          {
            "locale": "en-US",
            "value": "the-modernist",
          },
          {
            "locale": "de-DE",
            "value": "the-modernist",
          },
        ],
      }
    `);
  });
});
