import type { TCategoryDraft } from '../../../types';
import rigidDumpTrucks from './rigid-dump-trucks';

describe(`with rigidDumpTrucks preset`, () => {
  it(`should return a rigidDumpTrucks preset`, () => {
    const rigidDumpTrucksPreset = rigidDumpTrucks().build<TCategoryDraft>();
    expect(rigidDumpTrucksPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "rigid-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Starre Kipper",
          "en": undefined,
          "en-AU": "Rigid Dump Trucks",
          "en-GB": "Rigid Dump Trucks",
          "en-NZ": "Rigid Dump Trucks",
          "en-US": "Rigid Dump Trucks",
          "es-ES": "Camiones volquete rígidos",
          "fr": undefined,
          "fr-FR": "Camions-bennes rigides",
          "it-IT": "Camion Ribaltabili Rigidi",
          "nl-NL": "Starre Kipwagens",
          "pt-PT": "Caminhões Basculantes Rígidos",
        },
        "orderHint": "0.000017083829451711521889254",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "starre_kipper",
          "en": undefined,
          "en-AU": "rigid_dump_trucks",
          "en-GB": "rigid_dump_trucks",
          "en-NZ": "rigid_dump_trucks",
          "en-US": "rigid_dump_trucks",
          "es-ES": "camiones_volquete_rigidos",
          "fr": undefined,
          "fr-FR": "camions_bennes_rigides",
          "it-IT": "rigid_dump_trucks",
          "nl-NL": "rigid_dump_trucks",
          "pt-PT": "rigid_dump_trucks",
        },
      }
    `);
  });

  it(`should return a rigidDumpTrucks preset when built for graphql`, () => {
    const rigidDumpTrucksPresetGraphql =
      rigidDumpTrucks().buildGraphql<TCategoryDraft>();
    expect(rigidDumpTrucksPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "rigid-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Starre Kipper",
          },
          {
            "locale": "it-IT",
            "value": "Camion Ribaltabili Rigidi",
          },
          {
            "locale": "nl-NL",
            "value": "Starre Kipwagens",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes rigides",
          },
          {
            "locale": "en-AU",
            "value": "Rigid Dump Trucks",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete rígidos",
          },
          {
            "locale": "en-GB",
            "value": "Rigid Dump Trucks",
          },
          {
            "locale": "en-NZ",
            "value": "Rigid Dump Trucks",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões Basculantes Rígidos",
          },
          {
            "locale": "en-US",
            "value": "Rigid Dump Trucks",
          },
        ],
        "orderHint": "0.000017083829451711521889254",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "starre_kipper",
          },
          {
            "locale": "it-IT",
            "value": "rigid_dump_trucks",
          },
          {
            "locale": "nl-NL",
            "value": "rigid_dump_trucks",
          },
          {
            "locale": "fr-FR",
            "value": "camions_bennes_rigides",
          },
          {
            "locale": "en-AU",
            "value": "rigid_dump_trucks",
          },
          {
            "locale": "es-ES",
            "value": "camiones_volquete_rigidos",
          },
          {
            "locale": "en-GB",
            "value": "rigid_dump_trucks",
          },
          {
            "locale": "en-NZ",
            "value": "rigid_dump_trucks",
          },
          {
            "locale": "pt-PT",
            "value": "rigid_dump_trucks",
          },
          {
            "locale": "en-US",
            "value": "rigid_dump_trucks",
          },
        ],
      }
    `);
  });
});
