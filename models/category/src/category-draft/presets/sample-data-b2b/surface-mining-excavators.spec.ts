import type { TCategoryDraft } from '../../../types';
import surfaceMiningExcavators from './surface-mining-excavators';

describe(`with surfaceMiningExcavators preset`, () => {
  it(`should return a surfaceMiningExcavators preset`, () => {
    const surfaceMiningExcavatorsPreset =
      surfaceMiningExcavators().build<TCategoryDraft>();
    expect(surfaceMiningExcavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Bagger, die im Oberflächenbergbau eingesetzt werden",
          "en": undefined,
          "en-AU": "Excavators used in surface mining",
          "en-GB": "Excavators used in surface mining",
          "en-NZ": "Excavators used in surface mining",
          "en-US": "Excavators used in surface mining",
          "es-ES": "Excavadoras utilizadas en minería superficial",
          "fr": undefined,
          "fr-FR": "Excavatrices utilisées dans l'exploitation minière de surface",
          "it-IT": "Escavatori utilizzati in miniere di superficie",
          "nl-NL": "Graafmachines gebruikt in oppervlaktemijnbouw",
          "pt-PT": "Escavadeiras usadas na mineração de superfície",
        },
        "externalId": undefined,
        "key": "surface-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bagger für den Oberflächenbergbau",
          "en": undefined,
          "en-AU": "Surface Mining Excavators",
          "en-GB": "Surface Mining Excavators",
          "en-NZ": "Surface Mining Excavators",
          "en-US": "Surface Mining Excavators",
          "es-ES": "Excavadoras de minería superficial",
          "fr": undefined,
          "fr-FR": "Excavatrices pour l'exploitation minière de surface",
          "it-IT": "Escavatori per Miniere di Superficie",
          "nl-NL": "Graafmachines voor Oppervlaktemijnbouw",
          "pt-PT": "Escavadeiras para Mineração de Superfície",
        },
        "orderHint": "0.0000171136448493168434701",
        "parent": {
          "key": "large-scale-mining-excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "oberflaechenbergbau_bagger",
          "en": undefined,
          "en-AU": "surface_mining_excavators",
          "en-GB": "surface_mining_excavators",
          "en-NZ": "surface_mining_excavators",
          "en-US": "surface_mining_excavators",
          "es-ES": "excavadoras_mineria_superficial",
          "fr": undefined,
          "fr-FR": "excavatrices_surface_mining",
          "it-IT": "surface_mining_excavators",
          "nl-NL": "surface_mining_excavators",
          "pt-PT": "surface_mining_excavators",
        },
      }
    `);
  });

  it(`should return a surfaceMiningExcavators preset when built for graphql`, () => {
    const surfaceMiningExcavatorsPresetGraphql =
      surfaceMiningExcavators().buildGraphql<TCategoryDraft>();
    expect(surfaceMiningExcavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Bagger, die im Oberflächenbergbau eingesetzt werden",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori utilizzati in miniere di superficie",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines gebruikt in oppervlaktemijnbouw",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices utilisées dans l'exploitation minière de surface",
          },
          {
            "locale": "en-AU",
            "value": "Excavators used in surface mining",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras utilizadas en minería superficial",
          },
          {
            "locale": "en-GB",
            "value": "Excavators used in surface mining",
          },
          {
            "locale": "en-NZ",
            "value": "Excavators used in surface mining",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras usadas na mineração de superfície",
          },
          {
            "locale": "en-US",
            "value": "Excavators used in surface mining",
          },
        ],
        "externalId": undefined,
        "key": "surface-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bagger für den Oberflächenbergbau",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori per Miniere di Superficie",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines voor Oppervlaktemijnbouw",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices pour l'exploitation minière de surface",
          },
          {
            "locale": "en-AU",
            "value": "Surface Mining Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de minería superficial",
          },
          {
            "locale": "en-GB",
            "value": "Surface Mining Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Surface Mining Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras para Mineração de Superfície",
          },
          {
            "locale": "en-US",
            "value": "Surface Mining Excavators",
          },
        ],
        "orderHint": "0.0000171136448493168434701",
        "parent": {
          "key": "large-scale-mining-excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "oberflaechenbergbau_bagger",
          },
          {
            "locale": "it-IT",
            "value": "surface_mining_excavators",
          },
          {
            "locale": "nl-NL",
            "value": "surface_mining_excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_surface_mining",
          },
          {
            "locale": "en-AU",
            "value": "surface_mining_excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_mineria_superficial",
          },
          {
            "locale": "en-GB",
            "value": "surface_mining_excavators",
          },
          {
            "locale": "en-NZ",
            "value": "surface_mining_excavators",
          },
          {
            "locale": "pt-PT",
            "value": "surface_mining_excavators",
          },
          {
            "locale": "en-US",
            "value": "surface_mining_excavators",
          },
        ],
      }
    `);
  });
});
