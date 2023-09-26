import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import beds from './beds';

describe(`with beds preset`, () => {
  it('should create a beds category type draft', () => {
    const bedsPreset = beds().build<TCategoryDraft>();
    expect(bedsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "beds",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Betten",
          "en": undefined,
          "en-GB": "Beds",
          "en-US": "Beds",
          "fr": undefined,
        },
        "orderHint": ".4",
        "parent": {
          "key": "bedroom-furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "beds",
          "en": undefined,
          "en-GB": "beds",
          "en-US": "beds",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a beds category type draft when built for Graphql', () => {
    const bedsPresetGraphql = beds().buildGraphql<TCategoryDraftGraphql>();
    expect(bedsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "beds",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Beds",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Beds",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Betten",
          },
        ],
        "orderHint": ".4",
        "parent": {
          "__typename": "Reference",
          "key": "bedroom-furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "beds",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "beds",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "beds",
          },
        ],
      }
    `);
  });
});
