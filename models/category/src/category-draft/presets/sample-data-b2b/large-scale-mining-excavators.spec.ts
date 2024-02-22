import type { TCategoryDraft } from '../../../types';
import largeScaleMiningExcavators from './large-scale-mining-excavators';

describe(`with largeScaleMiningExcavators preset`, () => {
  it(`should return a largeScaleMiningExcavators preset`, () => {
    const largeScaleMiningExcavatorsPreset =
      largeScaleMiningExcavators().build<TCategoryDraft>();
    expect(largeScaleMiningExcavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-scale-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bergbaubagger",
          "en": undefined,
          "en-AU": "Mining Excavators",
          "en-GB": "Mining Excavators",
          "en-NZ": "Mining Excavators",
          "en-US": "Mining Excavators",
          "es-ES": "Excavadoras de minería",
          "fr": undefined,
          "fr-FR": "Excavatrices pour l&#39;exploitation minière",
          "it-IT": "Escavatori Minerari",
          "nl-NL": "Mijnbouwgraafmachines",
          "pt-PT": "Escavadeiras de Mineração",
        },
        "orderHint": "0.000017083829398271003971003",
        "parent": {
          "key": "excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "grobmabstabbau_bagger",
          "en": undefined,
          "en-AU": "large_scale_mining_excavators",
          "en-GB": "large_scale_mining_excavators",
          "en-NZ": "large_scale_mining_excavators",
          "en-US": "large_scale_mining_excavators",
          "es-ES": "excavadoras_mineria_gran_escala",
          "fr": undefined,
          "fr-FR": "excavatrices_grande_echelle_mining",
          "it-IT": "large_scale_mining_excavators",
          "nl-NL": "large_scale_mining_excavators",
          "pt-PT": "large_scale_mining_excavators",
        },
      }
    `);
  });

  it(`should return a largeScaleMiningExcavators preset when built for graphql`, () => {
    const largeScaleMiningExcavatorsPresetGraphql =
      largeScaleMiningExcavators().buildGraphql<TCategoryDraft>();
    expect(largeScaleMiningExcavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-scale-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bergbaubagger",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori Minerari",
          },
          {
            "locale": "nl-NL",
            "value": "Mijnbouwgraafmachines",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices pour l&#39;exploitation minière",
          },
          {
            "locale": "en-AU",
            "value": "Mining Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de minería",
          },
          {
            "locale": "en-GB",
            "value": "Mining Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Mining Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras de Mineração",
          },
          {
            "locale": "en-US",
            "value": "Mining Excavators",
          },
        ],
        "orderHint": "0.000017083829398271003971003",
        "parent": {
          "key": "excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "grobmabstabbau_bagger",
          },
          {
            "locale": "it-IT",
            "value": "large_scale_mining_excavators",
          },
          {
            "locale": "nl-NL",
            "value": "large_scale_mining_excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_grande_echelle_mining",
          },
          {
            "locale": "en-AU",
            "value": "large_scale_mining_excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_mineria_gran_escala",
          },
          {
            "locale": "en-GB",
            "value": "large_scale_mining_excavators",
          },
          {
            "locale": "en-NZ",
            "value": "large_scale_mining_excavators",
          },
          {
            "locale": "pt-PT",
            "value": "large_scale_mining_excavators",
          },
          {
            "locale": "en-US",
            "value": "large_scale_mining_excavators",
          },
        ],
      }
    `);
  });
});
