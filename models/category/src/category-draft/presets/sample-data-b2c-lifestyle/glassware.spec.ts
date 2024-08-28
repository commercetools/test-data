import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import glassware from './glassware';

describe(`with glassware preset`, () => {
  it('should create a glassware category type draft', () => {
    const glasswarePreset = glassware().build<TCategoryDraft>();
    expect(glasswarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "glassware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Gläser",
          "en": undefined,
          "en-GB": "Glassware",
          "en-US": "Glassware",
          "fr": undefined,
        },
        "orderHint": ".23",
        "parent": {
          "key": "bar-and-glassware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "glassware",
          "en": undefined,
          "en-GB": "glassware",
          "en-US": "glassware",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a glassware category type draft when built for Graphql', () => {
    const glasswarePresetGraphql =
      glassware().buildGraphql<TCategoryDraftGraphql>();
    expect(glasswarePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "glassware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Glassware",
          },
          {
            "locale": "en-US",
            "value": "Glassware",
          },
          {
            "locale": "de-DE",
            "value": "Gläser",
          },
        ],
        "orderHint": ".23",
        "parent": {
          "key": "bar-and-glassware",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "glassware",
          },
          {
            "locale": "en-US",
            "value": "glassware",
          },
          {
            "locale": "de-DE",
            "value": "glassware",
          },
        ],
      }
    `);
  });
});
