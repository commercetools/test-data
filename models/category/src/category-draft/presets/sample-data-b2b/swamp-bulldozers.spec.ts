import type { TCategoryDraft } from '../../../types';
import swampBulldozers from './swamp-bulldozers';

describe(`with swampBulldozers preset`, () => {
  it(`should return a swampBulldozers preset`, () => {
    const swampBulldozersPreset = swampBulldozers().build<TCategoryDraft>();
    expect(swampBulldozersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "swamp-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sumpf-Bulldozer",
          "en": undefined,
          "en-AU": "Swamp Bulldozers",
          "en-GB": "Swamp Bulldozers",
          "en-NZ": "Swamp Bulldozers",
          "en-US": "Swamp Bulldozers",
          "es-ES": "Bulldozers de pantano",
          "fr": undefined,
          "fr-FR": "Bulldozers pour les zones marécageuses",
          "it-IT": "Bulldozer per Paludi",
          "nl-NL": "Moeras Bulldozers",
          "pt-PT": "Bulldozers para Pântano",
        },
        "orderHint": "0.00001708382944572560011266",
        "parent": {
          "key": "large-bulldozers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "sumpf_bulldozer",
          "en": undefined,
          "en-AU": "swamp_bulldozers",
          "en-GB": "swamp_bulldozers",
          "en-NZ": "swamp_bulldozers",
          "en-US": "swamp_bulldozers",
          "es-ES": "bulldozers_pantano",
          "fr": undefined,
          "fr-FR": "bulldozers_zones_marecageuses",
          "it-IT": "swamp_bulldozers",
          "nl-NL": "swamp_bulldozers",
          "pt-PT": "swamp_bulldozers",
        },
      }
    `);
  });

  it(`should return a swampBulldozers preset when built for graphql`, () => {
    const swampBulldozersPresetGraphql =
      swampBulldozers().buildGraphql<TCategoryDraft>();
    expect(swampBulldozersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "swamp-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Sumpf-Bulldozer",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer per Paludi",
          },
          {
            "locale": "nl-NL",
            "value": "Moeras Bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozers pour les zones marécageuses",
          },
          {
            "locale": "en-AU",
            "value": "Swamp Bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "Bulldozers de pantano",
          },
          {
            "locale": "en-GB",
            "value": "Swamp Bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "Swamp Bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "Bulldozers para Pântano",
          },
          {
            "locale": "en-US",
            "value": "Swamp Bulldozers",
          },
        ],
        "orderHint": "0.00001708382944572560011266",
        "parent": {
          "key": "large-bulldozers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "sumpf_bulldozer",
          },
          {
            "locale": "it-IT",
            "value": "swamp_bulldozers",
          },
          {
            "locale": "nl-NL",
            "value": "swamp_bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "bulldozers_zones_marecageuses",
          },
          {
            "locale": "en-AU",
            "value": "swamp_bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "bulldozers_pantano",
          },
          {
            "locale": "en-GB",
            "value": "swamp_bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "swamp_bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "swamp_bulldozers",
          },
          {
            "locale": "en-US",
            "value": "swamp_bulldozers",
          },
        ],
      }
    `);
  });
});
