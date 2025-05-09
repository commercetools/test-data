import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bowls from './bowls';

describe(`with bowls preset`, () => {
  it('should create a bowls category type draft', () => {
    const bowlsPreset = bowls().build<TCategoryDraft>();
    expect(bowlsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bowls",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Schalen",
          "en": undefined,
          "en-GB": "Bowls",
          "en-US": "Bowls",
          "fr": undefined,
        },
        "orderHint": ".56",
        "parent": {
          "key": "dinnerware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bowls",
          "en": undefined,
          "en-GB": "bowls",
          "en-US": "bowls",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a bowls category type draft when built for Graphql', () => {
    const bowlsPresetGraphql = bowls().buildGraphql<TCategoryDraftGraphql>();
    expect(bowlsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bowls",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Bowls",
          },
          {
            "locale": "en-US",
            "value": "Bowls",
          },
          {
            "locale": "de-DE",
            "value": "Schalen",
          },
        ],
        "orderHint": ".56",
        "parent": {
          "key": "dinnerware",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "bowls",
          },
          {
            "locale": "en-US",
            "value": "bowls",
          },
          {
            "locale": "de-DE",
            "value": "bowls",
          },
        ],
      }
    `);
  });
});
