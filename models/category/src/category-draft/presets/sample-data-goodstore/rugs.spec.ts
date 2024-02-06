import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import rugs from './rugs';

describe(`with rugs preset`, () => {
  it('should create a rugs category type draft', () => {
    const rugsPreset = rugs().build<TCategoryDraft>();
    expect(rugsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "rugs",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Teppiche",
          "en": undefined,
          "en-GB": "Rugs",
          "en-US": "Rugs",
          "fr": undefined,
        },
        "orderHint": ".4",
        "parent": {
          "key": "room-decor",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "teppiche",
          "en": undefined,
          "en-GB": "rugs",
          "en-US": "rugs",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a rugs category type draft when built for Graphql', () => {
    const rugsPresetGraphql = rugs().buildGraphql<TCategoryDraftGraphql>();
    expect(rugsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "rugs",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Rugs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Rugs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Teppiche",
          },
        ],
        "orderHint": ".4",
        "parent": {
          "key": "room-decor",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "rugs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "rugs",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "teppiche",
          },
        ],
      }
    `);
  });
});
