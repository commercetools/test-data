import type { TCategoryDraft } from '../../../types';
import articulatedDumpTrucks from './articulated-dump-trucks';

describe(`with articulatedDumpTrucks preset`, () => {
  it(`should return a articulatedDumpTrucks preset`, () => {
    const articulatedDumpTrucksPreset =
      articulatedDumpTrucks().build<TCategoryDraft>();
    expect(articulatedDumpTrucksPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Kipper mit gelenkigen Verbindungen",
          "en": undefined,
          "en-AU": "Dump trucks with articulated joints",
          "en-GB": "Dump trucks with articulated joints",
          "en-NZ": "Dump trucks with articulated joints",
          "en-US": "Dump trucks with articulated joints",
          "es-ES": "Camiones volquete con articulaciones",
          "fr": undefined,
          "fr-FR": "Camions-bennes avec des articulations articulées",
          "it-IT": "Camion ribaltabili con giunti articolati",
          "nl-NL": "Kipwagens met scharnierende verbindingen",
          "pt-PT": "Caminhões basculantes com juntas articuladas",
        },
        "externalId": undefined,
        "key": "articulated-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Gelenk-Kipper",
          "en": undefined,
          "en-AU": "Articulated Dump Trucks",
          "en-GB": "Articulated Dump Trucks",
          "en-NZ": "Articulated Dump Trucks",
          "en-US": "Articulated Dump Trucks",
          "es-ES": "Camiones volquete articulados",
          "fr": undefined,
          "fr-FR": "Camions-bennes articulés",
          "it-IT": "Camion Ribaltabili Articolati",
          "nl-NL": "Knikgestuurde Kipwagens",
          "pt-PT": "Caminhões Basculantes Articulados",
        },
        "orderHint": "0.000017113644847751602265225",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "gelenk_kipper",
          "en": undefined,
          "en-AU": "articulated_dump_trucks",
          "en-GB": "articulated_dump_trucks",
          "en-NZ": "articulated_dump_trucks",
          "en-US": "articulated_dump_trucks",
          "es-ES": "camiones_volquete_articulados",
          "fr": undefined,
          "fr-FR": "camions_bennes_articules",
          "it-IT": "articulated_dump_trucks",
          "nl-NL": "articulated_dump_trucks",
          "pt-PT": "articulated_dump_trucks",
        },
      }
    `);
  });

  it(`should return a articulatedDumpTrucks preset when built for graphql`, () => {
    const articulatedDumpTrucksPresetGraphql =
      articulatedDumpTrucks().buildGraphql<TCategoryDraft>();
    expect(articulatedDumpTrucksPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Kipper mit gelenkigen Verbindungen",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabili con giunti articolati",
          },
          {
            "locale": "nl-NL",
            "value": "Kipwagens met scharnierende verbindingen",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes avec des articulations articulées",
          },
          {
            "locale": "en-AU",
            "value": "Dump trucks with articulated joints",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete con articulaciones",
          },
          {
            "locale": "en-GB",
            "value": "Dump trucks with articulated joints",
          },
          {
            "locale": "en-NZ",
            "value": "Dump trucks with articulated joints",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões basculantes com juntas articuladas",
          },
          {
            "locale": "en-US",
            "value": "Dump trucks with articulated joints",
          },
        ],
        "externalId": undefined,
        "key": "articulated-dump-trucks",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Gelenk-Kipper",
          },
          {
            "locale": "it-IT",
            "value": "Camion Ribaltabili Articolati",
          },
          {
            "locale": "nl-NL",
            "value": "Knikgestuurde Kipwagens",
          },
          {
            "locale": "fr-FR",
            "value": "Camions-bennes articulés",
          },
          {
            "locale": "en-AU",
            "value": "Articulated Dump Trucks",
          },
          {
            "locale": "es-ES",
            "value": "Camiones volquete articulados",
          },
          {
            "locale": "en-GB",
            "value": "Articulated Dump Trucks",
          },
          {
            "locale": "en-NZ",
            "value": "Articulated Dump Trucks",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhões Basculantes Articulados",
          },
          {
            "locale": "en-US",
            "value": "Articulated Dump Trucks",
          },
        ],
        "orderHint": "0.000017113644847751602265225",
        "parent": {
          "key": "dump-trucks",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "gelenk_kipper",
          },
          {
            "locale": "it-IT",
            "value": "articulated_dump_trucks",
          },
          {
            "locale": "nl-NL",
            "value": "articulated_dump_trucks",
          },
          {
            "locale": "fr-FR",
            "value": "camions_bennes_articules",
          },
          {
            "locale": "en-AU",
            "value": "articulated_dump_trucks",
          },
          {
            "locale": "es-ES",
            "value": "camiones_volquete_articulados",
          },
          {
            "locale": "en-GB",
            "value": "articulated_dump_trucks",
          },
          {
            "locale": "en-NZ",
            "value": "articulated_dump_trucks",
          },
          {
            "locale": "pt-PT",
            "value": "articulated_dump_trucks",
          },
          {
            "locale": "en-US",
            "value": "articulated_dump_trucks",
          },
        ],
      }
    `);
  });
});
