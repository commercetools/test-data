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
        "description": {
          "de-DE": "Bagger, die bei Bergbauoperationen im großen Maßstab eingesetzt werden",
          "en-AU": "Excavators used in large-scale mining operations",
          "en-GB": "Excavators used in large-scale mining operations",
          "en-NZ": "Excavators used in large-scale mining operations",
          "en-US": "Excavators used in large-scale mining operation",
          "es-ES": "Excavadoras utilizadas en operaciones mineras a gran escala",
          "fr-FR": "Excavatrices utilisées dans les opérations minières à grande échelle",
          "it-IT": "Escavatori utilizzati in operazioni minerarie su larga scala",
          "nl-NL": "Graafmachines gebruikt in grootschalige mijnbouwoperaties",
          "pt-PT": "Escavadeiras usadas em operações de mineração de grande escala",
        },
        "externalId": undefined,
        "key": "large-scale-mining-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Bergbaubagger",
          "en-AU": "Mining Excavators",
          "en-GB": "Mining Excavators",
          "en-NZ": "Mining Excavators",
          "en-US": "Mining Excavators",
          "es-ES": "Excavadoras de minería",
          "fr-FR": "Excavatrices pour l'exploitation minière",
          "it-IT": "Escavatori Minerari",
          "nl-NL": "Mijnbouwgraafmachines",
          "pt-PT": "Escavadeiras de Mineração",
        },
        "orderHint": "0.000017113644847321548509128",
        "parent": {
          "key": "excavators",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "grobmabstabbau_bagger",
          "en-AU": "large_scale_mining_excavators",
          "en-GB": "large_scale_mining_excavators",
          "en-NZ": "large_scale_mining_excavators",
          "en-US": "large_scale_mining_excavators",
          "es-ES": "excavadoras_mineria_gran_escala",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Bagger, die bei Bergbauoperationen im großen Maßstab eingesetzt werden",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori utilizzati in operazioni minerarie su larga scala",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines gebruikt in grootschalige mijnbouwoperaties",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices utilisées dans les opérations minières à grande échelle",
          },
          {
            "locale": "en-AU",
            "value": "Excavators used in large-scale mining operations",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras utilizadas en operaciones mineras a gran escala",
          },
          {
            "locale": "en-GB",
            "value": "Excavators used in large-scale mining operations",
          },
          {
            "locale": "en-NZ",
            "value": "Excavators used in large-scale mining operations",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras usadas em operações de mineração de grande escala",
          },
          {
            "locale": "en-US",
            "value": "Excavators used in large-scale mining operation",
          },
        ],
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
            "value": "Excavatrices pour l'exploitation minière",
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
        "orderHint": "0.000017113644847321548509128",
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
