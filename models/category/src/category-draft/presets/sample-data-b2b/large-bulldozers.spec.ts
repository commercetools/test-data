import type { TCategoryDraft } from '../../../types';
import largeBulldozers from './large-bulldozers';

describe(`with largeBulldozers preset`, () => {
  it(`should return a largeBulldozers preset`, () => {
    const largeBulldozersPreset = largeBulldozers().build<TCategoryDraft>();
    expect(largeBulldozersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Großraumbagger",
          "en": undefined,
          "en-AU": "Bulldozers",
          "en-GB": "Bulldozers",
          "en-NZ": "Bulldozers",
          "en-US": "Bulldozers",
          "es-ES": "Bulldozers",
          "fr": undefined,
          "fr-FR": "Bulldozers",
          "it-IT": "Bulldozer",
          "nl-NL": "Bulldozers",
          "pt-PT": "Bulldozers",
        },
        "orderHint": "0.000017083829373511975137352",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "grossraumbagger_bulldozer",
          "en": undefined,
          "en-AU": "large_bulldozers",
          "en-GB": "large_bulldozers",
          "en-NZ": "large_bulldozers",
          "en-US": "large_bulldozers",
          "es-ES": "bulldozers_grandes",
          "fr": undefined,
          "fr-FR": "bulldozers_grande_taille",
          "it-IT": "large_bulldozers",
          "nl-NL": "large_bulldozers",
          "pt-PT": "large_bulldozers",
        },
      }
    `);
  });

  it(`should return a largeBulldozers preset when built for graphql`, () => {
    const largeBulldozersPresetGraphql =
      largeBulldozers().buildGraphql<TCategoryDraft>();
    expect(largeBulldozersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Großraumbagger",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer",
          },
          {
            "locale": "nl-NL",
            "value": "Bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozers",
          },
          {
            "locale": "en-AU",
            "value": "Bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "Bulldozers",
          },
          {
            "locale": "en-GB",
            "value": "Bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "Bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "Bulldozers",
          },
          {
            "locale": "en-US",
            "value": "Bulldozers",
          },
        ],
        "orderHint": "0.000017083829373511975137352",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "grossraumbagger_bulldozer",
          },
          {
            "locale": "it-IT",
            "value": "large_bulldozers",
          },
          {
            "locale": "nl-NL",
            "value": "large_bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "bulldozers_grande_taille",
          },
          {
            "locale": "en-AU",
            "value": "large_bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "bulldozers_grandes",
          },
          {
            "locale": "en-GB",
            "value": "large_bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "large_bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "large_bulldozers",
          },
          {
            "locale": "en-US",
            "value": "large_bulldozers",
          },
        ],
      }
    `);
  });
});
