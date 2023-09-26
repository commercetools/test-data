import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bedding from './bedding';

describe(`with bedding preset`, () => {
  it('should create a bedding category type draft', () => {
    const beddingPreset = bedding().build<TCategoryDraft>();
    expect(beddingPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bedding",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bettwäsche",
          "en": undefined,
          "en-GB": "Bedding",
          "en-US": "Bedding",
          "fr": undefined,
        },
        "orderHint": ".5",
        "parent": {
          "key": "home-decor",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bettwsche",
          "en": undefined,
          "en-GB": "bedding",
          "en-US": "bedding",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a bedding category type draft when built for Graphql', () => {
    const beddingPresetGraphql =
      bedding().buildGraphql<TCategoryDraftGraphql>();
    expect(beddingPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bedding",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Bedding",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bedding",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Bettwäsche",
          },
        ],
        "orderHint": ".5",
        "parent": {
          "__typename": "Reference",
          "key": "home-decor",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "bedding",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "bedding",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "bettwsche",
          },
        ],
      }
    `);
  });
});
