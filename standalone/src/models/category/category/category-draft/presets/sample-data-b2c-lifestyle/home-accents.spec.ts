import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import homeAccents from './home-accents';

describe(`with homeAccents preset`, () => {
  it('should create a homeAccents category type draft', () => {
    const homeAccentsPreset = homeAccents().build<TCategoryDraft>();
    expect(homeAccentsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "home-accents",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Accessoires",
          "en": undefined,
          "en-GB": "Home Accents",
          "en-US": "Home Accents",
          "fr": undefined,
        },
        "orderHint": ".5",
        "parent": {
          "key": "room-decor",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "home-akzente",
          "en": undefined,
          "en-GB": "home-accents",
          "en-US": "home-accents",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a homeAccents category type draft when built for Graphql', () => {
    const homeAccentsPresetGraphql =
      homeAccents().buildGraphql<TCategoryDraftGraphql>();
    expect(homeAccentsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "home-accents",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Home Accents",
          },
          {
            "locale": "en-US",
            "value": "Home Accents",
          },
          {
            "locale": "de-DE",
            "value": "Accessoires",
          },
        ],
        "orderHint": ".5",
        "parent": {
          "key": "room-decor",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "home-accents",
          },
          {
            "locale": "en-US",
            "value": "home-accents",
          },
          {
            "locale": "de-DE",
            "value": "home-akzente",
          },
        ],
      }
    `);
  });
});
