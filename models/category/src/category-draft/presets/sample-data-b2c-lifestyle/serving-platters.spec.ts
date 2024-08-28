import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import servingPlatters from './serving-platters';

describe(`with servingPlatters preset`, () => {
  it('should create a servingPlatters category type draft', () => {
    const servingPlattersPreset = servingPlatters().build<TCategoryDraft>();
    expect(servingPlattersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "serving-platters",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Servierplatten",
          "en": undefined,
          "en-GB": "Serving Platters",
          "en-US": "Serving Platters",
          "fr": undefined,
        },
        "orderHint": ".0004",
        "parent": {
          "key": "serveware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "serving-platters",
          "en": undefined,
          "en-GB": "serving-platters",
          "en-US": "serving-platters",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a servingPlatters category type draft when built for Graphql', () => {
    const servingPlattersPresetGraphql =
      servingPlatters().buildGraphql<TCategoryDraftGraphql>();
    expect(servingPlattersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "serving-platters",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Serving Platters",
          },
          {
            "locale": "en-US",
            "value": "Serving Platters",
          },
          {
            "locale": "de-DE",
            "value": "Servierplatten",
          },
        ],
        "orderHint": ".0004",
        "parent": {
          "key": "serveware",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "serving-platters",
          },
          {
            "locale": "en-US",
            "value": "serving-platters",
          },
          {
            "locale": "de-DE",
            "value": "serving-platters",
          },
        ],
      }
    `);
  });
});
