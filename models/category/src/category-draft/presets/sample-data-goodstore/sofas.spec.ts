import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import sofas from './sofas';

describe(`with sofas preset`, () => {
  it('should create a sofas category type draft', () => {
    const sofasPreset = sofas().build<TCategoryDraft>();
    expect(sofasPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "sofas",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sofas",
          "en": undefined,
          "en-GB": "Sofas",
          "en-US": "Sofas",
          "fr": undefined,
        },
        "orderHint": ".3",
        "parent": {
          "key": "living-room-furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "sofas",
          "en": undefined,
          "en-GB": "sofas",
          "en-US": "sofas",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a sofas category type draft when built for Graphql', () => {
    const sofasPresetGraphql = sofas().buildGraphql<TCategoryDraftGraphql>();
    expect(sofasPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "sofas",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Sofas",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sofas",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Sofas",
          },
        ],
        "orderHint": ".3",
        "parent": {
          "__typename": "Reference",
          "key": "living-room-furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "sofas",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sofas",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "sofas",
          },
        ],
      }
    `);
  });
});
