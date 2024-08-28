import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import furniture from './furniture';

describe(`with furniture preset`, () => {
  it('should create a furniture category type draft', () => {
    const furniturePreset = furniture().build<TCategoryDraft>();
    expect(furniturePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "furniture",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Möbel",
          "en": undefined,
          "en-GB": "Furniture",
          "en-US": "Furniture",
          "fr": undefined,
        },
        "orderHint": "0.2",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "furniture",
          "en": undefined,
          "en-GB": "furniture",
          "en-US": "furniture",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a furniture category type draft when built for Graphql', () => {
    const furniturePresetGraphql =
      furniture().buildGraphql<TCategoryDraftGraphql>();
    expect(furniturePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "furniture",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Furniture",
          },
          {
            "locale": "en-US",
            "value": "Furniture",
          },
          {
            "locale": "de-DE",
            "value": "Möbel",
          },
        ],
        "orderHint": "0.2",
        "parent": undefined,
        "slug": [
          {
            "locale": "en-GB",
            "value": "furniture",
          },
          {
            "locale": "en-US",
            "value": "furniture",
          },
          {
            "locale": "de-DE",
            "value": "furniture",
          },
        ],
      }
    `);
  });
});
