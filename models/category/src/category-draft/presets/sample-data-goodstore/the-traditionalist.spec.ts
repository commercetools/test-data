import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theTraditionalist from './the-traditionalist';

describe(`with theTraditionalist preset`, () => {
  it('should create a theTraditionalist category type draft', () => {
    const theTraditionalistPreset = theTraditionalist().build<TCategoryDraft>();
    expect(theTraditionalistPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "the-traditionalist",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "The Traditionalist",
          "en": undefined,
          "en-GB": "The Traditionalist",
          "en-US": "The Traditionalist",
          "fr": undefined,
        },
        "orderHint": "0.0033",
        "parent": {
          "key": "collections",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "the-traditionalist",
          "en": undefined,
          "en-GB": "the-traditionalist",
          "en-US": "the-traditionalist",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a theTraditionalist category type draft when built for Graphql', () => {
    const theTraditionalistPresetGraphql =
      theTraditionalist().buildGraphql<TCategoryDraftGraphql>();
    expect(theTraditionalistPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "the-traditionalist",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "The Traditionalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "The Traditionalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "The Traditionalist",
          },
        ],
        "orderHint": "0.0033",
        "parent": {
          "key": "collections",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "the-traditionalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "the-traditionalist",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "the-traditionalist",
          },
        ],
      }
    `);
  });
});
