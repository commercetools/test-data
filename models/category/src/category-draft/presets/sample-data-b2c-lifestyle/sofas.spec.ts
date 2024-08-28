import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
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
            "locale": "en-GB",
            "value": "Sofas",
          },
          {
            "locale": "en-US",
            "value": "Sofas",
          },
          {
            "locale": "de-DE",
            "value": "Sofas",
          },
        ],
        "orderHint": ".3",
        "parent": {
          "key": "living-room-furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "sofas",
          },
          {
            "locale": "en-US",
            "value": "sofas",
          },
          {
            "locale": "de-DE",
            "value": "sofas",
          },
        ],
      }
    `);
  });
});
