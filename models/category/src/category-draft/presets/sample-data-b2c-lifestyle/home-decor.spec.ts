import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import homeDecor from './home-decor';

describe(`with homeDecor preset`, () => {
  it('should create a homeDecor category type draft', () => {
    const homeDecorPreset = homeDecor().build<TCategoryDraft>();
    expect(homeDecorPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "home-decor",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Dekoration",
          "en": undefined,
          "en-GB": "Home Decor",
          "en-US": "Home Decor",
          "fr": undefined,
        },
        "orderHint": "0.1",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "home-decor",
          "en": undefined,
          "en-GB": "home-decor",
          "en-US": "home-decor",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a homeDecor category type draft when built for Graphql', () => {
    const homeDecorPresetGraphql =
      homeDecor().buildGraphql<TCategoryDraftGraphql>();
    expect(homeDecorPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "home-decor",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Home Decor",
          },
          {
            "locale": "en-US",
            "value": "Home Decor",
          },
          {
            "locale": "de-DE",
            "value": "Dekoration",
          },
        ],
        "orderHint": "0.1",
        "parent": undefined,
        "slug": [
          {
            "locale": "en-GB",
            "value": "home-decor",
          },
          {
            "locale": "en-US",
            "value": "home-decor",
          },
          {
            "locale": "de-DE",
            "value": "home-decor",
          },
        ],
      }
    `);
  });
});
