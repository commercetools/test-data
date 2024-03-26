import type { TCategoryDraft } from '../../../types';
import dumpTrucks from './dump-trucks';

describe(`with dumpTrucks preset`, () => {
  it(`should return a dumpTrucks preset`, () => {
    const dumpTrucksPreset = dumpTrucks().build<TCategoryDraft>();
    expect(dumpTrucksPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Kipper, die bei Bergbauoperationen verwendet werden",
          "en-AU": "Dump trucks used in mining operations",
          "en-GB": "Dump trucks used in mining operations",
          "en-NZ": "Dump trucks used in mining operations",
          "en-US": "Dump trucks used in mining operations",
          "es-ES": "Camiones volquete utilizados en operaciones mineras",
          "fr-FR": "Camions-bennes utilisés dans les opérations minières",
          "it-IT": "Camion ribaltabili utilizzati in operazioni minerarie",
          "nl-NL": "Kipwagens gebruikt in mijnbouwoperaties",
          "pt-PT": "Caminhões basculantes usados em operações de mineração",
        },
        "externalId": undefined,
        "key": "dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Bergbaukipper",
          "en-AU": "Dump Trucks",
          "en-GB": "Dump Trucks",
          "en-NZ": "Dump Trucks",
          "en-US": "Dump Trucks",
          "es-ES": "Camiones volquete",
          "fr-FR": "Camions-bennes",
          "it-IT": "Camion Ribaltabili",
          "nl-NL": "Kipwagens",
          "pt-PT": "Caminhões Basculantes",
        },
        "orderHint": "0.00001711364484524846530528",
        "parent": undefined,
        "slug": {
          "de-DE": "bergbau_kipper",
          "en-AU": "mining_dump_trucks",
          "en-GB": "mining_dump_trucks",
          "en-NZ": "mining_dump_trucks",
          "en-US": "mining_dump_trucks",
          "es-ES": "camiones_volquete_mineros",
          "fr-FR": "camions_bennes_miniers",
          "it-IT": "mining_dump_trucks",
          "nl-NL": "mining_dump_trucks",
          "pt-PT": "mining_dump_trucks",
        },
      }
    `);
  });

  it(`should return a dumpTrucks preset when built for graphql`, () => {
    const dumpTrucksPresetGraphql = dumpTrucks().buildGraphql<TCategoryDraft>();
    expect(dumpTrucksPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Kipper, die bei Bergbauoperationen verwendet werden",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabili utilizzati in operazioni minerarie",
          },
          {
            "locale": "nl-NL",
            "value": "Kipwagens gebruikt in mijnbouwoperaties",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes utilisés dans les opérations minières",
          },
          {
            "locale": "en-AU",
            "value": "Dump trucks used in mining operations",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete utilizados en operaciones mineras",
          },
          {
            "locale": "en-GB",
            "value": "Dump trucks used in mining operations",
          },
          {
            "locale": "en-NZ",
            "value": "Dump trucks used in mining operations",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões basculantes usados em operações de mineração",
          },
          {
            "locale": "en-US",
            "value": "Dump trucks used in mining operations",
          },
        ],
        "externalId": undefined,
        "key": "dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bergbaukipper",
          },
          {
            "locale": "it-IT",
            "value": "Camion Ribaltabili",
          },
          {
            "locale": "nl-NL",
            "value": "Kipwagens",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes",
          },
          {
            "locale": "en-AU",
            "value": "Dump Trucks",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete",
          },
          {
            "locale": "en-GB",
            "value": "Dump Trucks",
          },
          {
            "locale": "en-NZ",
            "value": "Dump Trucks",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões Basculantes",
          },
          {
            "locale": "en-US",
            "value": "Dump Trucks",
          },
        ],
        "orderHint": "0.00001711364484524846530528",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "bergbau_kipper",
          },
          {
            "locale": "it-IT",
            "value": "mining_dump_trucks",
          },
          {
            "locale": "nl-NL",
            "value": "mining_dump_trucks",
          },
          {
            "locale": "fr-FR",
            "value": "camions_bennes_miniers",
          },
          {
            "locale": "en-AU",
            "value": "mining_dump_trucks",
          },
          {
            "locale": "es-ES",
            "value": "camiones_volquete_mineros",
          },
          {
            "locale": "en-GB",
            "value": "mining_dump_trucks",
          },
          {
            "locale": "en-NZ",
            "value": "mining_dump_trucks",
          },
          {
            "locale": "pt-PT",
            "value": "mining_dump_trucks",
          },
          {
            "locale": "en-US",
            "value": "mining_dump_trucks",
          },
        ],
      }
    `);
  });
});
