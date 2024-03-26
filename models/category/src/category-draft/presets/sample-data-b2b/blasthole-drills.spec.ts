import type { TCategoryDraft } from '../../../types';
import blastholeDrills from './blasthole-drills';

describe(`with blastholeDrills preset`, () => {
  it(`should return a blastholeDrills preset`, () => {
    const blastholeDrillsPreset = blastholeDrills().build<TCategoryDraft>();
    expect(blastholeDrillsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Bohrer, die für Sprenglochoperationen konzipiert sind",
          "en-AU": "Drills designed for blasthole operations",
          "en-GB": "Drills designed for blasthole operations",
          "en-NZ": "Drills designed for blasthole operations",
          "en-US": "Drills designed for blasthole operations",
          "es-ES": "Perforadoras diseñadas para operaciones de agujeros de voladura",
          "fr-FR": "Forages conçus pour les opérations de trous de mine",
          "it-IT": "Trapani progettati per operazioni di perforazione di fori di scoppio",
          "nl-NL": "Boormachines ontworpen voor explosiegaten",
          "pt-PT": "Brocas projetadas para operações de furos de explosão",
        },
        "externalId": undefined,
        "key": "blasthole-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Sprenglochbohrer",
          "en-AU": "Blasthole Drills",
          "en-GB": "Blasthole Drills",
          "en-NZ": "Blasthole Drills",
          "en-US": "Blasthole Drills",
          "es-ES": "Perforadoras de agujeros de voladura",
          "fr-FR": "Forages de trous de mine",
          "it-IT": "Trapani per Fori di Scoppio",
          "nl-NL": "Boorinstallaties voor Explosiegaten",
          "pt-PT": "Brocas para Furos de Explosão",
        },
        "orderHint": "0.000017113644847441329183825",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "sprengloch_bohrer",
          "en-AU": "blasthole_drills",
          "en-GB": "blasthole_drills",
          "en-NZ": "blasthole_drills",
          "en-US": "blasthole_drills",
          "es-ES": "perforadoras_agujeros_voladura",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Bohrer, die für Sprenglochoperationen konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Trapani progettati per operazioni di perforazione di fori di scoppio",
          },
          {
            "locale": "nl-NL",
            "value": "Boormachines ontworpen voor explosiegaten",
          },
          {
            "locale": "fr-FR",
            "value": "Forages conçus pour les opérations de trous de mine",
          },
          {
            "locale": "en-AU",
            "value": "Drills designed for blasthole operations",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras diseñadas para operaciones de agujeros de voladura",
          },
          {
            "locale": "en-GB",
            "value": "Drills designed for blasthole operations",
          },
          {
            "locale": "en-NZ",
            "value": "Drills designed for blasthole operations",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas projetadas para operações de furos de explosão",
          },
          {
            "locale": "en-US",
            "value": "Drills designed for blasthole operations",
          },
        ],
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
        "orderHint": "0.000017113644847441329183825",
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
