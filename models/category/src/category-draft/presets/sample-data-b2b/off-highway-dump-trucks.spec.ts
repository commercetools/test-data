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
        "description": {
          "de-DE": "Kipper, die für den Offroad-Einsatz konzipiert sind",
          "en-AU": "Dump trucks designed for off-highway use",
          "en-GB": "Dump trucks designed for off-highway use",
          "en-NZ": "Dump trucks designed for off-highway use",
          "en-US": "Dump trucks designed for off-highway use",
          "es-ES": "Camiones volquete diseñados para uso fuera de carretera",
          "fr-FR": "Camions-bennes conçus pour une utilisation tout-terrain",
          "it-IT": "Camion ribaltabili progettati per uso fuoristrada",
          "nl-NL": "Kipwagens ontworpen voor gebruik buiten de weg",
          "pt-PT": "Caminhões basculantes projetados para uso fora de estrada",
        },
        "externalId": undefined,
        "key": "off-highway-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Kipper für den Offroad-Einsatz",
          "en-AU": "Off-Highway Dump Trucks",
          "en-GB": "Off-Highway Dump Trucks",
          "en-NZ": "Off-Highway Dump Trucks",
          "en-US": "Off-Highway Dump Trucks",
          "es-ES": "Camiones volquete todo terreno",
          "fr-FR": "Camions-bennes tout-terrain",
          "it-IT": "Camion Ribaltabili Fuoristrada",
          "nl-NL": "Off-road Kipwagens",
          "pt-PT": "Caminhões Basculantes Fora de Estrada",
        },
        "orderHint": "0.0000171136448473756887464",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "offroad_kipper",
          "en-AU": "off_highway_dump_trucks",
          "en-GB": "off_highway_dump_trucks",
          "en-NZ": "off_highway_dump_trucks",
          "en-US": "off_highway_dump_trucks",
          "es-ES": "camiones_volquete_todo_terreno",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Kipper, die für den Offroad-Einsatz konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabili progettati per uso fuoristrada",
          },
          {
            "locale": "nl-NL",
            "value": "Kipwagens ontworpen voor gebruik buiten de weg",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes conçus pour une utilisation tout-terrain",
          },
          {
            "locale": "en-AU",
            "value": "Dump trucks designed for off-highway use",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete diseñados para uso fuera de carretera",
          },
          {
            "locale": "en-GB",
            "value": "Dump trucks designed for off-highway use",
          },
          {
            "locale": "en-NZ",
            "value": "Dump trucks designed for off-highway use",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões basculantes projetados para uso fora de estrada",
          },
          {
            "locale": "en-US",
            "value": "Dump trucks designed for off-highway use",
          },
        ],
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
        "orderHint": "0.0000171136448473756887464",
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
