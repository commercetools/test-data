import type { TCategoryDraft } from '../../../types';
import dumpTrucks from './dump-trucks';

describe(`with dumpTrucks preset`, () => {
  it(`should return a dumpTrucks preset`, () => {
    const dumpTrucksPreset = dumpTrucks().build<TCategoryDraft>();
    expect(dumpTrucksPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bergbaukipper",
          "en": undefined,
          "en-AU": "Dump Trucks",
          "en-GB": "Dump Trucks",
          "en-NZ": "Dump Trucks",
          "en-US": "Dump Trucks",
          "es-ES": "Camiones volquete",
          "fr": undefined,
          "fr-FR": "Camions-bennes",
          "it-IT": "Camion Ribaltabili",
          "nl-NL": "Kipwagens",
          "pt-PT": "Caminhões Basculantes",
        },
        "orderHint": "0.000017083829376992031863512",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "bergbau_kipper",
          "en": undefined,
          "en-AU": "mining_dump_trucks",
          "en-GB": "mining_dump_trucks",
          "en-NZ": "mining_dump_trucks",
          "en-US": "mining_dump_trucks",
          "es-ES": "camiones_volquete_mineros",
          "fr": undefined,
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
        "description": undefined,
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
        "orderHint": "0.000017083829376992031863512",
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
