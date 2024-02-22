import type { TCategoryDraft } from '../../../types';
import offHighwayDumpTrucks from './off-highway-dump-trucks';

describe(`with offHighwayDumpTrucks preset`, () => {
  it(`should return a offHighwayDumpTrucks preset`, () => {
    const offHighwayDumpTrucksPreset =
      offHighwayDumpTrucks().build<TCategoryDraft>();
    expect(offHighwayDumpTrucksPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "off-highway-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kipper für den Offroad-Einsatz",
          "en": undefined,
          "en-AU": "Off-Highway Dump Trucks",
          "en-GB": "Off-Highway Dump Trucks",
          "en-NZ": "Off-Highway Dump Trucks",
          "en-US": "Off-Highway Dump Trucks",
          "es-ES": "Camiones volquete todo terreno",
          "fr": undefined,
          "fr-FR": "Camions-bennes tout-terrain",
          "it-IT": "Camion Ribaltabili Fuoristrada",
          "nl-NL": "Off-road Kipwagens",
          "pt-PT": "Caminhões Basculantes Fora de Estrada",
        },
        "orderHint": "0.000017083829456541934993986",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "offroad_kipper",
          "en": undefined,
          "en-AU": "off_highway_dump_trucks",
          "en-GB": "off_highway_dump_trucks",
          "en-NZ": "off_highway_dump_trucks",
          "en-US": "off_highway_dump_trucks",
          "es-ES": "camiones_volquete_todo_terreno",
          "fr": undefined,
          "fr-FR": "camions_bennes_tout-terrain",
          "it-IT": "off_highway_dump_trucks",
          "nl-NL": "off_highway_dump_trucks",
          "pt-PT": "off_highway_dump_trucks",
        },
      }
    `);
  });

  it(`should return a offHighwayDumpTrucks preset when built for graphql`, () => {
    const offHighwayDumpTrucksPresetGraphql =
      offHighwayDumpTrucks().buildGraphql<TCategoryDraft>();
    expect(offHighwayDumpTrucksPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "off-highway-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Kipper für den Offroad-Einsatz",
          },
          {
            "locale": "it-IT",
            "value": "Camion Ribaltabili Fuoristrada",
          },
          {
            "locale": "nl-NL",
            "value": "Off-road Kipwagens",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes tout-terrain",
          },
          {
            "locale": "en-AU",
            "value": "Off-Highway Dump Trucks",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete todo terreno",
          },
          {
            "locale": "en-GB",
            "value": "Off-Highway Dump Trucks",
          },
          {
            "locale": "en-NZ",
            "value": "Off-Highway Dump Trucks",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões Basculantes Fora de Estrada",
          },
          {
            "locale": "en-US",
            "value": "Off-Highway Dump Trucks",
          },
        ],
        "orderHint": "0.000017083829456541934993986",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "offroad_kipper",
          },
          {
            "locale": "it-IT",
            "value": "off_highway_dump_trucks",
          },
          {
            "locale": "nl-NL",
            "value": "off_highway_dump_trucks",
          },
          {
            "locale": "fr-FR",
            "value": "camions_bennes_tout-terrain",
          },
          {
            "locale": "en-AU",
            "value": "off_highway_dump_trucks",
          },
          {
            "locale": "es-ES",
            "value": "camiones_volquete_todo_terreno",
          },
          {
            "locale": "en-GB",
            "value": "off_highway_dump_trucks",
          },
          {
            "locale": "en-NZ",
            "value": "off_highway_dump_trucks",
          },
          {
            "locale": "pt-PT",
            "value": "off_highway_dump_trucks",
          },
          {
            "locale": "en-US",
            "value": "off_highway_dump_trucks",
          },
        ],
      }
    `);
  });
});
