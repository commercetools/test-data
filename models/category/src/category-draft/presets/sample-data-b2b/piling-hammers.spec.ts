import type { TCategoryDraft } from '../../../types';
import pilingHammers from './piling-hammers';

describe(`with pilingHammers preset`, () => {
  it(`should return a pilingHammers preset`, () => {
    const pilingHammersPreset = pilingHammers().build<TCategoryDraft>();
    expect(pilingHammersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "piling-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rammhämmer",
          "en": undefined,
          "en-AU": "Piling Hammers",
          "en-GB": "Piling Hammers",
          "en-NZ": "Piling Hammers",
          "en-US": "Piling Hammers",
          "es-ES": "Martillos de pilotaje",
          "fr": undefined,
          "fr-FR": "Marteaux de battage",
          "it-IT": "Martelli per Pali",
          "nl-NL": "Heihamers",
          "pt-PT": "Martelos para Cravação",
        },
        "orderHint": "0.000017083829511001708720503",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "ramm_haemmer",
          "en": undefined,
          "en-AU": "piling_hammers",
          "en-GB": "piling_hammers",
          "en-NZ": "piling_hammers",
          "en-US": "piling_hammers",
          "es-ES": "martillos_pilotaje",
          "fr": undefined,
          "fr-FR": "marteaux_battage",
          "it-IT": "piling_hammers",
          "nl-NL": "piling_hammers",
          "pt-PT": "piling_hammers",
        },
      }
    `);
  });

  it(`should return a pilingHammers preset when built for graphql`, () => {
    const pilingHammersPresetGraphql =
      pilingHammers().buildGraphql<TCategoryDraft>();
    expect(pilingHammersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "piling-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Rammhämmer",
          },
          {
            "locale": "it-IT",
            "value": "Martelli per Pali",
          },
          {
            "locale": "nl-NL",
            "value": "Heihamers",
          },
          {
            "locale": "fr-FR",
            "value": "Marteaux de battage",
          },
          {
            "locale": "en-AU",
            "value": "Piling Hammers",
          },
          {
            "locale": "es-ES",
            "value": "Martillos de pilotaje",
          },
          {
            "locale": "en-GB",
            "value": "Piling Hammers",
          },
          {
            "locale": "en-NZ",
            "value": "Piling Hammers",
          },
          {
            "locale": "pt-PT",
            "value": "Martelos para Cravação",
          },
          {
            "locale": "en-US",
            "value": "Piling Hammers",
          },
        ],
        "orderHint": "0.000017083829511001708720503",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "ramm_haemmer",
          },
          {
            "locale": "it-IT",
            "value": "piling_hammers",
          },
          {
            "locale": "nl-NL",
            "value": "piling_hammers",
          },
          {
            "locale": "fr-FR",
            "value": "marteaux_battage",
          },
          {
            "locale": "en-AU",
            "value": "piling_hammers",
          },
          {
            "locale": "es-ES",
            "value": "martillos_pilotaje",
          },
          {
            "locale": "en-GB",
            "value": "piling_hammers",
          },
          {
            "locale": "en-NZ",
            "value": "piling_hammers",
          },
          {
            "locale": "pt-PT",
            "value": "piling_hammers",
          },
          {
            "locale": "en-US",
            "value": "piling_hammers",
          },
        ],
      }
    `);
  });
});
