import type { TCategoryDraft } from '../../../types';
import deepMiningExcavators from './deep-mining-excavators';

describe(`with deepMiningExcavators preset`, () => {
  it(`should return a deepMiningExcavators preset`, () => {
    const deepMiningExcavatorsPreset =
      deepMiningExcavators().build<TCategoryDraft>();
    expect(deepMiningExcavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "deep-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bagger für den Tiefbau",
          "en": undefined,
          "en-AU": "Deep Mining Excavators",
          "en-GB": "Deep Mining Excavators",
          "en-NZ": "Deep Mining Excavators",
          "en-US": "Deep Mining Excavators",
          "es-ES": "Excavadoras de minería profunda",
          "fr": undefined,
          "fr-FR": "Excavatrices pour l'exploitation minière en profondeur",
          "it-IT": "Escavatori per Miniere Profonde",
          "nl-NL": "Diepe Mijnbouwgraafmachines",
          "pt-PT": "Escavadeiras para Mineração Profunda",
        },
        "orderHint": "0.0000170838294044621333943",
        "parent": {
          "key": "large-scale-mining-excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "tiefbau_bagger",
          "en": undefined,
          "en-AU": "deep_mining_excavators",
          "en-GB": "deep_mining_excavators",
          "en-NZ": "deep_mining_excavators",
          "en-US": "deep_mining_excavators",
          "es-ES": "excavadoras_mineria_profunda",
          "fr": undefined,
          "fr-FR": "excavatrices_deep_mining",
          "it-IT": "deep_mining_excavators",
          "nl-NL": "deep_mining_excavators",
          "pt-PT": "deep_mining_excavators",
        },
      }
    `);
  });

  it(`should return a deepMiningExcavators preset when built for graphql`, () => {
    const deepMiningExcavatorsPresetGraphql =
      deepMiningExcavators().buildGraphql<TCategoryDraft>();
    expect(deepMiningExcavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "deep-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bagger für den Tiefbau",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori per Miniere Profonde",
          },
          {
            "locale": "nl-NL",
            "value": "Diepe Mijnbouwgraafmachines",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices pour l'exploitation minière en profondeur",
          },
          {
            "locale": "en-AU",
            "value": "Deep Mining Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de minería profunda",
          },
          {
            "locale": "en-GB",
            "value": "Deep Mining Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Deep Mining Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras para Mineração Profunda",
          },
          {
            "locale": "en-US",
            "value": "Deep Mining Excavators",
          },
        ],
        "orderHint": "0.0000170838294044621333943",
        "parent": {
          "key": "large-scale-mining-excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "tiefbau_bagger",
          },
          {
            "locale": "it-IT",
            "value": "deep_mining_excavators",
          },
          {
            "locale": "nl-NL",
            "value": "deep_mining_excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_deep_mining",
          },
          {
            "locale": "en-AU",
            "value": "deep_mining_excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_mineria_profunda",
          },
          {
            "locale": "en-GB",
            "value": "deep_mining_excavators",
          },
          {
            "locale": "en-NZ",
            "value": "deep_mining_excavators",
          },
          {
            "locale": "pt-PT",
            "value": "deep_mining_excavators",
          },
          {
            "locale": "en-US",
            "value": "deep_mining_excavators",
          },
        ],
      }
    `);
  });
});
