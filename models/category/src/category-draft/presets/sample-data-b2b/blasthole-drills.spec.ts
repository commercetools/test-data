import type { TCategoryDraft } from '../../../types';
import blastholeDrills from './blasthole-drills';

describe(`with blastholeDrills preset`, () => {
  it(`should return a blastholeDrills preset`, () => {
    const blastholeDrillsPreset = blastholeDrills().build<TCategoryDraft>();
    expect(blastholeDrillsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "blasthole-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sprenglochbohrer",
          "en": undefined,
          "en-AU": "Blasthole Drills",
          "en-GB": "Blasthole Drills",
          "en-NZ": "Blasthole Drills",
          "en-US": "Blasthole Drills",
          "es-ES": "Perforadoras de agujeros de voladura",
          "fr": undefined,
          "fr-FR": "Forages de trous de mine",
          "it-IT": "Trapani per Fori di Scoppio",
          "nl-NL": "Boorinstallaties voor Explosiegaten",
          "pt-PT": "Brocas para Furos de Explosão",
        },
        "orderHint": "0.000017083829494361565571101",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "sprengloch_bohrer",
          "en": undefined,
          "en-AU": "blasthole_drills",
          "en-GB": "blasthole_drills",
          "en-NZ": "blasthole_drills",
          "en-US": "blasthole_drills",
          "es-ES": "perforadoras_agujeros_voladura",
          "fr": undefined,
          "fr-FR": "forages_trous_de_mine",
          "it-IT": "blasthole_drills",
          "nl-NL": "blasthole_drills",
          "pt-PT": "blasthole_drills",
        },
      }
    `);
  });

  it(`should return a blastholeDrills preset when built for graphql`, () => {
    const blastholeDrillsPresetGraphql =
      blastholeDrills().buildGraphql<TCategoryDraft>();
    expect(blastholeDrillsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "blasthole-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Sprenglochbohrer",
          },
          {
            "locale": "it-IT",
            "value": "Trapani per Fori di Scoppio",
          },
          {
            "locale": "nl-NL",
            "value": "Boorinstallaties voor Explosiegaten",
          },
          {
            "locale": "fr-FR",
            "value": "Forages de trous de mine",
          },
          {
            "locale": "en-AU",
            "value": "Blasthole Drills",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras de agujeros de voladura",
          },
          {
            "locale": "en-GB",
            "value": "Blasthole Drills",
          },
          {
            "locale": "en-NZ",
            "value": "Blasthole Drills",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas para Furos de Explosão",
          },
          {
            "locale": "en-US",
            "value": "Blasthole Drills",
          },
        ],
        "orderHint": "0.000017083829494361565571101",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "sprengloch_bohrer",
          },
          {
            "locale": "it-IT",
            "value": "blasthole_drills",
          },
          {
            "locale": "nl-NL",
            "value": "blasthole_drills",
          },
          {
            "locale": "fr-FR",
            "value": "forages_trous_de_mine",
          },
          {
            "locale": "en-AU",
            "value": "blasthole_drills",
          },
          {
            "locale": "es-ES",
            "value": "perforadoras_agujeros_voladura",
          },
          {
            "locale": "en-GB",
            "value": "blasthole_drills",
          },
          {
            "locale": "en-NZ",
            "value": "blasthole_drills",
          },
          {
            "locale": "pt-PT",
            "value": "blasthole_drills",
          },
          {
            "locale": "en-US",
            "value": "blasthole_drills",
          },
        ],
      }
    `);
  });
});
