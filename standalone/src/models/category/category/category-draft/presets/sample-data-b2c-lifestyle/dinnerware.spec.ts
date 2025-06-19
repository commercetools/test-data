import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import dinnerware from './dinnerware';

describe(`with dinnerware preset`, () => {
  it('should create a dinnerware category type draft', () => {
    const dinnerwarePreset = dinnerware().build<TCategoryDraft>();
    expect(dinnerwarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "dinnerware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Geschirr",
          "en": undefined,
          "en-GB": "Serving and Tableware",
          "en-US": "Dinnerware",
          "fr": undefined,
        },
        "orderHint": ".75",
        "parent": {
          "key": "kitchen",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "dinnerware",
          "en": undefined,
          "en-GB": "serving-and-tableware",
          "en-US": "serving-and-tableware",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a dinnerware category type draft when built for Graphql', () => {
    const dinnerwarePresetGraphql =
      dinnerware().buildGraphql<TCategoryDraftGraphql>();
    expect(dinnerwarePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "dinnerware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Serving and Tableware",
          },
          {
            "locale": "en-US",
            "value": "Dinnerware",
          },
          {
            "locale": "de-DE",
            "value": "Geschirr",
          },
        ],
        "orderHint": ".75",
        "parent": {
          "key": "kitchen",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "serving-and-tableware",
          },
          {
            "locale": "en-US",
            "value": "serving-and-tableware",
          },
          {
            "locale": "de-DE",
            "value": "dinnerware",
          },
        ],
      }
    `);
  });
});
