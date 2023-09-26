import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import armchairs from './armchairs';

describe(`with armchairs preset`, () => {
  it('should create a armchairs category type draft', () => {
    const armchairsPreset = armchairs().build<TCategoryDraft>();
    expect(armchairsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "armchairs",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Stühle",
          "en": undefined,
          "en-GB": "Armchairs",
          "en-US": "Chairs",
          "fr": undefined,
        },
        "orderHint": ".3",
        "parent": {
          "key": "living-room-furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "chairs",
          "en": undefined,
          "en-GB": "armchairs",
          "en-US": "armchairs",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a armchairs category type draft when built for Graphql', () => {
    const armchairsPresetGraphql =
      armchairs().buildGraphql<TCategoryDraftGraphql>();
    expect(armchairsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "armchairs",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Armchairs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Chairs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Stühle",
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
            "value": "armchairs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "armchairs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "chairs",
          },
        ],
      }
    `);
  });
});
