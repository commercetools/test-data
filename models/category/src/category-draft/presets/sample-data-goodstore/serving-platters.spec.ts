import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
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
          "de-DE": "servierplatten",
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Serving Platters",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Serving Platters",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Servierplatten",
          },
        ],
        "orderHint": ".0004",
        "parent": {
          "__typename": "Reference",
          "key": "serveware",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "serving-platters",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "serving-platters",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "servierplatten",
          },
        ],
      }
    `);
  });
});
