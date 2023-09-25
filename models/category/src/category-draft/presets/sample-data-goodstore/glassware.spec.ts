import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
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
          "de-DE": "glaser",
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Gläser",
          },
        ],
        "orderHint": ".23",
        "parent": {
          "__typename": "Reference",
          "key": "bar-and-glassware",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "glaser",
          },
        ],
      }
    `);
  });
});
