import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import plates from './plates';

describe(`with plates preset`, () => {
  it('should create a plates category type draft', () => {
    const platesPreset = plates().build<TCategoryDraft>();
    expect(platesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "plates",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Platten",
          "en": undefined,
          "en-GB": "Plates",
          "en-US": "Plates",
          "fr": undefined,
        },
        "orderHint": ".82",
        "parent": {
          "key": "dinnerware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "plates",
          "en": undefined,
          "en-GB": "plates",
          "en-US": "plates",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a plates category type draft when built for Graphql', () => {
    const platesPresetGraphql = plates().buildGraphql<TCategoryDraftGraphql>();
    expect(platesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "plates",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Plates",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Plates",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Platten",
          },
        ],
        "orderHint": ".82",
        "parent": {
          "__typename": "Reference",
          "key": "dinnerware",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "plates",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "plates",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "plates",
          },
        ],
      }
    `);
  });
});
