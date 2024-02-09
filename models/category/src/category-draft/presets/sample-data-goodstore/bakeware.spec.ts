import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bakeware from './bakeware';

describe(`with bakeware preset`, () => {
  it('should create a bakeware category type draft', () => {
    const bakewarePreset = bakeware().build<TCategoryDraft>();
    expect(bakewarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bakeware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Backutensilien",
          "en": undefined,
          "en-GB": "Bakeware",
          "en-US": "Bakeware",
          "fr": undefined,
        },
        "orderHint": ".42",
        "parent": {
          "key": "dinnerware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bakeware",
          "en": undefined,
          "en-GB": "bakeware",
          "en-US": "bakeware",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a bakeware category type draft when built for Graphql', () => {
    const bakewarePreset = bakeware().buildGraphql<TCategoryDraftGraphql>();
    expect(bakewarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bakeware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Bakeware",
          },
          {
            "locale": "en-US",
            "value": "Bakeware",
          },
          {
            "locale": "de-DE",
            "value": "Backutensilien",
          },
        ],
        "orderHint": ".42",
        "parent": {
          "key": "dinnerware",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "bakeware",
          },
          {
            "locale": "en-US",
            "value": "bakeware",
          },
          {
            "locale": "de-DE",
            "value": "bakeware",
          },
        ],
      }
    `);
  });
});
